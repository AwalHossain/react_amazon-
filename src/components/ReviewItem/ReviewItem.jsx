import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {key, name, img, quantity}=props.product
    const {handleClick} =props
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h2>{name}</h2>
                <p>Quantity:{quantity}</p>
                <button onClick={()=>{handleClick(key)}}
                 className='button' >Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;