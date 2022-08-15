import React from 'react'

function Sumatoria( {id_nombre, id_numero_bd, id_resultado,bd_numero} ) {

const verificar = () => {
  let input = document.getElementById(id_nombre);
  if (input.value.length > 2) {
    input.value = input.value.slice(0,2)
  }
}

const operacion = () => {
  let numero = parseInt(document.getElementById(id_nombre).value) ;
  let numero_bd = parseInt(document.getElementById(id_numero_bd).innerHTML);

  document.getElementById(id_resultado).innerHTML = numero_bd + numero

}

  return (
    <div className='flex flex-row items-center justify-center text-4xl col-span-4'>
        <input autoComplete="off" className=" drop-shadow-lg p-0 text-center border-none basis-[40%] bg-white rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" 
        maxLength='2' type="number" id={id_nombre} onKeyDown={verificar}/>
        <div className='basis-[15%] flex justify-center'> <button onClick={operacion} className='w-[3rem] h-[3rem] bg-sky-500 rounded-full font-black text-white relative'><span className='absolute top-0 left-[11px]'>+</span></button> </div> 
        <div className='basis-[15%] flex justify-center'> <span id={id_numero_bd}> {bd_numero} </span> </div>
        <div className='basis-[15%] flex justify-center'>=</div>
        <div className='basis-[15%] flex justify-center'> <span id={id_resultado}> 0 </span> </div>
    </div>
  )
}

export default Sumatoria