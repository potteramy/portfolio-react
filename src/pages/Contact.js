import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

export default function Contact() {
  const [ name, setName ] = useState("");
  const [ email, setEmail] = useState('');
  const [ message, setMessage] = useState('');
  const [contact, setContact] = useState([])

  // const submit=(e)=>{
  //   e.preventDefault()
  //   const messageObj = { name: name, email: email, message: message}
  //   // setContact(input)
  //   console.log(messageObj)
  // }
 

  return (
    <div>
      {/* {contact? (
        <div>
          <h3>Your message has been sent</h3>
        </div>
      ) : ( */}
    <div className="App-body">
      <div className="App-contact">
        <Form   target="_blank" action="https://formsubmit.co/potteramylynn@gmail.com" method="POST">
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="name">Name: </Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder="Jon Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address: </Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label htmlFor="message">Message: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="secondary" type="submit" >
              Contact
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
    {/*  )} */}
    </div>
  );
}
