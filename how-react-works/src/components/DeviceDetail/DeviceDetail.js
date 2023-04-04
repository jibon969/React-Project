import React from 'react';

const DeviceDetail = (props) => {
    // props.price = 199
    return (
        <div>
            <p>Price : {props.price}</p>
        </div>
    );
};

export default DeviceDetail;