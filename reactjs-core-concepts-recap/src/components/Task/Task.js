import React from 'react';
import './Task.css'

const Task = (props) => {
    const {userId, title, completed} = props.todo;
    // console.log(props)
    return (
        <div>
            <div className='task'>
                <h2>User ID : {userId}</h2>
                <h3>Task : {title}</h3>
                <h4>Completed : {completed}</h4>
            </div>
        </div>
    );
};

export default Task;