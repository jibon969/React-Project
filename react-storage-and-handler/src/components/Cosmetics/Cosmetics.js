import React, { useEffect, useState } from 'react';
import { add, multiply } from '../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

// import add from '../utilities/calculate';

const Cosmetics = () => {
    const first = 20;
    const second = 10;
    const total = add(first, second)
    const result = multiply(first, second)
    const [cosmetics, setCosmetics] = useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setCosmetics(data))
    }, [])

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total : {total}</p>
            <p>Multiply : {result}</p>
            {
                cosmetics.map(cosmetic=><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
            
        </div>
    );
};

export default Cosmetics;