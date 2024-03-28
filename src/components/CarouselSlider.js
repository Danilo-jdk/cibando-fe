import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const CarouselSlider = () => {
    const imagesCarousel = [
        {
          id: 1,
          image: './assets/images/imageBg-1.jpg',
          label: 'Spaghetti al sugo'
        },
        {
          id: 2,
          image: './assets/images/imageBg-2.jpg',
          label: 'Tagliata di Manzo'
        },
        {
          id: 3,
          image: './assets/images/imageBg-3.jpg',
          label: 'Tiramisù classico'
        }
      ]
    return (
        <Carousel>
        { imagesCarousel.map((item, index) => (
           <Carousel.Item key={index}>
             <img className="d-block w-100" src={item.image} alt={item.label} />
             <Carousel.Caption>
               <h3>{item.label}</h3>
             </Carousel.Caption>
         </Carousel.Item>
        ))}
       </Carousel>
    )
}

export default CarouselSlider;