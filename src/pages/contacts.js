import React from 'react';
import ContactForm from '../ContactForm';
 
const Contacts = () => {
  return (
    <div>
    <br />
      <h4><a href='https://www.linkedin.com/'>LinkedIn would be here</a></h4>
      <h4><a href='https://github.com/OlhaKrasnokutska' target='blank'>https://github.com/OlhaKrasnokutska</a></h4>
      <br />
      <h4>Olha.Krasnokutsk@gmail.com</h4>
      <h4>You can write me right here:</h4>
      <ContactForm />
    </div>
  );
};
 
export default Contacts;