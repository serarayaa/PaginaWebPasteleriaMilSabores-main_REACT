import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import productos from '../data/productos';

function Home() {
  return (
    <>
      <header className="py-5 bg-rose-subtle border-bottom">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h1 className="display-5 brand-font text-choco">Pastelería 1000 Sabores</h1>
              <p className="lead">
                Pastelería 1000 sabores celebra su 50° aniversario como un referente en la repostería chilena. Descubre nuestras tortas y postres artesanales
              </p>
            </div>
            <div className="col-12 col-md-6">
              <div className="ratio ratio-16x9 rounded shadow-sm bg-light d-flex align-items-center justify-content-center">
                <img
                  src="/img/fotoTienda.png"
                  alt="Imagen de la tienda"
                  className="img-fluid rounded"
                  style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          {/* Cambiado para calzar con el test */}
          <h2 className="mb-4 brand-font text-choco">Nuestros Productos</h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {productos.slice(0, 6).map((producto) => (
              <div className="col" key={producto.codigo}>
                <div className="card h-100" data-testid="producto">
                  <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                  <div className="card-body">
                    {/* h5 para calzar con getAllByRole({ level: 5 }) */}
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <button className="btn btn-choco">Agregar al carrito</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
