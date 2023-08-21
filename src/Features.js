import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/esm/Container';

const Features = () => {
  return (
    <Container className='mt-5'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Fantastic Staff</Accordion.Header>
        <Accordion.Body>
        Skilled and friendly staff members are one of the biggest signs of a great restaurant. They set the tone for your whole establishment, so be sure you are picky when you hire. Look for friendliness, the ability to be quick on their feet, and the ability to relate to customers in all staff members.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>The Ambience</Accordion.Header>
        <Accordion.Body>
        Successful restaurants spend time and money investing in the perfect atmosphere. Decide on a theme early on and stick with it, taking care to ensure that everything from the decorations to the material used to construct the tables to the music you play suit it.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Cleanliness</Accordion.Header>
        <Accordion.Body>
        No one wants to go to a dirty restaurant, even if the food is fantastic. Be sure to pick materials that are easy to keep clean when building the location. You should also be sure you have enough staff on each shift to keep the place clean. This includes the bathrooms, kitchen, and any lobby area.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Location</Accordion.Header>
        <Accordion.Body>
        Location is incredibly important. Even if you have the best menu in the world, if no one can find you, or no one wants to come to your spot, your business is going to fail. Think about your target audience and determine your location based on where the most foot traffic from that market happens.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Size</Accordion.Header>
        <Accordion.Body>
        When planning the interior layout, be sure you keep guest comfort in mind. Most restaurant-goers do not want to sit elbow-to-elbow with strangers or easily overhear the conversation at the table next to them. Makes sure there is plenty of space between tables; at least enough for one person to walk through.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default Features