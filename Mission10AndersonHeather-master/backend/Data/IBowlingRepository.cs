namespace backend.Data
{
    public interface IBowlingRepository
    {
        IQueryable<Bowler> Bowlers { get; }
    }
}
