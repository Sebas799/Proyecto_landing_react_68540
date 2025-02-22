import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulación de obtención de un producto por ID
    const fakeProduct = {
      id: productId,
      name: `Producto ${productId}`,
      category: 'electronica',
      description: `Detalle del producto ${productId}`,
      price: 100 * parseInt(productId),
    };

    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeProduct);
      }, 1000);
    });

    getProduct.then((data) => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) {
    return <div className="container mt-4">Cargando...</div>;
  }

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Precio:</strong> ${product.price}
      </p>
      <ItemCount initial={1} stock={10} />
    </div>
  );
}

export default ItemDetailContainer;
