using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repository.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace E_commerce.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repo;
        private readonly ApplicationDb _db;

        public ProductController(IProductRepository repo , ApplicationDb db)
        {
            _repo = repo;
            _db = db;
        }
        [HttpGet]
        [Route("GetAllProducts")]
        public async Task<IEnumerable<ProductM>> GetAllProducts(int? id , string search)
        {
            if (search != null)
            {
                var productSearch = _db.products.Where(p => p.ProductName.Contains(search));
                return productSearch;
            }
            if (id != null)
            {
                var prods = _db.products.Where(p => p.categoryId == id);
                return prods;
            }
            var products = await _repo.GetAllProductsAsync();
            if (products != null)
            {
                return products;
            }
            return null;
        }

        [HttpPost]
        [Route("AddProduct")]
        public async Task<IActionResult> AddProduct(ProductM model)
        {
            if (ModelState.IsValid)
            {
                var product = await _repo.AddAsync(model);
                if (product != null)
                {
                    return Ok(product);
                }
            }
            return BadRequest();
        }
        [HttpGet]
        [Route("GetProduct/{id}")]
        public async Task<ActionResult<ProductM>> GetProduct(int id)
        {
            var model = await _repo.GetProductAsync(id);
            if (model == null)
            {
                return null;
            }

            return model;
        }
        [HttpPost]
        [Route("Upload")]
        [DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources" , "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory() , folderName);

            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave , fileName);
                var url = Path.Combine(folderName , fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                return Ok(new { url });
            }
            else
            {
                return BadRequest();
            }
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id == 0)
                return BadRequest();
            var result = await _repo.DeleteAsync(id);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }
        [HttpPut]
        [Route("EditProduct")]
        public async Task<IActionResult> EditProduct(ProductM model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var result = await _repo.EditProductAsync(model);
            if (result != null)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}