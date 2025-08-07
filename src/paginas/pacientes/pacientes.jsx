import React from 'react';
import { TableComponent } from '../../componentes/table/table';
import { CardNumberPaciente } from '../../componentes/card/cardnumberpacient';
import  BarChart  from '../../componentes/chart/barchart';
import { ButtonIcon,  ButtonIconText } from '../../componentes/buttons/botones';
import { CirclePlus, Check,  Trash2, PencilLine, Eye } from 'lucide-react';

import RadarChart from '../../componentes/chart/radialChart';
export default function Bitacora (){
    const usersName = [
    {
        Nombre: 1,
        Telefono: "Kikobeats",
        Pendiente: "Jiko Beats",
    },
    {
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    }
    ,{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },
    {
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    }
   ,{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Pendiente: "Miko Beats",
    },
]
const meses = ["Ene", 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct', 'Nov', 'Dic']
    return(
        <div className=" d-flex flex-column flex-md-row align-items-stretch gap-2 m-3 p-3 ">
            <div className='d-flex flex-column col-12 col-md-5 ' >
                <div className="mb-3 ">
                  <ButtonIconText icon={<CirclePlus size={30} className='pe-1' color="#f5a315" strokeWidth={1.5} />} text="Paciente"/>
                </div>
                <TableComponent  totalitems={6} height="404px" data={usersName}  headers={["Nombre", "Telefono", "Pendiente"]}
                renderAction={(item, index) => 
                <div className='d-flex'>
                <ButtonIcon icon={ <Eye size={18} color="#f5a315" />}/>
                <ButtonIcon icon={ <PencilLine size={18} color="#102542" />}/>
                <ButtonIcon icon={<Trash2  size={18}  color="red"/>}/> 
                </div>
                }
                />
          </div>
            <div className='d-flex flex-column  col-md-4 col-12 mt-md-3 pt-1 '>
                <div className='d-flex gap-2 mb-md-2 mb-3 mt-md-4'>
                    <CardNumberPaciente title="Total de pacientes" text="200"/>
                    <CardNumberPaciente  title="Pacientes nuevos" text="100"/>  
                </div>
                <div className='barchar-container h-100 '>
                    <BarChart labels={meses} />
                </div>
            </div>
            <div className=' flex-row col-12 barchar-container radial-chart col-md-3 '>
                <RadarChart  labels={meses}/>
            </div>
        </div>
    );
}