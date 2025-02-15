import React, { useState } from 'react'

//Updating the arrays with state
const TodoList = () => {

    //state for list the items
    const [items, setItems] = useState([]);

    //state for input values
    const [newItem, setNewItem] = useState('');

    //adding the items to the list
    const addItem = () => setItems(
        //We can't use push() with Hooks since this will modify the array but react expects to get a new array
        // items.push(newItem)

        //so the right way to add the input to the items is
        [...items, newItem],
        setNewItem('') //this will set the value to blank so the input will be reset to blank
    )

  return (
    <div>
        {/* The onChange function will update state with the use of setNewItem */}
        <input type = "text" value = {newItem} onChange={(event) => setNewItem(event.target.value)} placeholder='Please enter the list' />
        <button onClick={addItem}>Add</button>
        <p>Todo List</p>
        <ol>
            {/* iterate the items in the list, at first no any items and then when items added those will be listed here */}
            {items.map((item, index) => (
                // key should be unique, so that's the reason for inserting index
                <li key={index}>
                    {item}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default TodoList