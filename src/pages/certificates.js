import React from "react";
import certificates from "./certificates-list";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function createCard(certificates) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={certificates.image} alt={certificates.alt} />
        <Card.Body>
          <Button style={{ backgroundColor:"#d7caae", borderColor:"#d7caae"}}variant="primary"><a href={certificates.link} target="blank">Go to certificate</a></Button>
        </Card.Body>
      </Card>
    );
  }

  function Certificates () {
    return(
        <div className="container">

        <p>page in process...</p>
            {certificates.map(createCard)}
        </div>
    );
}

export default Certificates;




