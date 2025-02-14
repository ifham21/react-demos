import React, { useState } from 'react'

//Example for updating the Object using State
const StateExp3 = () => {

    const [movie, setMovie] = useState({
        title: "Beast",
        rating: 5
    });

    const handleClick = () => {
        // const copyMovie = {
        //     ...movie, //specify the object and make a copy
        //     rating: 4, //specify which object needs to change
        // }

        //shorter version of the above function
        setMovie({...movie, rating: 4})
    }

  return (
    <div>
        <h1>Example for updating the Object using State</h1>
        <h3>Title: {movie.title}</h3>
        <h4>Rating: {movie.rating} </h4>
        <button onClick={handleClick}>Change Rating</button>
        <hr />
    </div>
  )
}

export default StateExp3