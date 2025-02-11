import React from 'react'


const UserList = () => {

    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22},
    ];

    return(
        <div>
            <h1>User List</h1>
            {/* usual method => 
                {users.map((users) => (
                    <div key={users.id}>
                        <p>Name: {users.name}</p>
                        <p>Age: {users.age}</p>
                    </div>
                ))}
            */}
            {/* we can use the map as like this as well which is called destructuring */}
            {users.map(({id, name, age}) => (
                <div key={id}>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <hr />
                </div>
            ))}
        </div>
    )

}

export default UserList;