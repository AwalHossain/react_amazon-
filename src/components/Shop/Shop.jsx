import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(resp => resp.json())
        .then(data => { setProducts(data)
         setDisplayProducts(data)})
    },[])

    useEffect(()=>{
        const storedData = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in storedData){
                const addedProduct = products.find(product => product.key === key)
                console.log(addedProduct);
                if(addedProduct){
                    const quantity = storedData[key];
                    addedProduct.quantity= quantity;
                   
                    storedCart.push(addedProduct)
                }
            }
        }
        setCart(storedCart)
        console.log(storedCart);
    },[products])
    const handleClick = (product)=>{

        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.key)
    }
    const handleSearch = (event)=>{
       const searchText = (event.target.value);
       const filterProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
       setDisplayProducts(filterProduct)
       console.log(filterProduct.length);
    }
    return (
        <>
            <div className='search-bar'>
                <input
                onChange={handleSearch}
                 type="text"
                  placeholder="type to search"/>
            </div>
        <main className='container'>
            <div className="product-container">
                <h2>Products: {products.length}</h2>
                {
                displayProducts.map((product) =>{
                    return (
                        <Product
                         key={product.key}
                         product={product}
                         addToCart={handleClick}
                         ></Product>
                    )
                } )
            }
            </div>
            <div className="item-container">
                <Cart
                cart={cart}
                ></Cart>
            </div>
           
        </main>
    </>
    );
};


export default Shop;