import React,{ useState} from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const TableComponent = ({ data, headers, renderAction, height, totalitems}) => {
const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = totalitems;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <div className="table-container" style={{height: height}}>
             <div className="d-flex justify-content-between  align-items-center mb-1 w-100">
                <input type="text" className="input-search" placeholder="Buscar..."/> 
                <Pagination className="mt-1 me-3">
                <PaginationItem  disabled={currentPage === 1}>
                    <PaginationLink className="border-0 bg-transparent mt-3 text-dark" previous onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PaginationItem  active={currentPage === i + 1} key={i}>
                        <PaginationLink onClick={() => handlePageChange(i + 1)}
                             className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
                            >
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem  disabled={currentPage === totalPages}>
                    <PaginationLink className="border-0 bg-transparent mt-3 text-dark" next onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
            </Pagination>           
            </div>
        <Table responsive borderless hover className="table-modern" >
            <thead>
                <tr>
                    {headers.map((header, index)=>(
                        <th className="" key={index}>{header}</th>
                    ))}
                        {renderAction && <th style={{ width: "10px"}} className="text-center">Acciones</th>}
                </tr>
            </thead>
             <tbody>
                    {paginatedData.map((item, index)=>(
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