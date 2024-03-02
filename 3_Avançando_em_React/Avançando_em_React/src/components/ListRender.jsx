import React from 'react'
import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 28},
        {id: 2, name: "Pedro", age: 32},
        {id: 3, name: "Josias", age: 35},

    ])

    const deleteUser = () => {
        const randomNumer = Math.floor(Math.random() * 4);

        setUsers ((prevUsers) => {
            return prevUsers.filter((user) => randomNumer !== user.id);
        });
    }
  
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteUser}>Delete random user</button>
        </div>
  )
}

export default ListRender