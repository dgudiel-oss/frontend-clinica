import React from 'react';
import { TableComponent } from '../../componentes/table/table';
import { Button } from 'reactstrap';
import { ClipboardCheck } from 'lucide-react';
import { CardNumberPaciente } from '../../componentes/card/cardnumberpacient';
import  BarChart  from '../../componentes/chart/barchart';
import { ButtonAdd } from '../../componentes/buttons/botones';
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
    },
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
   
]
const meses = ["Ene", 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct', 'Nov', 'Dic']
    return(
        <div className=" d-flex flex-column flex-md-row align-items-stretch gap-2 m-3 p-3 ">
            <div className='d-flex flex-column col-12 col-md-5 ' >
                <div className="mb-3 ">
                    <ButtonAdd text="Paciente"/>
                </div>
                <div className='container-table-400 '  >
                <TableComponent height="404px" data={usersName}  headers={["Nombre", "Telefono", "Pendiente"]}
                renderAction={(item, index) => 
                <Button className="bg-transparent border-0 p-0">
                    <ClipboardCheck size={20} color="#102542" strokeWidth={1} />
                </Button> }/>
                </div>
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