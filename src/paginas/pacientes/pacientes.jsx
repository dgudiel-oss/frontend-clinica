import React from 'react';
import { TableComponent } from '../../componentes/table/table';
import { Button } from 'reactstrap';
import { ClipboardCheck } from 'lucide-react';
import { CardNumberPaciente } from '../../componentes/card/cardnumberpacient';
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
   
]
    return(
        <div>
            <div>
                <CardNumberPaciente title="Total de pacientes" text="200"/>
            </div>
            <TableComponent data={usersName}  headers={["Nombre", "Telefono", "Pendiente"]}
          renderAction={(item, index) => 
          <Button className="bg-transparent border-0 p-0">
          <ClipboardCheck size={20} color="#102542" strokeWidth={1} />
          </Button> }/>
        </div>
    );
}