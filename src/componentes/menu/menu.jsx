import React from 'react'
import Dashboard from '../../paginas/admin/dashboard'
import Pacientes from '../../paginas/pacientes/pacientes'
import Calendario from '../../paginas/calendario/calendario'

export const administrador =[
    {title: "Dashboard", component: <Dashboard/>, path: "/"},
    {title: "Pacientes", component: <Pacientes/>, path: "/pacientes"},
    {title: "Calendario", component: <Calendario/>, path: "/calendario"}

    
]
export const asistente =[
    {title: "Pacientes", component: <Pacientes/>, path: "/pacientes"}
]