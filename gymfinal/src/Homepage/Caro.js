
import React from 'react';
import {Carousel,Image} from 'react-bootstrap';
import  carousel1  from '../images/carousel-1.jpg';
import carousel2 from '../images/carousel-2.jpg'
//import carousel3 from '../images/feature-1.jpg';


function Caro() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={carousel1} alt='caro1'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={carousel2} alt='caro2' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Caro;