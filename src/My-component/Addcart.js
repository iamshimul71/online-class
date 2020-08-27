import React from 'react';
import './Addcart.css'

const Addcart = (props) => {
    const cart = props.cart;

    let total = 0;
   for(let i=0;i<cart.length;i++)
   {
         const allcourse = cart[i];
          total = total+ parseInt(allcourse.price);
   }
    return (
        <div className="cart">
             <h2>purchase summary</h2>
             <p>Items Order: {cart.length} </p>
             <p>Total price :$ {total}</p>
        </div>
    );
};

export default Addcart;