import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import '../styles/HomePageCarousel.css'
import Container from 'react-bootstrap/esm/Container';

function HomepageCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    
    return (
          <Container className='carousel-container'>
            <Carousel className='custom-carousel' activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item className='c-item'>
                <img className='d-block w-100 c-img' alt='first slide' src='https://img.freepik.com/free-vector/professionals-working-office_1262-19871.jpg?w=996&t=st=1711732757~exp=1711733357~hmac=ac43ed3d6901561ac12cdbf0f532b9ce6536639096aa8c6c5988a6d12b9cbcbc'/>
                <Carousel.Caption>
                  <h3 className='custom-purple'>Custom Notes</h3>
                  <p className='custom-purple'>Make notes and customize them to your liking.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='c-item'>
              <img className='d-block w-100 c-img' alt='second slide' src='https://img.freepik.com/free-vector/professionals-working-office_1262-19871.jpg?w=996&t=st=1711732757~exp=1711733357~hmac=ac43ed3d6901561ac12cdbf0f532b9ce6536639096aa8c6c5988a6d12b9cbcbc'/>
                <Carousel.Caption>
                  <h3 className='custom-purple'>List your chores</h3>
                  <p className='custom-purple'>Never forget what you need to do with a todo list</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='c-item'>
              <img className='d-block w-100 c-img' alt='third slide' src='https://img.freepik.com/free-vector/professionals-working-office_1262-19871.jpg?w=996&t=st=1711732757~exp=1711733357~hmac=ac43ed3d6901561ac12cdbf0f532b9ce6536639096aa8c6c5988a6d12b9cbcbc'/>
                <Carousel.Caption>
                  <h3 className='custom-purple'>Time your work</h3>
                  <p className='custom-purple'>
                    Keep focus with a productivity timer
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default HomepageCarousel;