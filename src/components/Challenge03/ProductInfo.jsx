import React from 'react'

const ProductInfo = () => {

    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock"
    };

  return (
    <div>
        <b>
            <p>Product Info</p>
            <ul>
                <li>Name: {product.name}</li>
                <li>Price: ${product.price}</li>
                <li>Availability: {product.availability}</li>
            </ul>
        </b>
    </div>
  )
}

export default ProductInfo