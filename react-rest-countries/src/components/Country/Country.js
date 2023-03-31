import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area} = props.country;
    
    return (
        <div className='country'>
            <h1>Countries : {name.common}</h1>
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
        </div>
    );
};

export default Country;