import React from 'react'

const Weather = ({temperature}) => {

    const tempCold = <div><p>It's cold outside!</p></div>
    const tempNice = <div><p>It's nice outside!</p></div>
    const tempHot = <div><p>It's hot outside!</p></div>

  return (
    <div>
        {temperature <= 15 ? tempCold: (temperature <= 25) ? tempNice: tempHot}
    </div>
  )
}

export default Weather