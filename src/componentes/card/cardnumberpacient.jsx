import React from "react";
import { CardText, Card, CardBody, CardTitle} from "reactstrap";

export const CardNumberPaciente = ({title, text, icon}) => {
    return (
        <Card className="w-100 card-container rounded-4 border-0 ">
            <CardBody  >
                <CardTitle  className="text-font text-center" tag="h5">
                    {title}
                </CardTitle>
                    <CardText className="fw-bold  text-center card-cuerpo pt-2 " >
                        {icon} {text}
                    </CardText>
            </CardBody>
        </Card>
    )
}