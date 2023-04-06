import React from 'react';
import { add, multiply } from '../utilities/calculate';

// import add from '../utilities/calculate';

const Cosmetics = () => {
    const first = 20;
    const second = 10;
    const total = add(first, second)
    const result = multiply(first, second)
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Total : {total}</p>
            <p>Multiply : {result}</p>
        </div>
    );
};

export default Cosmetics;