import React from 'react'
import { Button } from 'reactstrap';
export const ButtonLogin = ({onClick, text})=>{

    return (
        <Button className="button-color text-font mb-3 rounded-4 ps-3 w-100" 
        onClick={onClick}>{text}</Button>
    )
}
   
export const ButtonIconText = ({onClick, text, icon})=>{

    return (
        <Button className="button d-flex align-items-center justify-content-center" 
        onClick={onClick}>{icon}{text}</Button>
    )
}


export const ButtonIcon= ({onClick,icon})=>{
    return(
    <Button onClick={onClick} className='bg-transparent border-0 rounded-4 d-flex align-items-center justify-content-center'>
    {icon}
    </Button>
    )
}

