import React from "react";
import { Table } from "reactstrap";

export const TableComponent = ({ data, headers, renderAction, height}) => {

    return (
        <div className="table-container" style={{height: height}}>
             <div className="mb-1 w-100">
                <input type="text" className="input-search" placeholder="Buscar..."/>
            </div>
        <Table responsive borderless hover className="table-modern" >
            <thead>
                <tr>
                    {headers.map((header, index)=>(
                        <th  key={index}>{header}</th>
                    ))}
                        {renderAction && <th style={{ width: "120px"}} className="text-center">Acciones</th>}

                </tr>
            </thead>
             <tbody>
                    {data.map((item, index)=>(
                        <tr key={index}>
                            {headers.map((header, index)=>(
                                <td key={index}>{item[header]}</td>
                            ))}
                            {renderAction && (
                                <td style={{ width: "100px", whiteSpace: "nowrap" }} className="text-center ">
                                   {renderAction(item, index)}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
        </Table>
        </div>
    )
    
}