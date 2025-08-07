import React from 'react'
import Dashboard from '../../paginas/admin/dashboard'
import Pacientes from '../../paginas/pacientes/pacientes'
import Calendario from '../../paginas/calendario/calendario'
import Usuario from '../../paginas/usuarios/usuarios'
import { User2, LayoutDashboard,CalendarDays, Stethoscope } from 'lucide-react'
export const administrador =[
    {title: "Dashboard", component: <Dashboard/>, path: "/", icon:<LayoutDashboard  className='pb-1 ' size={18}/>},
    {title: "Pacientes", component: <Pacientes/>, path: "/pacientes", icon:<Stethoscope  className='pb-1 ' size={18}/>},
    {title: "Calendario", component: <Calendario/>, path: "/calendario", icon:<CalendarDays className='pb-1 ' size={18}/>},
    {title: "Usuarios", component: <Usuario/>, path: "/usuarios",  icon:<User2 className='pb-1 ' size={18}/>}


    
]
export const asistente =[
    {title: "Pacientes", component: <Pacientes/>, path: "/pacientes"}
]