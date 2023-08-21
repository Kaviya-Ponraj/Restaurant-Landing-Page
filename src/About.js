import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <Container className='mt-5'>
        <Row>
            <Col>
                <img src={require('./assets/Pic3.jpeg')} width={'100%'} alt='food' className='rounded-5'/>
            </Col>
            <Col>
                <h3 className='h1 p-2'>Today's special</h3>
                <p className='text-muted p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa modi, delectus deserunt aliquid quibusdam sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, labore corrupti? A sunt ipsum consequatur eius optio pariatur eligendi neque, inventore provident hic animi culpa porro quae aperiam expedita repellat.</p>
                <button className='btn btn-danger ms-3'>Order Now!</button>
            </Col>
        </Row>
    </Container>
  )
}

export default About