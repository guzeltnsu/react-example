
import React,{useState} from 'react';



function Menu({ items },props) {

    // const [cartItems, setCartItems] = useState([]);

    // const handleAddToCart = (item) => {
    //   // Öğeyi sepete ekleyin
    //   setCartItems([...cartItems, item]);
    // };
  
  return (
    <div>
      <h2>Menü</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} TL</p>
          <button onClick={() => props.handleAddToCart(item)}>Sepete Ekle</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
