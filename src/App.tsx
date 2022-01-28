import { Routes, Route, Link } from "react-router-dom";
import { Form, Home } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
