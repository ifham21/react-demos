import React from 'react'

const Weather = ({temperature}) => {

    const tempCold = <tempCold><p>It's cold outside!</p></tempCold>
    const tempNice = <tempNice><p>It's nice outside!</p></tempNice>
    const tempHot = <tempHot><p>It's hot outside!</p></tempHot>

  return (
    <div>
        {temperature <= 15 ? tempCold: (temperature <= 25) ? tempNice: tempHot}
    </div>
  )
}

export default Weather