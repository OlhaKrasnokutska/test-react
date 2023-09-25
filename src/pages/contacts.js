import React from 'react';
import ContactForm from '../ContactForm';
 
const Contacts = () => {
  return (
  <div class="row">
  <div class="column">
  <br /><h2>You are very welcome to visit my pages:</h2><br />
    <div className='contact-form'>
      <h4><a href='https://www.linkedin.com/in/olhakrasnokutska/' target='blank'>linkedin.com/in/olhakrasnokutska</a></h4>
      <h4><a href='https://github.com/OlhaKrasnokutska' target='blank'>https://github.com/OlhaKrasnokutska</a></h4>
      <br />
      <h4>Olha.Krasnokutsk@gmail.com</h4>
      <h4>You can write me right here:</h4>
      <ContactForm />
    </div>
    </div>
    <div class="column">
    <img src="https://i.ibb.co/Hh9yH5j/my-photo.jpg" alt="my-face" className="my-photo" border="0" width="30%" />
    </div>
  </div>
  );
};
 
export default Contacts;