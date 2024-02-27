using Demo.Presentacion.Biblioteca.Proxy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Demo.Presentacion.Biblioteca.Controllers
{
    public class PrestamoController : Controller
    {
        // GET: Prestamo
        public async Task<ActionResult> Index()
        {
            var prestamosModel = await PrestamoProxy.ObtenerPrestamos();

            ViewBag.PrestamoModel = prestamosModel;

            return View();
        }

        // GET: Prestamo/Details/5
        public ActionResult Details(int id)
        {
            


            return View();
        }

        // GET: Prestamo/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Prestamo/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Prestamo/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Prestamo/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Prestamo/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Prestamo/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
