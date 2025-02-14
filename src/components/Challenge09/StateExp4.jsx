import React, { useState } from 'react'

//Example for updating the Array of Object using State
const StateExp4 = () => {

    const [movies, setMovies] = useState([
        {id: 1, title: "Spiderman", rating: 3},
        {id: 2, title: "Spiderman 2", rating: 4},
    ]);

    const handleClick = () => {

        setMovies(
            //iterating through each movies
            movies.map(
                //if the id of the movie is 1
                movie => movie.id === 1 
                //then change the title of the movie to John Wick
                ? {...movies, title: "John Wick"}
                //else return the movie
                : movie
            )
        )
    }

  return (
    <div>
        <h1>Example for updating the Array of Object using State</h1>
        <p>
            {movies.map((movie) => (
                <li key={movie.id}>
                    {movie.title}
                </li>
            ))}
        </p>
        <button onClick={handleClick}>Change Name</button>
        <hr />
    </div>
  )
}

export default StateExp4