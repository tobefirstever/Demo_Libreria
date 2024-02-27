using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Entities
{
    [Table("TBLLIBJCM", Schema = "FMV_STP")]
    public class TblLibro
    {

        public TblLibro()
        {
            this.TblDetallePrestamos = new HashSet<TblDetallePrestamo>();
        }

        [Key]
        [Column("IDLIBRO")]
        public int IdLibro { get; set; }

        [Column("NOMBRE")]
        public string Nombre { get; set; }

        [Column("IDCATEGORIA")]
        public int? IdCategoria { get; set; }

        [Column("AUTOR")]
        public string Autor { get; set; }

        [Column("PAIS")]
        public string Pais { get; set; }

        [Column("FECHAPUBLICACION")]
        public DateTime? FechaPublicacion { get; set; }

        [Column("FECHAEDITORIAL")]
        public DateTime? FechaEditorial { get; set; }

        public virtual ICollection<TblDetallePrestamo> TblDetallePrestamos { get; set; }
    }
}
