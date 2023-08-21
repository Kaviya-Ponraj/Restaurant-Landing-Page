import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <Carousel className='m-auto'>
    <Carousel.Item>
        <img src={require('./assets/Pic2.webp')} width={'1225rem'} height={'519rem'} alt='food'/>
      {/* <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./assets/Pic5.jpeg')} width={'1225rem'} height={'519rem'} alt='food'/>
      {/* <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./assets/Pic3.jpeg')} width={'1225rem'} height={'519rem'} alt='food'/>
      {/* <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
    </Carousel.Item>
    <Carousel.Item>
    <img src={require('./assets/Pic4.webp')} width={'1225rem'} height={'519rem'} alt='food'/>
      
    </Carousel.Item>
  </Carousel>
  )
}

export default Home