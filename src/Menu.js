import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const Menu = () => {
  return (
    <Container className='mt-5'>
        <Row className='mt-3'>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/Pic4.webp')} />
                <Card.Body>
                <Card.Title>Burger</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Order Now!</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/Pic5.jpeg')} />
                <Card.Body>
                <Card.Title>Noodles</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Order Now!</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./assets/Pic3.jpeg')} />
                <Card.Body>
                <Card.Title>Burger with French Fries</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="danger">Order Now!</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Menu