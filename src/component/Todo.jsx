import React from 'react';
import './createTodo.css';

const Todo = ({ user, onRemove, onToggle }) => {
    return (
        <div className='TodoContainer'>
            <div className='TodoBody'>
                <span className='TodoUser' style={{
                    cursor: 'pointer',
                    textDecorationLine: user.active ? 'line-through' : 'none'
                }} onClick={() => onToggle(user.id)}> {user.username}</span>
            </div>
                <button className='delButton' onClick={() => onRemove(user.id)}>X</button>
        </div>
    );
};

export default Todo;