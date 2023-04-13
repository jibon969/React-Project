import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../utilities/fakedb';

const Cosmetic = (props) => {
    const {title, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        addToDb(id)
    }

    const removeFromCart = (id) =>{
        removeFromDb(id)
    }
    return (
        <div className='product'>
            <h3>Buy this  : {title}</h3>
            <p>Only for $ : {price}</p>
            <p>Its has id : {id}</p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
            <button onClick={()=>removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;