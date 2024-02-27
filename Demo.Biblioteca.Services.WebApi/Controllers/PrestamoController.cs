using Demo.Biblioteca.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Demo.Biblioteca.Services.WebApi.Controllers
{
    public class PrestamoController : ApiController
    {
        private readonly IPrestamoApplication _prestamoApplication;


        public PrestamoController(IPrestamoApplication prestamoApplication)
        {
            _prestamoApplication = prestamoApplication;
        }

        [HttpGet()]
        [Route("api/Prestamo")]
        public async Task<IHttpActionResult> GetOficinas()
        {
            return Ok(await _prestamoApplication.Listar());
        }
    }
}
