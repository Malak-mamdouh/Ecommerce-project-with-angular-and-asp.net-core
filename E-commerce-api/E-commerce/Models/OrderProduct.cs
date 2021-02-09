using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class OrderProduct
    {
        public int OrderId { get; set; }
        public virtual Order order { get; set; }
        public int ProductId { get; set; }
        public virtual Product product { get; set; }
    }
}
