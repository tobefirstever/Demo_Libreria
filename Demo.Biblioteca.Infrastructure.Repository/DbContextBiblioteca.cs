using Demo.Biblioteca.Infrastructure.Repository.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Infrastructure.Repository
{
    public class DbContextBiblioteca : DbContext
    {
        public DbContextBiblioteca()
            : base ("name=OracleDbContext")
        {
        }

        public virtual DbSet<TblParametro> TblParametros { get; set; }

        public virtual DbSet<TblPrestamo> TblPrestamos { get; set; }

        public virtual DbSet<TblDetallePrestamo> TblDetallePrestamos { get; set; }

        public virtual DbSet<TblLibro> TblLibros { get; set; }

        public virtual DbSet<TblUsuario> TblUsuarios { get; set; }

    }
}
