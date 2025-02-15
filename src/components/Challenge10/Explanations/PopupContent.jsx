import React from 'react'
import { createPortal } from 'react-dom';

const PopupContent = ({copied}) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{position:"absolute", bottom: "3rem"}}>Copied to Clipboard</div>
        )}
    </section>,
    //modifying the div content directly, for this we need to add createPortal from react-dom
    document.querySelector('#popup-content')
  )
}

export default PopupContent