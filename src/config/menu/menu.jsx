import React from 'react'
import Usuarios from '../../pagina/usuarios'
import Bitacora from '../../pagina/bitacora'

export const administrador =[
    {title: "Usuarios", component: <Usuarios/>, path: "/"}
]
export const empleado =[
    {title: "Bitacora", component: <Bitacora/>, path: "/"}
]