import React,{ useEffect, useState} from 'react';
import { getUsuarios } from '../services/serviceAuth';
export default function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

useEffect(()=>{
        const obtenerUSuarios = async ()=>{
            try {
                const lista = await getUsuarios()
                setUsuarios(lista)
                console.log(lista)
            }catch (error) {
                console.log(error)
            }
        }
                    obtenerUSuarios()

    },[])

    return (
        <div>
            <h1>Usuarios</h1>
            <p>{usuarios && JSON.stringify(usuarios)}</p>
        </div>
    );
}