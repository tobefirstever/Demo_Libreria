using Demo.Biblioteca.Application.DTO;
using Demo.Biblioteca.Transversal.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Application.Interfaces
{
    public interface IPrestamoApplication
    {
        Task<Response<IEnumerable<PrestamoDto>>> Listar();
    }
}
