import { useState } from "react";
import useChat from "./useChat";
import { Container, Badge, Row, Col, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { name } = useParams();
  const { messages, sendMessage } = useChat(name);
  const [newMessage, setNewMessage] = useState("");

  const handleMessage = (evt) => {
    setNewMessage(evt.target.value);
  };
  const submitMessage = () => {
    sendMessage({ messageBody: newMessage, name });
    setNewMessage("");
  };

  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          <h1>{name}&#39;s Chat</h1>
        </Col>
      </Row>
      <Row>
        {messages.map((msg, i) => (
          <>
            {!msg.ownedByCurrentUser ? (
              <Col sm="4" className="mb-1 mt-1">
                <strong>{msg.name}</strong>
                <br />
                <Badge pill bg={"dark"} key={i}>
                  {msg.body}
                </Badge>
                <br />
                {msg.date}
              </Col>
            ) : (
              <Col sm="4" />
            )}
            <Col sm="4" />
            {!!msg.ownedByCurrentUser ? (
              <Col sm="4" className="mb-1 mt-1">
                <Badge pill bg={"primary"} key={i}>
                  {msg.body}
                </Badge>
                <br />
                {msg.date}
              </Col>
            ) : (
              <Col sm="4" />
            )}
          </>
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
            <Button
              disabled={!newMessage}
              onClick={submitMessage}
              variant="primary"
            >
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
