import Navbar from "./components/Navbar.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page.jsx";
// import About from "./pages/About.page.jsx";
import Login from "./pages/Login.page.jsx";
import Register from "./pages/Register.page.jsx";
import About from "./pages/About.pgae.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
