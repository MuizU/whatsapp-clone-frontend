import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const handleRoomChange = (evt) => {
    setRoomId(evt.target.value);
  };

  const login = () => {
    navigate(`/${roomId}`);
  };

  return (
    <Container>
      <Form onSubmit={login}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Room Id</Form.Label>
            <Form.Control onChange={handleRoomChange} value={roomId} />
          </Form.Group>
        </Row>
        <Row>
          <Button type="submit" disabled={!roomId} variant="primary">
            Join
          </Button>
        </Row>
      </Form>
    </Container>
  );
};
export default Login;
