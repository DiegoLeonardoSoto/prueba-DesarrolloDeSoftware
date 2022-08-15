import React from 'react'
import Contenedor from './Contenedor'
import Bg from "../img/Background.svg";

function Body() {
  return (
  <div
  className='bg-sky-50 w-screen h-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed'
  style={{backgroundImage: `url(${Bg})`}}
  >
      <Contenedor/>
    </div>
  )
}

export default Body