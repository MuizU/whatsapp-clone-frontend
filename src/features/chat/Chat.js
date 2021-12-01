import { useState } from "react";
import useChat from "./useChat";
import { Container, Badge, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");

  const handleMessage = (evt) => {
    setNewMessage(evt.target.value);
  };
  const submitMessage = () => {
    console.log("HITT");
    sendMessage(newMessage);
    // setNewMessage("");
  };

  return (
    <Container>
      <Row>
        <Col sm="12">
          <h1>Room {roomId}</h1>
        </Col>
      </Row>
      <Row>
        {messages.map((msg, i) => (
          <Badge
            pill
            bg={!!msg.ownedByCurrentUser ? "primary" : "dark"}
            key={i}
          >
            {msg.body}
          </Badge>
        ))}
      </Row>
      <Form>
        <Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Send a message"
              onChange={handleMessage}
              value={newMessage}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col sm="4" />
          <Col sm="4">
            <Button onClick={submitMessage} variant="primary">
              Send Message
            </Button>
          </Col>
          <Col sm="4" />
        </Row>
      </Form>
    </Container>
  );
};
export default Chat;
