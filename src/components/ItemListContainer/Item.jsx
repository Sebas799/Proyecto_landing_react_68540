import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <img
          src={product.image}
          className="card-img-top mx-auto d-block"
          alt={product.name}
          style={{ width: "100%", height: "340px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{product.name}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <p className="card-text fs-3 fw-bold">${product.price}</p>
          <Link to={`/detail/${product.id}`} className="btn btn-primary">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
