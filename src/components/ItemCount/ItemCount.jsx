import { useState } from 'react';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAdd = () => {
    if (onAdd) onAdd(count);
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-secondary me-2" onClick={handleDecrease}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-secondary ms-2" onClick={handleIncrease}>
        +
      </button>
      <button className="btn btn-primary ms-3" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
