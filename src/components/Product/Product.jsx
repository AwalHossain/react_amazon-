import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className='details'>
                <h3> {name} </h3>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in Stock - order soon</small></p>
                <Rating 
                initialRating={star}
                 emptySymbol="far fa-star icon-color"
                 fullSymbol="fas fa-star icon-color"
                 readonly
                />
                <button className='button' onClick={()=>{props.addToCart(props.product)}}>{element}Add to cart</button>
            </div>
         
        </div>
    );
};

export default Product;