import React from 'react'

const Button = () => {

    const handleClick = () => {
        console.log( Math.round(Math.random() * 10) )
    }

  return (
    <div>
        <button onClick={handleClick} > 
            Click Me 
        </button>
    </div>
  )
}

export default Button