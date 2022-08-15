import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const DataContext  = createContext();

export const Dataprovider = ({children}) => {

    const [numero,setNumero] = useState([{}]);
    const [fila, setfila] = useState({});

    const API_URL = "http://localhost/desarrolloBackEnd/public/api/numeros";

    useEffect(() => {
        axios.get(`${API_URL}`)
        .then(res=> {
            setNumero(res.data);
        })
    }, []);

    // const fetchNumeros = async() =>{
    //     const {numeros} = await axios.get(`${API_URL}`,{
    //         params:{

    //     }
    //     })
    //     console.log(numeros);
    //     return numeros
    // }

    // const datos = fetchNumeros();
    // setNumero(datos)
    //------------

    return(
        <DataContext.Provider value={{
            fila,
            numero
        }}>
            {children}
        </DataContext.Provider>
    )
};

