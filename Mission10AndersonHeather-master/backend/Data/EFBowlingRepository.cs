
namespace backend.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _context;
        public EFBowlingRepository(BowlingLeagueContext context)
        {
            _context = context;
        }
        public IQueryable<Bowler> Bowlers => _context.Bowlers;
    }
}
