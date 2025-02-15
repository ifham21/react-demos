import React, { useState } from 'react'

//Challenge - useState with an Array of object
const ShoppingList = () => {

    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    const shoppingInfo = {
        name: name,
        quanity: quantity,
    }

    const handleClick = () => {
        setItems([...items, shoppingInfo]),
        setName(''),
        setQuantity('')
    }

  return (
    <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Enter the product name' />
        <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} placeholder='Enter the quantity' />
        <button onClick={handleClick}>Add</button>
        <h4>List of Shopping Items</h4>
        <ul>
            {items.map((items, index) => (
                <li key={index}>
                    <p>Product: {items.name}</p>
                    <p>Quantity: {items.quanity}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ShoppingList