import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [roomId, setRoomId] = useState("");

  const handleRoomChange = (evt) => {
    setRoomId(evt.target.value);
  };

  const login = () => {
    history.push(`/${roomId}`);
  };

  return (
    <Container>
      <Form onSubmit={login}>
        <Row>
          <Form.Group as={Col}>
            <Form.Label>Room</Form.Label>
            <Form.Control onChange={handleRoomChange} value={roomId} />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary">Join</Button>
        </Row>
      </Form>
    </Container>
  );
};
export default Login;
