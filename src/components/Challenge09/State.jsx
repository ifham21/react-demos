import React, { useState } from 'react'

const State = () => {

    //useState to initialize and set the new value
    const [count, setCount] = useState(0);

    //increment function to set the count to add by 01
    const increment = () => {
        setCount(count + 1);
    }

    //decrement function to set the count reduce by 01
    const decrement = () => {
        //if the count is 0 then the count won't be reduced
        if(count != 0 ){
            setCount(count - 1);
        }
        
    }

  return (
    <div>
        <button onClick={increment} > + </button>
        <h1>
            {count}
        </h1>
        <button onClick={decrement} > - </button>
        

    </div>
  )
}

export default State