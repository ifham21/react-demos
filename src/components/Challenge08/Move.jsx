import React from 'react'

const Move = () => {

    const moveHandler = () => {
        alert('Hey hope you enjoy reading!');
        console.log("Happy Reading 😊");
        
    }

  return (
    <div>
        <p onMouseMove={moveHandler}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, eligendi?
        </p>
    </div>
  )
}

export default Move