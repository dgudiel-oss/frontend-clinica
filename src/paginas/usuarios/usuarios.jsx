import React from "react";
import { TableComponent } from "../../componentes/table/table";
import {ButtonIcon, ButtonIconText } from "../../componentes/buttons/botones";
import { CirclePlus, Trash2, PencilLine } from 'lucide-react';

    const usersName = [
    {
        Nombre: 1,
        Telefono: "Kikobeats",
        Usuario: "Jiko Beats",
        Identidad: 23,
        Correo: "aaa@aaa"
    },
    {
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
        Identidad: 23,
          Correo: "aaa@aaa"

    }
    ,{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
        Identidad: 23,
          Correo: "aaa@aaa"
    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },
{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    },{
        Nombre: 2,
        Telefono: "Likobeats",
        Usuario: "Miko Beats",
                Identidad: 23,
                  Correo: "aaa@aaa"

    }]
export default function Usuarios(){
    
    return (
        <>
        <div className="m-3 p-3">
            <div className="pb-3">
            <ButtonIconText icon={<CirclePlus size={30} className='pe-1' color="#f5a315" strokeWidth={1.5} />} text="Agregar" />
            </div>
            
            <TableComponent height={"415px"} data={usersName} totalitems={6}
            headers={["Nombre", "Telefono", "Usuario", "Identidad","Correo"]}
            renderAction={()=>(
            <div className="d-flex">
            <ButtonIcon icon={ <PencilLine size={18} color="#102542" />}/>
            <ButtonIcon icon={<Trash2  size={18}  color="red"/>}/>
            </div>
            )}/>
        </div>
        </>

    )
}