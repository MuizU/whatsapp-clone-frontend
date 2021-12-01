import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" />
        <Route exact path="/:roomId" />
      </Routes>
    </Router>
  );
}

export default App;
