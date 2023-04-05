import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:"1px solid red", margin:"10px"}}>
            <h2>This is dial</h2>
            <h3>Steps : {props.steps}</h3>
        </div>
    );
};

export default Dial;