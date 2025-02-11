import React from 'react'

const ProductList = () => {

    const products = [
        {id: 1, name: "Phone", price: "$699"},
        {id: 2, name: "Laptop", price: "$1200"},
        {id: 3, name: "Headphones", price: "$199"},
    ]

    return(
        <>
            <h1>Product List</h1>
            {/* to iterate the products we use .map() method */}
            {products.map(({id, name, price}) => (
                <div key={id}>
                    <ul>
                        <li>Name: {name}</li>
                        <li>Price: {price}</li>
                    </ul>
                </div>
            ))}
        </>
    )
}

export default ProductList