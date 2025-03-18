import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../components/Firebase/config';
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { CartContext } from '../Context/CartContext';
import { HashLoader } from 'react-spinners';

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, 'productos', productId);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No se encontró el producto");
        }
      })
      .catch((error) => console.error("Error obteniendo el producto:", error))
      .finally(() => setLoading(false));
  }, [productId]);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <HashLoader color="#000000" size={50} />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <ItemDetail product={product} onAdd={handleAddToCart} addedToCart={addedToCart} />
    </div>
  );
}

export default ItemDetailContainer;
