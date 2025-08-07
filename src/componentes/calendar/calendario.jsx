import React,{useState} from "react";
import {Input} from 'reactstrap'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import es from 'date-fns/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { ButtonIcon,  ButtonIconText } from "../buttons/botones";
import { CirclePlus, Check, X } from 'lucide-react';

const locales = { es };
const  localizer = dateFnsLocalizer({format, parse, startOfWeek, getDay, locales, defaultLocale: 'es'})

const citas = [
  {
    title: 'Angel Dassaev gudiel Zuniga',
    start: new Date(2025, 7, 3, 8, 0),
    end:
     new Date(2025, 7, 3, 9, 0),
  },
  {
    title: 'Dr. Eleanor Pena - Lunch',
    start: new Date(2025, 7, 3, 12, 0),
    end: new Date(2025, 7, 3, 13, 0),
  },
  {
    title: 'Dr. Guy Hawkins - Lunch',
    start: new Date(2025, 7, 3, 13, 45),
    end: new Date(2025, 7, 3, 14, 45),
  },{
    title: 'Dr. Guy Hawkins - Lunch',
    start: new Date(2025, 7, 3, 13, 45),
    end: new Date(2025, 7, 3, 14, 45),
  },{
    title: 'Dr. Guy Hawkins - Lunch',
    start: new Date(2025, 7, 3, 13, 45),
    end: new Date(2025, 7, 3, 14, 45),
  },{
    title: 'Dr. Guy Hawkins - Lunch',
    start: new Date(2025, 7, 3, 13, 45),
    end: new Date(2025, 7, 3, 14, 45),
  },
  {
    title: 'Dr. Guy Hawkins - Lunch',
    start: new Date(2025, 7, 2, 13, 45),
    end: new Date(2025, 7, 2, 14, 45),
  },
];



export const MyCalendar = ()=>{
    const [eventos, setEventos] = useState(null)
    const [fechaActual, setFechaActual] = useState(new Date())

    const eventosHoy = citas.filter(c => c.start.toDateString() === new Date().toDateString())

    return(
        <>
        <div className="d-flex flex-md-row flex-column gap-2">
            <div className="left-panel col-md-4 col-12">
        {eventos ? (
            <>
            <h4>Citas del dia {eventos.fecha.toLocaleDateString()}</h4>
            {eventos.citas.length > 0 ? (
                eventos.citas.map((c, i) => (
                    <div key={i} className="cita-card border ">
                        <div className="d-flex align-items-center mb-2">
                        <span className="circle "></span>
                        <span className="  ms-2 mt-1 hora ">
                            {c.start.toLocaleTimeString([],{
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <strong >{c.title}</strong>
                        <div className="d-flex gap-2">
                        <ButtonIcon icon={<Check size={20} color="#f5a315" />}/>
                        <ButtonIcon icon={<X  size={20}  color="red" />}/>
                        </div>
                        </div>
                    </div>
                ))):
                (
                    <p>No hay citas para este dia</p>
                )}
            </>
        ):(
            <>
            <h4>Hoy tienes {eventosHoy.length} citas</h4>
            {eventosHoy.length > 0 ? (
                eventosHoy.map((c,i)=>(
                    <div key={i} className="cita-card border ">
                       <div className="d-flex align-items-center mb-2">
                       <span className="circle"></span>
                        <span className="ms-2 mt-1 hora ">
                            {c.start.toLocaleTimeString([],{
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                        </div>
                        <div className="d-flex gap-4 ">
                        <strong className="me-4 ">{c.title}</strong>
                        <div className="d-flex ps-4">
                         <ButtonIcon icon={<Check size={20} color="#f5a315" />}/>
                        <ButtonIcon icon={<X  size={20}  color="red" />}/>
                        </div>
                        </div>
                    </div>
                ))
            ):(
                <p>No hay citas para este dia</p>
            )}
            </>
        )}
        </div>

        <div className="col-md-8 col-12 calendar-container">
            <div className="d-flex ">
                <div className="mb-2 ">
                <ButtonIconText icon={<CirclePlus size={30} className='pe-1' color="#f5a315" strokeWidth={1.5} />} text="Agendar" />
                </div>
                <Input type="select" className=" ms-2 mb-2 select-calendar W" value={fechaActual.getMonth()} onChange={(e) => 
                    setFechaActual(new Date(fechaActual.getFullYear(), parseInt(e.target.value)))}>
                    {Array.from({length:12}).map((_, i)=>(
                        <option key={i} value={i}>
                            {new Date(0, i).toLocaleDateString('es', {month: 'short'})}
                        </option>
                    ))}
                </Input>
                <Input type="select" className="ms-2 mb-2 select-calendar " value={fechaActual.getFullYear()} onChange={(e)=>
                    setFechaActual(new Date(parseInt(e.target.value), fechaActual.getMonth()))
                }>
                    {Array.from({length:8}).map((_,i)=>{
                        const year = 2023 + i
                        return(
                            <option  key={i} value={year}>
                                {year}
                            </option>
                        )
                    })}
                </Input>
            </div>
            <Calendar localizer={localizer}
            events={citas}
            startAccessor="start"
            endAccessor="end"
            date={fechaActual}
            components={{event: ({ event }) => (
            <span>
            {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}-
            {event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>)}}
            onNavigate={date => setFechaActual(date)}
            defaultView='month'
            views={['month']}
            style={{ height: 420}} 
            onSelectSlot={(slotInfo)=>{
                const fecha = slotInfo.start
                const citasDia = citas.filter(c => c.start.toDateString() === fecha.toDateString())
                setEventos({
                    fecha: slotInfo.start,
                    citas: citasDia
                })
            }}
            onSelectEvent={(eventos) => {
                const fecha = eventos.start;
                const citasDelDia = citas.filter(
                    (e) => e.start.toDateString() === fecha.toDateString()
                );
                setEventos({ fecha, citas: citasDelDia });
            }}
            onShowMore={(events, date) => {
                const citasDelDia = citas.filter(
                    (e) => e.start.toDateString() === date.toDateString()
                );
                setEventos({ fecha: date, citas: citasDelDia });
            }}
            selectable
            />
        </div>
        </div>
        </>
    )

}