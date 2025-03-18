import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../components/Firebase/config";
import { HashLoader } from "react-spinners";
import ItemList from "./ItemList";

function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(db, "productos");
    const q = categoryId ? query(collectionRef, where("category", "==", categoryId)) : collectionRef;

    getDocs(q)
      .then((snapshot) => {
        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      })
      .catch((error) => console.error("Error obteniendo productos:", error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <HashLoader color="#000000" size={50} />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>
        {mensaje} {categoryId && `- Categoría: ${categoryId}`}
      </h2>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
