using System.Web.Http;

namespace Demo.Biblioteca.Services.WebApi.Controllers
{
    /// <summary>
    ///     Clase controlador de comunes
    /// </summary>
    [RoutePrefix("api/comunes")]
    public class ComunesController : ApiController
    {
        /// <summary>
        ///     Método ping
        /// </summary>
        [HttpGet]
        [Route("ping")]
        public IHttpActionResult Ping() => Ok();
    }
}