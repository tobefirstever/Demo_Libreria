using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Application.DTO
{
    public class PrestamoDto
    {
        public int IdPrestamo { get; set; }

        public int IdLibro { get; set; }

        public string Nombre { get; set; }


        public DateTime FechaPrestamo { get; set; }

        public int IdDetallePrestamo { get; set; }

        public string Dni { get; set; }


        public string NombreUsuario { get; set; }

        public string Autor { get; set; }

        public DateTime FechaDevolucion { get; set; }
    }
}
