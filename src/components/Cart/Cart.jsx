import React from 'react';

const Cart = (props) => {
    let totalQuantity = 0;
    let total =0;
    for(const each of props.cart){
        console.log(each);
        if(!each.quantity){
            each.quantity = 1
        }
            total = total + (each.price) * (each.quantity);
            totalQuantity = totalQuantity + each.quantity 
    
        console.log(totalQuantity);
    }
    return (
        <div>
            <h2>Order Summery</h2>
            <h3>Items Ordered:{totalQuantity}</h3>
            <h3>Total:{total}</h3>
        </div>
    );
};

export default Cart;