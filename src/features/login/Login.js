import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleRoomChange = (evt) => {
    setName(evt.target.value);
  };

  const login = () => {
    navigate(`/${name}`);
  };

  return (
    <Container>
      <Form onSubmit={login}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleRoomChange} value={name} />
          </Form.Group>
        </Row>
        <Row>
          <Button type="submit" disabled={!name} variant="primary">
            Join
          </Button>
        </Row>
      </Form>
    </Container>
  );
};
export default Login;
