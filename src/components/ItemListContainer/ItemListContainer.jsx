import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulación de datos de productos
    const fakeProducts = [
      { id: '1', name: 'Producto 1', category: 'electronica', description: 'Descripción del producto 1' },
      { id: '2', name: 'Producto 2', category: 'ropa', description: 'Descripción del producto 2' },
      { id: '3', name: 'Producto 3', category: 'electronica', description: 'Descripción del producto 3' },
      { id: '4', name: 'Producto 4', category: 'ropa', description: 'Descripción del producto 4' },
    ];

    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeProducts);
      }, 1000);
    });

    getProducts.then((data) => {
      if (categoryId) {
        setProducts(data.filter((item) => item.category === categoryId));
      } else {
        setProducts(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>
        {mensaje} {categoryId && `- Categoría: ${categoryId}`}
      </h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
