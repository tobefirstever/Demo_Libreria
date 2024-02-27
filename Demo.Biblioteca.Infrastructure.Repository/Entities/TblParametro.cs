using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository.Entities
{
    [Table("TBLPARAMJCM", Schema = "FMV_STP")]
    public class TblParametro
    {
        [Key]
        [Column("IDGRUPO")]
        public int? IdGrupo { get; set; }

        [Column("IDPARAM")]
        public int? IdParametro { get; set; }

        [Column("ABREVIATURA")]
        public string Abrevatura { get; set; }

        [Column("DESCRIPCION")]
        public string Descripcion { get; set; }
    }
}
