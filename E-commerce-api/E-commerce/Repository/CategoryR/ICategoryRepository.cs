using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.CategoryR
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetCategoriesAsync();
        Task<Category> AddCategoryAsync(Category model);
        Task<Category> UpdateCategoryAsync(Category model);
        Task<bool> DeleteAsync(int id);
        Task<Category> GetCategoryAsync(int id);
    }
}
