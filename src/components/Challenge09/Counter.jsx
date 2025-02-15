import React, { useState } from 'react'

//Basic of Use State
const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick} >Increment</button>
    </div>
  )
}

export default Counter