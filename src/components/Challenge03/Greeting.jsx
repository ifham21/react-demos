import React from 'react'

const Greeting = () => {

    const greetingMessage = "Hi, There";

    const date = new Date();

    const name = "John"
    const currentDate = new Date().toLocaleDateString();

    return(
        <div>
            <h1> {greetingMessage} </h1>
            <p> Date: {date.getDate()} </p>
            <p> Name: {name} </p>
            <p> Full Date: {currentDate} </p>

        </div>
    )

}

export default Greeting