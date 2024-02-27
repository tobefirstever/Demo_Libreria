using System.Configuration;
using System.Data;
using System.Data.Common;
using Demo.Biblioteca.Infrastructure.Interfaces.Configuration;
using Demo.Biblioteca.Transversal.Common;

namespace Demo.Biblioteca.Infrastructure.Configuration
{
    public class ConnectionFactory : IConnectionFactory
    {
        private readonly string _connectionString = ConfigurationManager.ConnectionStrings?[Constantes.Demo]?.ConnectionString;

        public IDbConnection GetConnection
        {
            get
            {
                var factory = DbProviderFactories.GetFactory(Constantes.SqlClient);
                var conn = factory.CreateConnection();

                if (conn == null) return null;

                conn.ConnectionString = _connectionString;
                conn.Open();
                return conn;
            }
        }
    }
}
