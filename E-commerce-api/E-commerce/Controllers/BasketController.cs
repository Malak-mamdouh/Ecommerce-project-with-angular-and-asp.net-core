using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using E_commerce.BasketModel;
using E_commerce.Repository.BasketR;

namespace E_commerce.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private readonly IBasketRepository _repo;

        public BasketController(IBasketRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("GetBasket/{id}")]
        public async Task<ActionResult<Basket>> GetBasket(string id)
        {
            var basket = await _repo.GetBasketAsync(id);
            return Ok(basket ?? new Basket(id));
        }
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<bool> Delete(string id)
        {
            return await _repo.DeleteAsync(id);

        }
        [HttpPost]
        [Route("UpdateBasket")]
        public async Task<ActionResult<Basket>> UpdateBasket(Basket basket)
        {
            var updatedBasket = await _repo.UpdateBasketAsync(basket);
            return Ok(updatedBasket);
        }
    }
}