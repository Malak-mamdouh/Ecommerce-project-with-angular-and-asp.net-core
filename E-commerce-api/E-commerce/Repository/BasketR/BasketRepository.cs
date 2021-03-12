using E_commerce.BasketModel;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace E_commerce.Repository.BasketR
{
    public class BasketRepository : IBasketRepository
    {
        private readonly IDatabase _database;
        public BasketRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }
        public async Task<bool> DeleteAsync(string id)
        {
            return await _database.KeyDeleteAsync(id);
        }

        public async Task<Basket> GetBasketAsync(string id)
        {
            var data = await _database.StringGetAsync(id);
            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<Basket>(data);
        }


        public async Task<Basket> UpdateBasketAsync(Basket basket)
        {
            var added =await _database.StringSetAsync(basket.Id , JsonSerializer.Serialize(basket)
                , TimeSpan.FromDays(20));
            if (!added) return null;
            return await GetBasketAsync(basket.Id);
        }
    }
}
