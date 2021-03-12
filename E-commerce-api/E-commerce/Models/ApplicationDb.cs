using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace E_commerce.Models
{
    public class ApplicationDb : IdentityDbContext<ApplicationUser, ApplicationRole , string>
    {
        public ApplicationDb(DbContextOptions<ApplicationDb> options) : base(options)
        {

        }
        public DbSet<Product> products { get; set; }
        public DbSet<Category> categories { get; set; }
        public DbSet<Order> orders { get; set; }
        public DbSet<OrderProduct> orderProducts { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderProduct>().HasKey(op => new { op.OrderId, op.ProductId});

            modelBuilder.Entity<OrderProduct>().HasOne(p => p.product)
                .WithMany(p => p.orderProducts).HasForeignKey(p => p.ProductId);

            modelBuilder.Entity<OrderProduct>().HasOne(p => p.order)
                .WithMany(p => p.orderProducts).HasForeignKey(p => p.OrderId);
            base.OnModelCreating(modelBuilder); //to implement the ones above in database. if you didnt write it, an error would be thrown (entity type requires a primary key to be defined) 
        }
    }
}
