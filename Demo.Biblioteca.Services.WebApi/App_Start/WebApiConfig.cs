using Demo.Biblioteca.Services.WebApi.Core;
using Demo.Biblioteca.Transversal.IoC;
using Demo.Biblioteca.Transversal.Mapper;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using Swashbuckle.Application;
using Demo.Biblioteca.Services.WebApi.Filters;

namespace Demo.Biblioteca.Services.WebApi
{
    public static class WebApiConfig
    {
        /// <summary>
        /// Register
        /// </summary>
        /// <param name="config"></param>
        public static void Register(HttpConfiguration config)
        {
            // Initialize Unity Ioc
            if (config != null)
            {
                config.DependencyResolver = new UnityResolver(UnityResolver.InitializeContainer());

                // Initialize AutoMapper
                Mapping.Inicializate();

                // CamelCase Json
                var json = config.Formatters.JsonFormatter;
                json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

                config.Filters.Add(new ValidateModelAttribute());

                // Enabled Cors
                config.EnableCors();
                config.SetCorsPolicyProviderFactory(new DynamicPolicyProviderFactory());

                // Rutas de API web
                config.MapHttpAttributeRoutes();
                config.MessageHandlers.Add(new TokenValidationHandler());

                config.Routes.MapHttpRoute(
                    name: "swagger_root", 
                    routeTemplate: "", 
                    defaults: null, 
                    constraints: null,
                    handler: new RedirectHandler((message => message.RequestUri.ToString()), "swagger"));

                config.Routes.MapHttpRoute("DefaultApi", "api/{controller}/{id}", new {id = RouteParameter.Optional});
            }
        }
    }
}
