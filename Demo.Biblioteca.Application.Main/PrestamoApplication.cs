using Demo.Biblioteca.Application.DTO;
using Demo.Biblioteca.Application.Interfaces;
using Demo.Biblioteca.Domain.Entities.Custom;
using Demo.Biblioteca.Domain.Interfaces;
using Demo.Biblioteca.Transversal.Common;
using Demo.Biblioteca.Transversal.Mapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.Biblioteca.Application.Main
{
    public class PrestamoApplication : IPrestamoApplication
    {
        private readonly IPrestamoDomain _prestamoDomain;

        public PrestamoApplication(IPrestamoDomain prestamoDomain)
        {
            _prestamoDomain = prestamoDomain;
        }


        public async Task<Response<IEnumerable<PrestamoDto>>> Listar()
        {
            var response = new Response<IEnumerable<PrestamoDto>> { Data = new List<PrestamoDto>()};

            try
            {
                var prestammos = await _prestamoDomain?.Listar();
                response.Data = Mapping.Map<IEnumerable<Prestamo>, IEnumerable<PrestamoDto>>(prestammos);
            }
            catch(Exception ex)
            {
                response.IsSuccess = false;
                response.Message = ex.Message;
            }

            return response;

        }
    }
}
