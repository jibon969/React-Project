import React, { useEffect, useState } from 'react';

const Watch = () => {

    const [steps, setSteps] = useState(0)

    const increaseStep = () =>{
        const newStep = steps + 1;
        setSteps(newStep)
    }

    useEffect(()=>{
        console.log(steps)
    },[steps])


    return (
        <div>
            <h2>This is my smart watch</h2>
            <hr />
            <h3>My Current Step : {steps}</h3>
            <button onClick={increaseStep}>De Dour</button>
        </div>
    );
};

export default Watch;