using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string categoryName { get; set; }
        public int Num_of_products { get; set; }
        public virtual ICollection<Product> products { get; set; }
    }
}
