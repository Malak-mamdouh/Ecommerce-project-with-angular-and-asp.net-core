using E_commerce.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.ProductR
{
    public class ProductRepo : IProductRepository
    {
        private readonly ApplicationDb _db;

        public ProductRepo(ApplicationDb db)
        {
            _db = db;
        }
        public async Task<Product> AddAsync(Product model)
        {
            if (model == null)
                return null;
            var cat = _db.categories.FirstOrDefault(x => x.Id == model.categoryId);

            var product = new Product
            {
                ProductName = model.ProductName,
                Description = model.Description,
                Price = model.Price,
                url = model.url,
                categoryId = model.categoryId
            };
            await _db.products.AddAsync(product);
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var product = await _db.products.FirstOrDefaultAsync(p => p.ProductId == id);
            if (product == null)
            {
                return false;
            }
            _db.products.Remove(product);
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<Product> EditProductAsync(Product model)
        {
            if (model.ProductId == 0)
            {
                return null;
            }
            var product = await _db.products.FirstOrDefaultAsync(p => p.ProductId == model.ProductId);
            if (product == null)
                return null;
            _db.products.Attach(product);
            product.ProductName = model.ProductName;
            product.Description = model.Description;
            product.Price = model.Price;
            product.url = model.url;
            _db.Entry(product).Property(p => p.ProductName).IsModified = true;
            _db.Entry(product).Property(p => p.Description).IsModified = true;
            _db.Entry(product).Property(p => p.Price).IsModified = true;
            _db.Entry(product).Property(p => p.url).IsModified = true;
            await _db.SaveChangesAsync();
            return product;
        }

        public async Task<IEnumerable<Product>> GetAllProductsAsync()
        {
       
            return await _db.products.ToListAsync();
        }

        public async Task<Product> GetProductAsync(int id)
        {
            if (id != 0)
            {
               var product = await _db.products.FindAsync(id);
               return product;
            }
            return null;
            
        }
    }
}
