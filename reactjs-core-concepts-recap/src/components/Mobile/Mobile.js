import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {
    const [count, setCount] = useState(100);
    const handleChargeDecrease = () =>{
        if(count === 0){
            setCount(0)
        }
        else{
            setCount(count - 10)
        }
    }
    return (
        <div>
            <h2>Battery Down, need to charge !</h2>
            <hr/>
            <h2>Charge : {count} %</h2>
            <button onClick={handleChargeDecrease} className='btn-style'>Battery Down</button>
        </div>
    );
};

export default Mobile;