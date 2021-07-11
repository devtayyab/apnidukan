import React from 'react'
import {Carousel }from 'react-bootstrap'
import dress from '../../assets/dress.jpg'
import mobile from '../../assets/mobile.jpg'
import laptop from '../../assets/laptop.jpg'
import house from '../../assets/house.jpg'
import dukan from '../../assets/dukan.jpeg'
import shoes from '../../assets/shoes.jpg'
import './slider.css'
export default function Slider() {
    return (
        <div className="coursel">
    <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block  img"
    
      src={dress}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Ladies Suit</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block  img"
      src={dukan}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Corolla GLI</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block  img"
      src={shoes}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Every Season Shoes </h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block  img"
      src={mobile}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>All kind Mobile</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block  img"
      src={laptop}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>High Class Laptop</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item interval={500}>
    <img
      className="d-block  img"
      src={house}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Buy House</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
