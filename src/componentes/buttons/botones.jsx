import React from 'react'
import { Button } from 'reactstrap';
import { ClipboardPen, CirclePlus } from 'lucide-react';
export const ButtonLogin = ({onClick, text})=>{

    return (
        <Button className="button-color text-font mb-3 rounded-4 ps-3 w-100" 
        onClick={onClick}>{text}</Button>
    )
}
export const ButtonReceta = ({onClick})=>{

    return (
        <Button className="button d-flex align-items-center justify-content-center " 
        onClick={onClick}> <ClipboardPen className='pe-1' color="#f5a315" strokeWidth={1}/>Receta</Button>
    )
}   

export const ButtonAdd = ({onClick, text})=>{

    return (
        <Button className="button d-flex align-items-center justify-content-center" 
        onClick={onClick}><CirclePlus size={30} className='pe-1' color="#f5a315" strokeWidth={1.5} />{text}</Button>
    )
}