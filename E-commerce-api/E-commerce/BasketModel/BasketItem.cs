using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.BasketModel
{
    public class BasketItem
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public float Price { get; set; }
        public string url { get; set; }
        public int Quantity { get; set; }
    }
}
