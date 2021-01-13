using E_commerce.BasketModel;
using E_commerce.Models;
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

        public OrderRepo(ApplicationDb db)
        {
            _db = db;
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
                    phoneNumber = model.phoneNumber
                };
                

                await _db.orders.AddAsync(order);
                await _db.SaveChangesAsync();
                return order;
            }
            return null;
        }

        public async Task<Order> GetOrderAsync(int id)
        {
            if (id != 0)
            {
                var order = await _db.orders.FirstOrDefaultAsync(o => o.Id == id);
                if (order != null)
                {
                    return order;
                }
            }
            return null;
        }

        public async Task<IEnumerable<Order>> GetOrdersAsync()
        {
            return await _db.orders.ToListAsync();
        }

    }
}
