using System.Web.Http;

namespace Demo.Biblioteca.Services.WebApi.Controllers
{
    /// <summary>
    /// BaseApiController
    /// </summary>
    [Authorize]
    public class BaseApiController : ApiController
    {
    }
}