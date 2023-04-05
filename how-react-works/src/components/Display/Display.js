import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:"1px solid green", margin:"10px"}}>
            <h1>Display</h1>
            <h2>So far step today : {props.steps}</h2>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Display;