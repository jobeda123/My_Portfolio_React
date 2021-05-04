import React from 'react';
import emailjs from 'emailjs-com';
import { Button, Col, Form } from 'react-bootstrap';

const Email = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_d6raujv', 'template_vmtwy8x', e.target, 'user_Kle8a7RCI8vzPJxFa43vi')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
          e.target.reset();
      }

    return (
        <div style={{padding:"0px 150px"}} className="col-md-6 pt-4">
            {/* <h5>If You Have Other Request Or Question, Don’t Hesitate To Use The Form</h5> */}
            <h3 style={{color:"#2596be" }}>Contact Form</h3>
            <Form onSubmit={sendEmail}>
                <Form.Row>
                    <Form.Group className="my-4" as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Name" name="name" />
                    </Form.Group>

                    <Form.Group className="mb-4" as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email" name="email" />
                    </Form.Group>

                    <Form.Group className="pb-4" as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Subject"  name="subject"/>
                    </Form.Group>

                    <Form.Group className="pb-4" controlId="formGridEmail">
                        <Form.Control as="textarea" rows={3} placeholder="Message" name="message" />
                    </Form.Group>

                </Form.Row>

                <Button className="buttonMainContact mb-4" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Email;