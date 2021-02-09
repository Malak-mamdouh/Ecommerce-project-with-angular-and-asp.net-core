using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.ProductR
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetAllProductsAsync();
        Task<Product> AddAsync(Product product);
        Task<Product> GetProductAsync(int id);
        Task<bool> DeleteAsync(int id);
        Task<Product> EditProductAsync(Product prdocut);
    }
}
