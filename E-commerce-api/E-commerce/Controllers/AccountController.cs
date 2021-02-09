using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.ModelView;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace E_commerce.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDb _db;
        private readonly UserManager<ApplicationUser> _manager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public AccountController(ApplicationDb db, 
               UserManager<ApplicationUser> manager,
               SignInManager<ApplicationUser> signInManager,
               RoleManager<ApplicationRole> roleManager)
        {
            _db = db;
            _manager = manager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (model == null)
            {
                return NotFound();
            }
            if (ModelState.IsValid)
            {
                if (UserExists(model.UserName))
                {
                    return BadRequest("UserName is used");
                }
                if (EmailExists(model.Email))
                {
                    return BadRequest("Email is used");
                }
                if (!isEmailValid(model.Email))
                {
                    return BadRequest("Email is invalid");
                }
                var user = new ApplicationUser
                {
                    UserName = model.UserName,
                    Email = model.Email
                };
                var result = await _manager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
            return StatusCode(StatusCodes.Status400BadRequest);
        }

        private bool UserExists(string userName)
        {
            return _db.Users.Any(x=> x.UserName == userName);
        }

        private bool isEmailValid(string email)
        {
            Regex regex = new Regex(@"\w+\@\w+.com|\w+\@\w+.net");
            if (regex.IsMatch(email))
            {
                return true;
            }
            return false;
        }

        private bool EmailExists(string email)
        {
            return _db.Users.Any(x => x.Email == email);
        }
        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<string>> Login(LoginModel model)
        {
            await CreateRoles();
            await CreateAdmin();
            if (model == null)
            {
                return NotFound();
            }
            var user = await _manager.FindByEmailAsync(model.Email);
            if (user == null)
                return NotFound("Email or Password is invalid");
            var result = await _signInManager.PasswordSignInAsync(user , model.Password, model.RememberMe, true);
            if (result.Succeeded)
            {
                if (await _roleManager.RoleExistsAsync("User"))
                {
                    if (!await _manager.IsInRoleAsync(user , "User") && !await _manager.IsInRoleAsync(user, "Admin"))
                    {
                        await _manager.AddToRoleAsync(user, "User");
                    }
                }
                var roleName = await GetRolebyId(user.Id);
                if (roleName != null)
                    AddCookies(user.UserName ,roleName , user.Id , user.Email, model.RememberMe);
                return roleName;
            }
            else if(result.IsLockedOut)
            {
                return Unauthorized("This email is locked temporary");
            }
            return BadRequest("Email or Password is invalid");
        }

        private async Task CreateRoles()
        {
            if (_roleManager.Roles.Count() < 1)
            {
                var role = new ApplicationRole
                {
                    Name = "Admin"
                };
                await _roleManager.CreateAsync(role);
                role = new ApplicationRole
                {
                    Name = "User"
                };
                await _roleManager.CreateAsync(role);
            }
        }

       /* [HttpGet]
        [Route("GetRoleName/{email}")]
        public async Task<string> GetRoleName(string email)
        {
            var user = await _manager.FindByEmailAsync(email);
            if (user != null)
            {
                var userRole = await _db.UserRoles.FirstOrDefaultAsync(u => u.UserId == user.Id);
                if (userRole != null)
                {
                    var roleName = await _db.Roles.Where(r => r.Id == userRole.RoleId).Select(n => n.Name).FirstOrDefaultAsync();
                    
                    if (roleName != null)
                        return roleName;
                }
            }
            return null;
        }*/

        [HttpGet]
        [Route("IsUserExists/{name}")]
        public async Task<IActionResult> IsUserExists(string name)
        {
            var result = await _db.Users.AnyAsync(n => n.UserName == name);
            if (result)
            {
                return StatusCode(StatusCodes.Status200OK);

            }
            return StatusCode(StatusCodes.Status400BadRequest);

        }
        [HttpGet]
        [Route("IsEmailExists")]
        public async Task<IActionResult> IsEmailExists(string email)
        {
            var result = await _db.Users.AnyAsync(n => n.Email == email);
            if (result)
            {
                return StatusCode(StatusCodes.Status200OK);
            }
            return StatusCode(StatusCodes.Status400BadRequest);

        }
        [HttpGet]
        [Route("EmailNotExists")]
        public async Task<IActionResult> EmailNotExists(string email)
        {
            var result = await _db.Users.AnyAsync(n => n.Email == email);
            if (!result)
            {
                return StatusCode(StatusCodes.Status200OK);
            }
            return StatusCode(StatusCodes.Status400BadRequest);

        }
        private async Task CreateAdmin()
        {
            var admin = await _manager.FindByNameAsync("Admin");
            if (admin == null)
            {
                var user = new ApplicationUser
                {
                    Email = "Admin@test.com",
                    UserName = "Admin"
                };
                var result = await _manager.CreateAsync(user , "12345Aa=");
                if (result.Succeeded)
                {
                    if (await _roleManager.RoleExistsAsync("Admin"))
                    {
                        await _manager.AddToRoleAsync(user , "Admin");
                    }
                }
            }
        }
        private async Task<string> GetRolebyId(string id)
        {
            var userRole = await _db.UserRoles.FirstOrDefaultAsync(x => x.UserId == id);
            var roleName = await _db.Roles.Where(r => r.Id == userRole.RoleId).Select(r => r.Name).FirstOrDefaultAsync();
            if (roleName != null)
            {
                return roleName;
            }
            return null;

        }
        private async void AddCookies(string username, string rolename , string userId, string email, bool remember)
        {
            var claim = new List<Claim>
            {
                new Claim(ClaimTypes.Name, username),
                new Claim(ClaimTypes.Role , rolename),
                new Claim(ClaimTypes.NameIdentifier, userId),
                new Claim(ClaimTypes.Email , email)
            };
            var claimIdentity = new ClaimsIdentity(claim, CookieAuthenticationDefaults.AuthenticationScheme);
            if (remember)
            {
                var authProperties = new AuthenticationProperties
                {
                    AllowRefresh = true,
                    IsPersistent = remember,
                    ExpiresUtc = DateTime.UtcNow.AddDays(10)
                };
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimIdentity) , 
                    authProperties);
            }
            else
            {
                var authProperties = new AuthenticationProperties
                {
                    AllowRefresh = true,
                    IsPersistent = remember,
                    ExpiresUtc = DateTime.UtcNow.AddDays(10)
                };
                await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
                    new ClaimsPrincipal(claimIdentity),
                    authProperties);
            }
        }
        [Authorize]
        [HttpGet]
        [Route("CheckUserClaims/{email}&{role}")]
        public IActionResult CheckUserClaims(string email , string role)
        {
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;
            var userRole = User.FindFirst(ClaimTypes.Role)?.Value;
            var id = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userEmail != null && userRole != null && id != null)
            {
                if (email == userEmail && role == userRole)
                {
                    return StatusCode(StatusCodes.Status200OK);
                }
            }
            return StatusCode(StatusCodes.Status203NonAuthoritative);
        }
        [Authorize]
        [HttpGet]
        [Route("GetName/{email}")]
        public async Task<string> GetName(string email)
        {
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user != null)
            {
                return user.UserName;
            }
            return null;
        }
        [HttpGet]
        [Route("Logout")]
        public async Task<IActionResult> Logout()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }
    }
}