import React, { useState } from 'react'
import StateExp5C1 from './StateExp5C1';
import StateExp5C2 from './StateExp5C2';

//Example for share the state into our component using props
const StateExp5 = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <StateExp5C1 count = {count} onClickHandler = { () => setCount(count + 1)} />
        <StateExp5C2 count = {count} onClickHandler = { () => setCount(count + 1)} />
    </div>
  )
}

export default StateExp5