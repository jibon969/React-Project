import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './TodoList.css'
const TodoList = () => {
    const [todos, SetTodos] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(data=>SetTodos(data))
    }, [])


    return (
        <div>
            <h1>Todo</h1>
            <hr/>
            <div className='task-container'>
                {
                    todos.map(todo =><Task todo={todo}></Task>)
                }
            </div>

        </div>
    );
};

export default TodoList;