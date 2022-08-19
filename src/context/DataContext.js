import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const DataContext  = createContext();

export const Dataprovider = ({children}) => {

    const [numero,setNumero] = useState([{}]);
    const [fila, setfila] = useState({});

    const API_URL = "http://localhost/desarrolloBackEnd/public/api/numeros";

/* A hook that is called when the component is mounted. */
    useEffect(() => {
        axios.get(`${API_URL}`)
        .then(res=> {
            setNumero(res.data);
        })
    }, []);

    return(
        <DataContext.Provider value={{
            fila,
            numero
        }}>
            {children}
        </DataContext.Provider>
    )
};

