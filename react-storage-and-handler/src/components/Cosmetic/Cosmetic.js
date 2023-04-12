import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {title, price, id} = props.cosmetic;
    return (
        <div className='product'>
            <h3>Buy this  : {title}</h3>
            <p>Only for $ : {price}</p>
            <p>Its has id : {id}</p>

        </div>
    );
};

export default Cosmetic;