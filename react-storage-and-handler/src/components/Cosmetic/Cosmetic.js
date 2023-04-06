import React from 'react';

const Cosmetic = (props) => {
    const {title, price} = props.cosmetic;
    return (
        <div>
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Cosmetic;