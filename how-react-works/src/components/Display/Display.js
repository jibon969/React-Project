import React from 'react';

const Display = (props) => {
    return (
        <div style={{border:"1px solid green", margin:"10px"}}>
            <h2>So far step today : {props.steps}</h2>
        </div>
    );
};

export default Display;