import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/login/Login";
import Chat from "./features/chat/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/:name" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
