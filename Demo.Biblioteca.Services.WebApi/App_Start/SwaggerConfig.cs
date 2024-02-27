using System.Web.Http;
using WebActivatorEx;
using Demo.Biblioteca.Services.WebApi;
using Swashbuckle.Application;
using System;
using System.Reflection;
using System.IO;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace Demo.Biblioteca.Services.WebApi
{
    public static class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            GlobalConfiguration.Configuration
                .EnableSwagger(c =>
                {
                    var baseDirectory = AppDomain.CurrentDomain.BaseDirectory + @"\bin\";
                    var commentsFileName = Assembly.GetExecutingAssembly().GetName().Name + ".xml";
                    var commentsFile = Path.Combine(baseDirectory, commentsFileName);
                    string url = "";

                    c?.SingleApiVersion("v1", "API Demo.Biblioteca")
                        ?.Description("API Demo.Biblioteca")
                        ?.TermsOfService("Evaluacion CSI")
                        ?.Contact(cc => cc?.Name("Jose Castillo Mandamiento")
                            ?.Url(url + "Contactanos")
                            ?.Email("peiro_gcm@hotmail.com"))
                        ?.License(lc => lc?.Name("Uso autorizado para las aplicaciones de csti")
                            ?.Url(url + "Transparencia"));
                    c?.ApiKey("apiKey")
                        ?.Description("API Key Authentication")
                        ?.Name("Authorization")
                        ?.In("header");
                    c?.IncludeXmlComments(commentsFile);
                })
                ?.EnableSwaggerUi(c => { c?.InjectJavaScript(thisAssembly, "Demo.Biblioteca.Services.WebApi.CustomContent.api-key-header-auth.js"); });
        }
    }
}
