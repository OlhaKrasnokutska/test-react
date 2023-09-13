import React from 'react';
import projects from "../Project-list";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 

function createCard(project) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={project.image} alt={project.alt} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Button style={{ backgroundColor:"#d7caae", borderColor:"#d7caae"}}variant="primary"><a href={project.link} target="blank">Go to project</a></Button>
      </Card.Body>
    </Card>
  );
}

const Home = () => {
  return (
    <div className="container">
            {projects.map(createCard)}
    </div>
  );
};
 
export default Home;