import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="App-body">
      <div className="App-contact">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Jon Doe"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address: </Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              value={props.message}
              onChange={(e) => props.setMessage(e.target.value)}
            />
            <Button variant="secondary" onClick={props.submit}>
              Contact
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
