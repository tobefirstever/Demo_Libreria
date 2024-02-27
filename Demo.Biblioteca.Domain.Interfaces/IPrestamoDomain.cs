using Demo.Biblioteca.Domain.Entities.Custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Domain.Interfaces
{
    public interface IPrestamoDomain
    {
        Task<IEnumerable<Prestamo>> Listar();
    }
}
