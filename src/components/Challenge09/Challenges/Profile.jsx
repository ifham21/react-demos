import React, { useState } from 'react'

//updating the objects and printing them using state
const Profile = () => {

    //state for list the items
    const [items, setItems] = useState([])

    //state to add name input
    const [name, setName] = useState('')

    //state for add age input
    const [age, setAge] = useState(0)

    //create an object to save the input
    const profileInfo = {
        name: name,
        age: age,
    }

    //handles the profile infos to the list of arrays
    const handleClick = () => {
        setItems([...items, profileInfo]),
        setName(''),
        setAge('')
    }

  return (
    <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter your name' />
        <input type="text" value={age} onChange={(event) => setAge(event.target.value)} placeholder='Enter your age' />
        <button onClick={handleClick}>Add</button>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Profile