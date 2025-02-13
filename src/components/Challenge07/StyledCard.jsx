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
        <h1>Title</h1>
        <p>Description</p>
    </div>
  )
}

export default StyledCard