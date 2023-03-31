import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Countries : {props.name}</h1>
            <h3>Population : {props.population}</h3>
            <h3>Area : {props.area}</h3>
        </div>
    );
};

export default Country;