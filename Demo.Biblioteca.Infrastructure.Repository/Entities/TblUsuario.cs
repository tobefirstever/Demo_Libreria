using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Entities
{
    [Table("TBLUSUJCM", Schema = "FMV_STP")]
    public partial class TblUsuario
    {

        [Key]
        [Column("IDUSUARIO")]
        public int IdUsuario { get; set; }

        [Column("IDPRESTAMO")]
        public int IdPrestamo { get; set; }

        [Column("NOMBRE")]
        public string NombreUsuario { get; set; }

        [Column("APELLIDOS")]
        public string Apellidos { get; set; }

        [Column("EMAIL")]
        public string Email { get; set; }

        [Column("TELEFONO")]
        public string Telefono { get; set; }

        [Column("IDESTADO")]
        public int? IdEstado { get; set; }

        [Column("DNI")]
        public string Dni { get; set; }
    }
}
