using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repository.CategoryR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace E_commerce.Controllers
{
    
    [Route("[controller]")]
    [ApiController]    
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _repo;
        private readonly ApplicationDb _db;

        public CategoryController(ICategoryRepository repo , ApplicationDb db)
        {
            _repo = repo;
            _db = db;
        }
        [HttpGet]
        [Route("GetCategories")]
        public async Task<IEnumerable<Category>> GetCategories()
        {
            var categories = await _repo.GetCategoriesAsync();
            if (categories != null)
            {
                return categories;
            }
            return null;
        }
        [HttpGet]
        [Route("IsCategoryExists/{name}")]
        public async Task<IActionResult> IsCategoryExists(string name)
        {
            var result = await _db.categories.AnyAsync(n => n.categoryName == name);
            if (result)
            {
                return StatusCode(StatusCodes.Status200OK);

            }
            return null;

        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        [Route("AddCategory")]
        public async Task<IActionResult> AddCategory(Category model)
        {
            if (ModelState.IsValid)
            {
                var result = await _repo.AddCategoryAsync(model);
                if (result != null)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }
        [Authorize(Roles = "Admin")]
        [HttpPut]
        [Route("EditCategory")]
        public async Task<IActionResult> EditCategory(Category model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var category = await _repo.UpdateCategoryAsync(model);
            if (category == null)
            {
                return BadRequest();
            }
            return Ok();
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<bool> Delete(int id)
        {
            var result = await _repo.DeleteAsync(id);
            if (result)
            {
                return true;
            }
            return false;
        }
        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("GetCategory/{id}")]
        public async Task<Category> GetCategory(int id)
        {
            var category = await _repo.GetCategoryAsync(id);
            if (category != null)
            {
                return category;
            }
            return null;
        }
    }
}