import React from 'react';
import './createTodo.css';

const CreateTodo = ({ username, onChange, onCreate }) => {
    return (
        <div className='createName'>
            <input
            className='todoInput'
            type="text" 
            name='username'
            onChange={onChange}
            value={username}
            />
            <button className='createButton' onClick={onCreate}>create</button>
        </div>
    );
};

export default CreateTodo;