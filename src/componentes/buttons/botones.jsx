import React from 'react'
import { Button } from 'reactstrap';
export const ButtonLogin = ({onClick, text})=>{
    return (
        <Button className="button-color text-font mb-3 rounded-4 ps-3 w-100" 
        onClick={onClick}>{text}</Button>
    )
}