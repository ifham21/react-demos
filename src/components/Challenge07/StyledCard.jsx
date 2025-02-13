import React from 'react'

const StyledCard = () => {

    const styles = {
        backgroundColor: 'lightBlue',
        padding: "20px",
        borderRadius: "10px",
        color: "darkBlue",
    }

  return (
    <div style={styles}>
        <h1>Styled Card</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Placeat, quisquam beatae tenetur iste animi perferendis fugiat ad tempore omnis. 
            Aperiam labore enim placeat eos ea vel omnis consectetur recusandae quas!
        </p>
    </div>
  )
}

export default StyledCard