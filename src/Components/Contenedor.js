import React, { useEffect } from 'react'
import { DataContext } from '../context/DataContext';
import { useContext} from 'react';
import axios from 'axios';
import Sumatoria from './Sumatoria'

function Contenedor() {

  const {numero} = useContext(DataContext);

  const guardar = () => {
    axios.post("http://localhost/desarrolloBackEnd/public/api/numeros", {
      valor: '5',
      fila: '5'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className=' relative w-[60%] h-[70%] bg-neutral-100 shadow-lg drop-shadow-lg rounded-[3.5rem] flex justify-center'>

        <h1 className=' absolute top-10 right-15 text-5xl text-sky-500 font-black' >¡A CALCULAR!</h1>

        <div className="grid grid-cols-4 gap-4 w-[60%] h-[70%] mt-[8rem] overflow-auto">
            {
             /* A function that is mapping the array of objects that is in the context. */
              numero.map((n) => {return <Sumatoria key={n['id']} id_nombre={`id_${n['id']}`}   id_numero_bd={`span_bd__${n['id']}`} id_resultado={`span_resultado__${n['id']}`} bd_numero ={n["valor"]}/>} )
            }
        </div>

        <div className='absolute bottom-5 right-12'>
            <button onClick={() => {guardar()} }  className='bg-sky-500 p-[1rem] text-white font-black rounded-xl'>GUARDAR</button>
        </div>
    </div>
    
  )
}

export default Contenedor