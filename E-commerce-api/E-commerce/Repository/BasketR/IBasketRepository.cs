using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using E_commerce.BasketModel;

namespace E_commerce.Repository.BasketR
{
    public interface IBasketRepository
    {
        Task<Basket> GetBasketAsync(string id);
        Task<Basket> UpdateBasketAsync(Basket basket);
        Task<bool> DeleteAsync(string id);
    }
}
