import React from 'react';
import './Task.css'

const Task = (props) => {
    const {id, title, completed} = props.todo;
    // console.log(props)
    return (
        <div>
            <div className='task'>
                <h2>{id}</h2>
                <h3>{title}</h3>
                <h4>{completed}</h4>
            </div>
        </div>
    );
};

export default Task;