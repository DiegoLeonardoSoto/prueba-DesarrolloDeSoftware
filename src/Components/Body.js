import React from 'react'
import Contenedor from './Contenedor'
import Bg from "../img/Background.svg";
import Logeo from './Logeo';
import {Route, Routes} from 'react-router-dom'

function Body() {
  return (
  <div
  className='bg-sky-50 w-screen h-screen flex items-center justify-center bg-no-repeat bg-cover bg-fixed text-4xl'
  style={{backgroundImage: `url(${Bg})`}}
  >
    <Routes>
      <Route path='/' element={<Logeo/>} />
      <Route path='/Contenedor' element={ <Contenedor/> } />
    </Routes>
      
    </div>
  )
}

export default Body