using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class ProductM
    {
        [Key]
        public int ProductId { get; set; }
     
        public string ProductName { get; set; }
      
        public string Description { get; set; }
        [Required]
        public float Price { get; set; }
        [NotMapped]
        public IFormFile file { get; set; }
        public string url { get; set; }
        [ForeignKey("category")]
        public int categoryId { get; set; }
        public List<OrderProduct> orderProducts { get; set; }

    }
}
