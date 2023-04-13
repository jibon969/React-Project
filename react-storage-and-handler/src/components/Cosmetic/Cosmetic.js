import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../utilities/fakedb';

const Cosmetic = (props) => {
    const {title, price, id} = props.cosmetic;
    const addToCart = (id) =>{
        addToDb(id)
    }
    return (
        <div className='product'>
            <h3>Buy this  : {title}</h3>
            <p>Only for $ : {price}</p>
            <p>Its has id : {id}</p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;