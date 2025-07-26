import React from 'react';
import { useState } from 'react';
import { LoginUser } from '../../services/serviceAuth'
import { ButtonLogin } from '../../componentes/buttons/botones';
import { InputLogin } from '../../componentes/inputs/inputs';
import {Link} from 'react-router-dom';
export default function Login({setRole}) {
    const [ formData, setFormData] = useState({
        nombreUsuario: "",
        contrasena: ""
    })
    const handleSave = async ()=>{
      const result =await LoginUser(formData)
      localStorage.setItem('usuario', JSON.stringify(result.nombreUsuario))
      localStorage.setItem('rol', JSON.stringify(result.roleId))
      setRole(result.roleId)
      console.log(result)
    }
    
    const changeInputs = (e)=>{
        const { name, value} = e.target
        setFormData({
            ...formData,
            [name]:value
        })
    } 
 
    return (
       <div className="my-3 p-2 ">
      <div className=" login-container d-flex flex-column p-2 flex-md-row justify-content-center align-items-stretch gap-4 w-100">
        <div className=" login-form-box rounded-4 p-4 d-flex flex-column  justify-content-start  w-100 me-md-3" >
          <div className='mx-auto  mt-4 pt-2 w-75'>
            <h4 className="mb-2 text-font text-start">¡Bienvenido nuevamente!</h4>
            <p className="text-font text-start mb-3">Ingresa tu usuario y contraseña </p>
            <InputLogin  onChange={changeInputs} name="nombreUsuario" placeholder="Usuario" />
            <InputLogin onChange={changeInputs} name="contrasena" placeholder="Contraseña" type="password" />
            <Link className='d-flex justify-content-end link-color mb-4'>¿Olvidaste tu contraseña?</Link>
            <ButtonLogin onClick={handleSave} text="Ingresar"/>
            <p className='text-center mt-3 text-font'>O</p>
            <div className='d-flex gap-4 p-3 justify-content-center w-100'>
            <Link className='login-logos-box  text-font '><img src="/google.svg" alt="google"className='login-logos me-2 ' /> Google</Link>
            <Link className=' login-logos-box text-font'  ><img src="/facebook.svg" alt="google" className='login-logos me-2 ' />Facebook</Link>
            <Link className=' login-logos-box text-font  ' ><img src="/mac.svg" alt="google" className='login-logos me-2 ' />Apple</Link>
            </div>
            <p className='text-center mt-4 text-font'>No tiene una cuenta? <Link className='link-color'>Registrate</Link></p>
          </div>
        </div>
        <div className='login-box rounded-4 position-relative d-flex flex-column justify-content-between align-items-center rounded d-flex w-100'>
        <div className='position-absolute start-0 m-4 '>
        <p className=' login-banner-icon border rounded-3 text-center'>Medical clinic</p>
        </div>
          <div className=" d-flex justify-content-center pt-md-5 mt-md-4 w-100"> 
            <img src="/doctor2.png" alt="Bombero" className="img-fluid login-image-box "/>
            </div>
          <div className="  d-flex justify-content-center align-items-center p-4 mb-4 w-100 ">
            <p className='fw-bold text-color ps-2'>Deja tu salud en manos de los mejores doctores</p>
          </div>
        </div>
      </div>
    </div>
    );
}