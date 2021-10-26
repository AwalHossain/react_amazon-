import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import useCart from '../useCart/useCart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useCart();
    const [page,setPage] = useState(0)
    const [pageCount, setPageCout] = useState(0)
    const [displayProducts, setDisplayProducts] = useState([])
    const size = 10;
    useEffect(()=>{
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
        .then(resp => resp.json())
        .then(data => {
             setProducts(data.result)
         setDisplayProducts(data.result)
         const count = data.count;
         const pageNumber = Math.ceil(count/size);
         setPageCout(pageNumber)
        })
    },[page])

    // useEffect(()=>{
    //     const storedData = getStoredCart();
    //     const storedCart = [];
    //     if(products.length){
    //         for(const key in storedData){
    //             const addedProduct = products.find(product => product.key === key)
    //             if(addedProduct){
    //                 const quantity = storedData[key];
    //                 addedProduct.quantity= quantity;
    //                 storedCart.push(addedProduct)

    //             }
    //         }
    //     }
    //     setCart(storedCart)
    // },[products])
 
    const handleClick = (product)=>{
        const exist = cart.find(pd=> pd.key === product.key)
        let newCart = []
        if(exist){
            const rest = cart.filter(pd=> pd.key !== product.key)
            console.log(rest)
            exist.quantity = exist.quantity + 1
            newCart = [...rest, product]
        }
        else{
            product.quantity=1;
            newCart = [...cart, product] 
        }
         
        console.log(product)
        console.log(newCart)
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
             <div className="pagination">
            {
                [...Array(pageCount).keys()].map(num =>
                 <button
                 className={num === page ? 'selected': ''}
                onClick={()=> setPage(num)}
                >{num}</button>)
            }
            </div>
            </div>

            <div className="item-container">
                <Cart
                cart={cart}
                >
                    <Link to="/riview">
                    <button className='button'>Riview Order</button>
                    </Link>
                </Cart>
            </div>
           
        </main>
    </>
    );
};


export default Shop;