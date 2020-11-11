using E_commerce.Models;
using E_commerce.ModelView;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.Admin
{
    public class AdminRepo : IAdminRepository
    {
        private readonly ApplicationDb _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public AdminRepo(ApplicationDb db, UserManager<ApplicationUser> userManager,
            RoleManager<ApplicationRole> roleManager)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;
        }

        public async Task<IEnumerable<UserRoleModel>> GetUserRoleAsync()
        {
            var query = await (from userRole in _db.UserRoles
                        join users in _db.Users
                        on userRole.UserId equals users.Id
                        join roles in _db.Roles
                        on userRole.RoleId equals roles.Id
                        select new
                        {
                            userRole.UserId,
                            users.UserName,
                            userRole.RoleId,
                            roles.Name
                        }).ToListAsync();
            List<UserRoleModel> userRoles = new List<UserRoleModel>();
            if (query.Count > 0)
            {
                for (var i =0; i <query.Count; i++)
                {
                    var model = new UserRoleModel
                    {
                        UserId = query[i].UserId,
                        UserName = query[i].UserName,
                        RoleId = query[i].RoleId,
                        RoleName = query[i].Name
                    };
                    userRoles.Add(model);
                }
            }
            return userRoles;
                        
        }

        public async Task<IEnumerable<ApplicationUser>> GetUsersAsync()
        {
            return await _db.Users.ToListAsync();
        }
    }
}
