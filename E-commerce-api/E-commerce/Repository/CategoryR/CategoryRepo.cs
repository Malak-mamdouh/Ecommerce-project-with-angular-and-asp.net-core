using E_commerce.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.CategoryR
{
    public class CategoryRepo : ICategoryRepository
    {
        private readonly ApplicationDb _db;

        public CategoryRepo(ApplicationDb db)
        {
            _db = db;
        }
        public async Task<Category> AddCategoryAsync(Category model)
        {
            if (model != null)
            {
                var category = new Category
                {
                    categoryName = model.categoryName,
                    Num_of_products = model.Num_of_products
                };
                await _db.categories.AddAsync(category);
                await _db.SaveChangesAsync();
                return category;
            }
            return null;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            if (id == 0)
            {
                return false;
            }
            var category = await _db.categories.FirstOrDefaultAsync(c => c.Id == id);
            if (category == null)
                return false;
            _db.categories.Remove(category);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Category>> GetCategoriesAsync()
        {
            return await _db.categories.ToListAsync();
        }

        public async Task<Category> GetCategoryAsync(int id)
        {
            if (id == 0)
                return null;
            var category = await _db.categories.FirstOrDefaultAsync(c => c.Id == id);
            if (category != null)
            {
                return category;
            }
            return null;
        }

        public async Task<Category> UpdateCategoryAsync(Category model)
        {
            if (model.Id != 0)
            {
                var category = await _db.categories.FirstOrDefaultAsync(c => c.Id == model.Id);
                if (category != null)
                {
                    _db.categories.Attach(category);
                    category.categoryName = model.categoryName;
                    category.Num_of_products = model.Num_of_products;
                    _db.Entry(category).Property(c => c.categoryName).IsModified = true;
                    _db.Entry(category).Property(c => c.Num_of_products).IsModified = true;
                    await _db.SaveChangesAsync();
                    return category;
                }
            }
            return null;
        }
    }
}
