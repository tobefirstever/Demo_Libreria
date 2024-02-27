using Demo.Biblioteca.Application.DTO;
using Demo.Biblioteca.Domain.Entities.Custom;

namespace Demo.Biblioteca.Transversal.Mapper.Profile
{
   public class PrestamoPerfil : AutoMapper.Profile
    {
        public PrestamoPerfil()
        {
            CreateMap<Prestamo, PrestamoDto>()
               ?.ForMember(dest => dest.IdPrestamo, opt => opt?.MapFrom(src => src.IdPrestamo))
               ?.ForMember(dest => dest.IdDetallePrestamo, opt => opt?.MapFrom(src => src.IdDetallePrestamo))
               ?.ForMember(dest => dest.IdLibro, opt => opt?.MapFrom(src => src.IdLibro))
               ?.ForMember(dest => dest.Nombre, opt => opt?.MapFrom(src => src.Nombre))
               ?.ForMember(dest => dest.FechaPrestamo, opt => opt?.MapFrom(src => src.FechaPrestamo))
               ?.ForMember(dest => dest.Autor, opt => opt?.MapFrom(src => src.Autor))
               ?.ReverseMap();
        }
    }
}
