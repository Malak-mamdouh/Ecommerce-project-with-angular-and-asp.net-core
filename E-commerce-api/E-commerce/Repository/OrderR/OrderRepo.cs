using E_commerce.BasketModel;
using E_commerce.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace E_commerce.Repository.OrderR
{
    public class OrderRepo : IOrderRepository
    {
        private readonly ApplicationDb _db;
        private readonly UserManager<ApplicationUser> _manager;

        public OrderRepo(ApplicationDb db, UserManager<ApplicationUser> manager)
        {
            _db = db;
            _manager = manager;
        }

        public async Task<Order> AddOrderAsync(Order model)
        {            
            if (model != null)
            {

                var order = new Order
                {
                    FirstName = model.FirstName,
                    LastName = model.LastName,
                    Address = model.Address,
                    City = model.City,
                    phoneNumber = model.phoneNumber,
                    Email = model.Email,
                    cartId = model.cartId
                };
                var user = await _manager.FindByEmailAsync(model.Email);
                if (user != null)
                {
                    order.userId = user.Id;
                }

                await _db.orders.AddAsync(order);
                await _db.SaveChangesAsync();
                return order;
            }
            return null;
        }

        public async Task<Order> GetOrderAsync(int orderId)
        {
            if (orderId != 0)
            {
                var order = await _db.orders.Where(o => o.Id == orderId).FirstOrDefaultAsync();
                return order;
            }
            return null;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync(string email)
        {
            if (email != null) 
            {
                var orders = _db.orders.Where(p => p.Email == email);
                return orders;
            }
            return null;
        }

    }
}
