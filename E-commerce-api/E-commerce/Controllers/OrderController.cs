using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.Models;
using E_commerce.Repository.BasketR;
using E_commerce.Repository.OrderR;
using E_commerce.Repository.Product;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace E_commerce.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _repo;
        private readonly IBasketRepository _basketrepo;
        private readonly ApplicationDb _db;

        public OrderController(IOrderRepository repo , IBasketRepository basketrepo , ApplicationDb db)
        {
            _repo = repo;
            _basketrepo = basketrepo;
            _db = db;
        }
        
        [Route("addOrder/{id}")]
        [HttpPost]
        public async Task<IActionResult> addOrder(Order model , string id)
        {

            if (id == null)
            {
                return NotFound();
            }
                if (ModelState.IsValid)
                {
                    var order = await _repo.AddOrderAsync(model);

                    OrderProduct orderProduct = new OrderProduct
                    {
                        OrderId = order.Id
                    };
                    var basket = await _basketrepo.GetBasketAsync(id);
                    var products = await _db.products.ToListAsync();
                    foreach (var item in products)
                    {
                        if (item.ProductId == basket.items.FirstOrDefault().Id)
                        {
                            orderProduct.ProductId = item.ProductId;
                        }
                    }
                    _db.orderProducts.Add(orderProduct);
                    await _db.SaveChangesAsync();
                    return Ok();
                }
            return BadRequest();
        }
        [HttpGet]
        [Route("GetOrder/{id}")]
        public async Task<ActionResult<Order>> GetOrder(int id)
        {
            var order = await _repo.GetOrderAsync(id);
            if (order != null)
            {
                return order;
            }
            return NotFound();
        }
        public async Task<IEnumerable<Order>> GetOrderByUserId(string userid)
        {
            var orders = await _repo.GetOrdersAsync(userid);
            if (orders != null)
            {
                return orders;
            }
            return null;
        }
    }
}