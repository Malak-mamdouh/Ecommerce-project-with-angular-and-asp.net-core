using E_commerce.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Repository.OrderR
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Order>> GetOrdersAsync(string id);
        Task<Order> GetOrderAsync(int id);
        Task<Order> AddOrderAsync(Order order);
    }
}
