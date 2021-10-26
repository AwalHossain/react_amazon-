import React from 'react';
import Cart from '../Cart/Cart';
import useProducts from '../Hooks/useProduct';
import './OrderRiview.css'
import useCart from '../useCart/useCart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearDb, removeDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const OrderRiview = () => {
    const [products]= useProducts()
    const [cart, setCart] = useCart(products)
    // const [cart] = useCart(products)
    const handleRemove =(key) =>{
        console.log(key);
        const newGuy = cart.filter(item => item.key !== key)
        setCart(newGuy);
        removeDb(key)
    }
    const handleClick=()=>{
        // clearDb()
    }
    return (
        <>
            <main className="container">
                <div className="product-container">
                    {
                        cart.map(item => <ReviewItem
                            handleClick={handleRemove}
                            key={item.key}
                            product={item}></ReviewItem>)
                    }
                </div>
                <div className="item-container">
                <div>
                    <h3>Total:{products.length}</h3>
                    <h2>This is Order Section</h2>
                    <Cart cart={cart}>
                    <Link to="/order">
                    <button className='button' onClick={handleClick}>Place Order</button>
                    </Link>
                    </Cart>
                </div>
                </div>
            </main>
        </>

    );
};

export default OrderRiview;