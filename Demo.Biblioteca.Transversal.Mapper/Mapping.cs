using Demo.Biblioteca.Transversal.Mapper.Profile;

namespace Demo.Biblioteca.Transversal.Mapper
{
    public static class Mapping
    {
        public static void Inicializate()
        {
            AutoMapper.Mapper.Initialize(x =>
            {
                x?.AddProfile<PrestamoPerfil>();
            });
        }

        public static TDestino Map<TSource, TDestino>(TSource source, TDestino destino)
        {
            return AutoMapper.Mapper.Map(source, destino);
        }

        public static TDestino Map<TSource, TDestino>(TSource source)
        {
            return AutoMapper.Mapper.Map<TSource, TDestino>(source);
        }
    }
}
