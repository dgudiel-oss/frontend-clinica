import React from 'react';
import { Input } from 'reactstrap';
export const InputLogin = ({onChange, value,name, placeholder, type="text" })=>{
    return (
        <Input
        className='mb-3 rounded-4 ps-3 w-100'
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        />
    )
}