using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.BasketModel;
using E_commerce.Models;
using E_commerce.Repository.BasketR;
using E_commerce.Repository.OrderR;
using E_commerce.Repository.ProductR;
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
        private readonly IBasketRepository _repoBasket;

        public OrderController(IOrderRepository repo , 
            IBasketRepository basketrepo , 
            ApplicationDb db, 
            IBasketRepository repoBasket)
        {
            _repo = repo;
            _basketrepo = basketrepo;
            _db = db;
            _repoBasket = repoBasket;
        }
        
        [Route("addOrder")]
        [HttpPost]
        public async Task<IActionResult> addOrder(Order model)
        {

            if (model.cartId == null)
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
                    
                    var basket = await _basketrepo.GetBasketAsync(order.cartId);
                    var products = await _db.products.ToListAsync();
                    foreach (var item in products)
                    {
                        if (item.ProductId == basket.items.FirstOrDefault().Id)
                        {
                            orderProduct.ProductId = item.ProductId;
                            item.Amount -= basket.items.FirstOrDefault().Quantity;
                            //await _db.SaveChangesAsync();
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
        public async Task<ActionResult<Basket>> GetOrder(int id)
       {
            var order = await _repo.GetOrderAsync(id);
            if (order == null)
            {
                return NotFound();
            }
            var basket = await _repoBasket.GetBasketAsync(order.cartId);
            if (basket != null)
            {
                return basket;
            }
            return NotFound();
        }
        [HttpGet]
        [Route("GetOrders/{email}")]
        public async Task<IEnumerable<Order>> GetOrders(string email)
        {
            var orders = await _repo.GetOrdersAsync(email);
            if (orders != null)
            {
                return orders;
            }
            return null;
        }
    }
}