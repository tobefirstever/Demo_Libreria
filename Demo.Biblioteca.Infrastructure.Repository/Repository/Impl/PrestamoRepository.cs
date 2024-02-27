using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Repository.Impl
{
    public class PrestamoRepository : IPrestamoRepository
    {
        public readonly DbContextBiblioteca _context;

        public PrestamoRepository(DbContextBiblioteca context)
        {
            _context = context;
        }

        public async Task<object> Listar()
        {

            var query = await (from pre in _context.TblPrestamos
                               join det in _context.TblDetallePrestamos on pre.IdPrestamo equals det.IdPrestamo
                              join lib in _context.TblLibros on det.IdLibro equals lib.IdLibro
                              join usu in _context.TblUsuarios on pre.IdPrestamo equals usu.IdPrestamo

                               select new
                               {
                                   pre.IdPrestamo,
                                   lib.IdLibro,
                                   lib.Nombre,
                                   pre.FechaPrestamo,
                                   det.IdDetallePrestamo,
                                   usu.Dni,
                                   usu.NombreUsuario,
                                   lib.Autor,
                                   pre.FechaDevolucion
                               }).ToListAsync();

            return query;
        }
    }
}
