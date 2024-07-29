
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController:ControllerBase
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Mumbai", "Visakhapatnam", "Hyderabad" };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return  "Visakhapatnam";
        }
    }
}
