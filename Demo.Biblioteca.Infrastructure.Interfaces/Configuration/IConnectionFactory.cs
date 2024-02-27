using System.Data;

namespace Demo.Biblioteca.Infrastructure.Interfaces.Configuration
{
    public interface IConnectionFactory
    {
        IDbConnection GetConnection { get; }
    }
}
