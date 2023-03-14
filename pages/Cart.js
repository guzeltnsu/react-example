import React from 'react';

function Cart(props) {

  return (
    <div className='row justify-content-center'>
      <div className='row justify-content-center'>
        <h2 style={{ marginLeft: "1120px" }}>Sepetim</h2>
        <br/>
      </div>
      <br />
      {props?.cartItems?.length > 0 ?
        <>
          <div className='col-4 mb-5'>
            {props?.cartItems?.map((item, index) => (
              <><div key={index}>
                <p>{item.name}</p>
                <p>{item.price} TL</p>
                <button className='btn btn-danger' onClick={() => props.handleRemoveFromCart(index)}>Kaldır</button>
                <hr />
              </div>

              </>
            ))}
            <div className='spt-toplam'>sepet toplamı: {props.cartPrice}</div>
          </div>
        </>
        : <>
          <p className='' >Sepetiniz boş.</p>
        </>
      }
    </div>
  );
}

export default Cart;