import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./exercises/useNavigate/About";
import Home from "./exercises/useNavigate/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;