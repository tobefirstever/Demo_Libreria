using System.Web.Http;
using Demo.Biblioteca.Application.DTO;
using Demo.Biblioteca.Services.WebApi.Core;

namespace Demo.Biblioteca.Services.WebApi.Controllers
{
    /// <summary>
    /// Controlador que contiene todas las apis de Autenticación
    /// </summary>    
    public class AuthController : ApiController
    {
        /// <summary>
        /// Realiza la autenticación del usuario
        /// </summary>
        /// <param name="usuarioLoginDto"></param>
        /// <returns></returns>
        [HttpPost()]
        [Route("api/auth")]
        public IHttpActionResult Login([FromBody] UsuarioLoginRequestDto usuarioLoginDto)
        {
            if (usuarioLoginDto == null)
            {
                return BadRequest();
            }

            string authToken = TokenGenerator.GenerateTokenJwt(usuarioLoginDto.Username);
            return Ok(
                new Transversal.Common.Response<UsuarioLoginResponseDto>
                {
                    Data = new UsuarioLoginResponseDto
                    {
                        Username = usuarioLoginDto.Username,
                        AuthToken = authToken
                    }
                });
        }
    }
}