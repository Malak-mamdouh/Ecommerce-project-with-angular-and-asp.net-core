using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.Product
{
    public interface IProductRepository
    {
        Task<IEnumerable<ProductM>> GetAllProductsAsync();
        Task<ProductM> AddAsync(ProductM product);
        Task<ProductM> GetProductAsync(int id);
        Task<bool> DeleteAsync(int id);
        Task<ProductM> EditProductAsync(ProductM prdocut);
    }
}
