import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const SOCKET_SERVER_URL = "http://localhost:5000";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      const incomingMessage = {
        ...data,
        ownedByCurrentUser: data.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };
  return { messages, sendMessage };
};
export default useChat;
