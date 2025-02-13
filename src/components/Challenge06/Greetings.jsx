import React from 'react'

const Greetings = (props) => {

  const morning = "Good Morning!";
  const afternoon = "Good Afternoon!";

  return (
    <div>
      {props.timeOfDay == "morning"? morning : afternoon}
    </div>
  )
}

export default Greetings