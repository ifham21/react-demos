import React from 'react'

const StateExp5C2 = ({ count, onClickHandler }) => {

    const handleClick = () => onClickHandler();

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default StateExp5C2