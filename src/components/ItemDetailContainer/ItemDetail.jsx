import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ product, onAdd, addedToCart }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          style={{width: '25%', height: '300px', objectFit: 'contain' }}
        />
      <h2>{product.name}</h2>
      <p className="w-50">{product.description}</p>
      <p className="fs-4">
        <strong>Precio:</strong> ${product.price}
      </p>
      {!addedToCart ? (
        <ItemCount initial={1} stock={product.stock || 10} onAdd={onAdd} />
      ) : (
        <div className="alert alert-success">Producto agregado al carrito</div>
      )}
    </div>
  );
}

export default ItemDetail;
