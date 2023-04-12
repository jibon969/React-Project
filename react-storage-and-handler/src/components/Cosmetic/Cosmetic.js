import React from 'react';
import './Cosmetic.css'
import { addToDb, addTwoNumber } from '../utilities/calculate';

const Cosmetic = (props) => {
    const {title, price, id} = props.cosmetic;
    const result =  addTwoNumber(10, 30)

    const addToCart = (id) =>{
        addToDb(id)
    }

    return (
        <div className='product'>
            <h3>Buy this  : {title}</h3>
            <p>Only for $ : {price}</p>
            <p>Its has id : {id}</p>
            <p>Sum : {result}</p>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;