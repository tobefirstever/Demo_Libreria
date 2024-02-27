using Demo.Biblioteca.Domain.Entities.Custom;
using Demo.Biblioteca.Domain.Interfaces;
using Demo.Biblioteca.Infrastructure.Repository.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Domain.Main
{
    public class PrestamoDomain : IPrestamoDomain
    {
        private readonly IPrestamoRepository _prestamoRepository;


        public PrestamoDomain(IPrestamoRepository prestamoRepository)
        {
            _prestamoRepository = prestamoRepository;
        }


        public async Task<IEnumerable<Prestamo>> Listar()
        {
            List<Prestamo> prestamos = new List<Prestamo>();
            var data = await _prestamoRepository?.Listar();
            prestamos = JsonConvert.DeserializeObject<List<Prestamo>>(JsonConvert.SerializeObject(data));
            return prestamos;
        }
    }
}
