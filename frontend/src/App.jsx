import Navbar from "./components/Navbar.jsx";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page.jsx";
// import About from "./pages/About.page.jsx";
import Login from "./pages/Login.page.jsx";
import Register from "./pages/Register.page.jsx";
function App() {
  const info = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(info));
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={<Register user={user} setUser={setUser} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
