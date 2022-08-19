import React from 'react'
import {useNavigate} from 'react-router-dom'



function Logeo() {

    const navigate = useNavigate()

    const Loguearse = ()  => {
        navigate('/Contenedor')
    }
  return (
    <div className='flex justify-center  w-[40%] h-[50%] bg-neutral-100 shadow-lg drop-shadow-lg rounded-[3.5rem]'>
        
        <div className=' grid grid-cols-2 gap-[4.5rem] content-center '>{/* <-- Grilla */}
            <h1 className='text-5xl text-sky-500 font-black col-span-2 text-center'>Inicio de sesion</h1>

            <span className='text-3xl'>Usuario</span> <input autoComplete="off" className="h-[2rem] drop-shadow-lg p-3 border-none basis-[40%] bg-white rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="text" />

            <span className='text-3xl '>Contraseña</span> <input autoComplete="off" className="h-[2rem] drop-shadow-lg p-3 border-none basis-[40%] bg-white rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type='password' />

            <div className='col-span-2 text-center'>
            <button onClick={() => {Loguearse()}} className='text-xl w-[12rem] h-[4rem] bg-sky-500 p-[1rem] text-white font-black rounded-xl'>Iniciar sesion</button>
            </div>

        </div>
    </div>
  )
}

export default Logeo