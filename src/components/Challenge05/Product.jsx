import React from 'react'

// destructured the props here
const Product = ({name, price}) => {
  return (
    <div>
        <h2>Product: {name}</h2>
        <p>Price: ${price}</p>
    </div>
  )
}

export default Product