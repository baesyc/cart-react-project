import React, {useState} from 'react';
import CartItem from './CartItem.js';


export default function Cart({initialItems}) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map(item => {
      if(item.id === id) {
        return {...item, qty: newQty};
      }
      return item;
    });

    setItems(newItems);
  };

  const grandTotal = items.reduce((total, item) => (
    total + item.qty * item.price
  ), 0).toFixed(2);

  return (
    <div className='Cart'>
      <h1>My Cart</h1>
      <div className='Cart-Items'>
        {items.map(item => (
          <CartItem key={item.id} updateQty={updateQty} {...item}/>
        ))}
      </div>
        <h2>Grand Total: ${grandTotal}</h2>
    </div>
  );
}