import React from 'react'

const Greetings = ({timeOfDay}) => {

  const morning = "Good Morning!";
  const afternoon = "Good Afternoon!";

  return (
    <div>
      {timeOfDay == "morning"? morning : afternoon}
    </div>
  )
}

export default Greetings