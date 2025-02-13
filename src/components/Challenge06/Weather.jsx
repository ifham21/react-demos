import React from 'react'

const Weather = ({temperature}) => {

    const tempCold = <h1>It's cold outside!</h1>
    const tempNice = <h1>It's nice outside!</h1>
    const tempHot = <h1>It's hot outside!</h1>

  return (
    <div>
        {temperature <= 15 ? tempCold: (temperature > 15 && temperature <= 25) ? tempNice: tempHot}
    </div>
  )
}

export default Weather