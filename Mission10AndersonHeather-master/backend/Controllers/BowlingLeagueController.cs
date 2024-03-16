using backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BowlingLeagueController : ControllerBase
    {
        private readonly IBowlingRepository _repo;
        public BowlingLeagueController(IBowlingRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            
            Bowler[] bowlers = _repo.Bowlers.Include(b => b.Team).ToArray();
            return bowlers;
        }
    }
}
