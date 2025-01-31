function ItemListContainer({ mensaje }) {
    return (
      <div className="d-flex justify-content-center bg-dark">
        <h2 className="bg-dark text-light fs-1">{mensaje}</h2>
      </div>
    );
  }
  
  export default ItemListContainer;