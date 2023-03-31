import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, population, area, flags} = props.country;

    // console.log(props.country)

    return (
        <div className='country'>
            <h1>Countries : {name.common}</h1>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;