using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Repository
{
    public interface IPrestamoRepository
    {
        Task<object> Listar();
    }
}
