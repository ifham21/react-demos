import React from 'react'

const Copy = () => {

    const copyHandler = () =>  {
        console.log("Please don't copy the files!")
    }

  return (
    <div>
        <p onCopy={copyHandler}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus amet voluptatem, officia expedita maxime, corporis dolor, 
            animi distinctio reprehenderit nostrum dolorum est architecto? Ab beatae fugiat exercitationem suscipit earum quae?
        </p>
    </div>
  )
}

export default Copy