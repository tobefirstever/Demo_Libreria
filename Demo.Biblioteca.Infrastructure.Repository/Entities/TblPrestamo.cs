using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Entities
{
    [Table("TBLPRESTAJCM", Schema = "FMV_STP")]
    public partial class TblPrestamo
    {
        public TblPrestamo()
        {
            this.tblDetallePrestamos = new HashSet<TblDetallePrestamo>();
        }

        [Key]
        [Column("IDPRESTAMO")]
        public int IdPrestamo { get; set; }

        [Column("IDTIPOPRESTAMO")]
        public int? IdTipoPrestamo { get; set; }

        [Column("FECHAPRESTAMO")]
        public DateTime? FechaPrestamo { get; set; }

        [Column("FECHADEVOLUCION")]
        public DateTime? FechaDevolucion { get; set; }

        public ICollection<TblDetallePrestamo> tblDetallePrestamos { get; set; }

       

    }
}
