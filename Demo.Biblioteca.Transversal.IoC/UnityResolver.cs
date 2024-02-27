using Demo.Biblioteca.Application.Interfaces;
using Demo.Biblioteca.Application.Main;
using Demo.Biblioteca.Domain.Interfaces;
using Demo.Biblioteca.Domain.Main;

using Demo.Biblioteca.Infrastructure.Repository.Repository;
using Demo.Biblioteca.Infrastructure.Repository.Repository.Impl;

using Demo.Biblioteca.Transversal.Common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Web.Http.Dependencies;
using Unity;
using Unity.Lifetime;

namespace Demo.Biblioteca.Transversal.IoC
{
    public sealed class UnityResolver : IDependencyResolver
    {
        private readonly IUnityContainer _container;

        public UnityResolver(IUnityContainer container)
        {
            if (container == null)
                throw new ArgumentNullException(nameof(container));

            _container = container;
        }

        public static IUnityContainer InitializeContainer()
        {
            var container = new UnityContainer();
           

            container.RegisterType<DbContext>(new HierarchicalLifetimeManager());

            #region Prestamo

            container.RegisterType<IPrestamoApplication, PrestamoApplication>();
            container.RegisterType<IPrestamoDomain, PrestamoDomain>();
            container.RegisterType<IPrestamoRepository, PrestamoRepository>();

            #endregion

            return container;
        }


        public IDependencyScope BeginScope()
        {
            var child = _container.CreateChildContainer();
            return new UnityResolver(child);
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }

        public object GetService(Type serviceType)
        {
            try
            {
                return _container.Resolve(serviceType);
            }
            catch (ResolutionFailedException)
            {
                return null;
            }
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return _container.ResolveAll(serviceType);
            }
            catch (ResolutionFailedException)
            {
                return new List<object>();
            }
        }
    }
}
