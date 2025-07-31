import React from "react";
import { CardCarouselPaciente } from "../../componentes/card/cardCarouselpaciente";
import { CardNumberPaciente } from "../../componentes/card/cardnumberpacient";
import  BarChart  from "../../componentes/chart/barchart";
import { TableComponent } from "../../componentes/table/table";
import { ButtonReceta } from "../../componentes/buttons/botones";
import { ClipboardCheck, CalendarDays, User } from 'lucide-react';
import { Button } from "reactstrap";
export default function Dashboard(){
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
    return (
        <>
       <div className="m-3 p-3">
          <div className="d-flex flex-wrap justify-content-between w-100">
        <div className="d-flex flex-column align-items-center col-md-5 col-12 mb-3">
       <div className="d-flex  w-100">
        <ButtonReceta/>
       </div>
      <div className="d-flex w-100  gap-4 pt-3">
        <CardNumberPaciente icon={<User className="mb-2" size={24} color="#102542" strokeWidth={1} />} 
        title="Pacientes" text="10" />
        <CardNumberPaciente  icon={<CalendarDays className="mb-2" size={24} color="#102542" strokeWidth={1} />}
         title="Citas pendientes" text="10" />
      </div>
      <div className="w-100 barchar-container pb-2  mt-3">
        <BarChart />
      </div>
    </div>

    <div className="d-flex flex-column align-items-center  col-md-7 col-12 mb-3">
      <div className="w-100 pt-2">
        <CardCarouselPaciente />
      </div>
      <div className=" container-table ">
         <TableComponent
          data={usersName}
          headers={["Nombre", "Telefono", "Pendiente"]}
          renderAction={(item, index) => 
          <Button className="bg-transparent border-0 p-0">
          <ClipboardCheck size={20} color="#102542" strokeWidth={1} />
          </Button> 
          }
        />
      </div>
    </div>
  </div>
</div>

        </>
        
    )
}