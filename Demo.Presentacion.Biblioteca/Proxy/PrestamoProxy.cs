using Demo.Biblioteca.Transversal.Common;
using Demo.Presentacion.Biblioteca.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace Demo.Presentacion.Biblioteca.Proxy
{
    public static class PrestamoProxy
    {
        private static HttpClient client = new HttpClient();


        public static async Task<List<PrestamoDto>> ObtenerPrestamos()
        {
            var urlConfig = "http://localhost/Demo.Biblioteca.Services.WebApi/api/Prestamo";
            try
            {
                var result = await client.GetAsync(urlConfig);
                string response = await result?.Content?.ReadAsStringAsync();
                if (result.IsSuccessStatusCode)
                {
                    var data = JsonConvert.DeserializeObject<Response<List<PrestamoDto>>>(response);

                    return data.Data;
                }
                else
                {
                    throw new Exception("No se pudo obtener ObtenerPrestamos response " + response);
                }
            }
            catch (Exception e)
            {

                throw new Exception("Error consultar api " + urlConfig + " ", e);
            }
        }
    }
}