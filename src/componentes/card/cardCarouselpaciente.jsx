import React, { useRef } from "react";
import { CardText, Card, CardBody, CardTitle, Button, Container, CardLink } from "reactstrap";
import { Link } from 'react-router-dom';
import { Check, Eye  } from "lucide-react";
const cardData = [
  { id: 1, title: 'Angel ', text: 'Contenido 1' },
  { id: 2, title: 'Card 2', text: 'Contenido 2' },
  { id: 3, title: 'Card 3', text: 'Contenido 3' },
  { id: 4, title: 'Card 4', text: 'Contenido 4' },
  { id: 5, title: 'Card 5', text: 'Contenido 5' },
  { id: 6, title: 'Card 6', text: 'Contenido 6' }
];


export const CardCarouselPaciente = () => {
  const carouselRef = useRef(null);
//funcion para desplzar el carousel
  const scroll = (direction) => {
    const scrollAmount = 60;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <Container className="d-flex align-items-center ">
      <Button className="button-carousel border-0 me-2" onClick={() => scroll('left')}>←</Button>

      <div className="carousel-container" ref={carouselRef}>
        {cardData.map((card) => (
          <div className="carousel-card" key={card.id}>
            <Card className="h-100 card-carousel border-0 rounded-4 d-flex flex-column">
              <CardBody>
                <CardTitle tag="h5" className="text-font">
                  {card.title}
                </CardTitle>   
                <hr />
                <CardText>
                  <p>{card.text}</p>
                  <p>{card.text}</p>
                  <p>{card.text}</p>
                </CardText>
                <div className="d-flex align-items-center justify-content-center">
                  <CardLink tag={Link} to={'/pacientes'}  className="button-card button-color border" > 
                     <Eye className="pe-1" color="#f5a315" strokeWidth={1} />Historial</CardLink>
                  <CardLink tag={Link} to={'/pacientes'}  className="button-card button-color  border"> 
                    <Check size={24} className="pe-1 " color="#f5a315" strokeWidth={1} />Finalizar
                    
                  </CardLink>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      <Button className="button-carousel border-0 ms-2" onClick={() => scroll('right')}>→</Button>
    </Container>
  );
};
