import React from 'react';

export default function CartItem({id, name, price, qty, updateQty}) {

  const addOne = () => {
    updateQty(id, qty + 1);
  }

  const minusOne = () => {
    updateQty(id, qty - 1);
  }

  return (
    <div className='CartItem'>
      <div>{name}</div>
      <div>${price.toFixed(2)}</div>
      <div>
        <button onClick={minusOne} disabled={qty === 0}>-</button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: ${(qty * price).toFixed(2)}</div>
      <hr/>
    </div>
  );
}