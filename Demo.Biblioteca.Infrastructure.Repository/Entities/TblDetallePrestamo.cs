using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Entities
{
    [Table("TBLDETALLEPRESTAJCM", Schema = "FMV_STP")]
    public class TblDetallePrestamo
    {
        [Key]
        [Column("IDDETALLEPRESTAMO")]
        public int IdDetallePrestamo { get; set; }

        [Column("IDPRESTAMO")]
        public int IdPrestamo { get; set; }

        [Column("IDLIBRO")]
        public int IdLibro { get; set; }

        [ForeignKey(nameof(IdPrestamo))]
        public TblPrestamo Prestamo { get; set; }

        [ForeignKey(nameof(IdLibro))]
        public TblLibro Libro { get; set; }
    }
}
