import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {

    const [steps, setSteps] = useState(0)

    const increaseStep = () =>{
        const newStep = steps + 1;
        setSteps(newStep)
    }

    useEffect(()=>{
        console.log("Count : ", steps)
    },[steps])


    return (
        <div style={{border:"1px solid orange", margin:"10px"}}>
            <h2>This is my smart watch</h2>
            <hr />
            <h3>My Current Step : {steps}</h3>
            <button onClick={increaseStep}>De Dour</button>
            <Display name="Nova 5t" steps={steps}></Display>
        </div>
    );
};

export default Watch;