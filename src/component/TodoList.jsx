import React, { useRef, useState } from 'react';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import './createTodo.css';

const TodoList = () => {

    const nextId = useRef(1);

    const [users, setUsers] = useState([]);
    
    const [ inputs, setInputs ] = useState({
        username : '',
    });

    const { username } = inputs;
    
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,  
            [name]:value  
        });
        console.log(inputs);
    }

    const onCreate = ()=>{
        const user = {
            id: nextId.current,
            username: username,
        }
        setUsers(users.concat(user));

        setInputs({
            username:'',
        })

        nextId.current += 1 ;
        console.log(users);
    
    }

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const onToggle = (id) => {
        setUsers(users.map(u=>
            u.id === id ? { ...u, active: !u.active} : u
        ))
    }

    return (
        <div className='userList'>
            <CreateTodo username={username} onChange={onChange} onCreate={onCreate}/>
            {
                users.map((u)=>(
                    <Todo user={u} key={u.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
        </div>
    );
};

export default TodoList;