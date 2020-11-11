using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.BasketModel
{
    public class Basket
    {
        public Basket()
        {

        }
        public Basket(string id)
        {
            Id = id;
        }
        public string Id { get; set; }
        public List<BasketItem> items { get; set; } = new List<BasketItem>();
    }
}
