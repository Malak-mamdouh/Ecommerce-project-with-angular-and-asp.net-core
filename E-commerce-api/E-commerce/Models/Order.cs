using E_commerce.BasketModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Order
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string phoneNumber { get; set; }
        public List<OrderProduct> orderProducts { get; set; }
        [ForeignKey("user")]
        public string userId { get; set; }
        public virtual ApplicationUser user { get; set; }

    }
}
