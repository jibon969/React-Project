import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {title, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        console.log("item added !", id)
    }

    const purchaseCart = () => addToCart(id)

    return (
        <div className='product'>
            <h3>Buy this  : {title}</h3>
            <p>Only for $ : {price}</p>
            <p>Its has id : {id}</p>
            <button onClick={purchaseCart}>Purchase Cart</button>
            <br />
            <button onClick={() =>addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;