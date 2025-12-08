import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import About from "./pages/About";
import SelfSchemaTool from "./pages/SelfSchemaTool";
import Technologies from "./pages/Technologies";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/microbial-calculator">Microbial Diversity Calculator</Link>
	      <Link to="/self-schema-tool">Self-Schema Interpreter</Link>
        <Link to="/technologies">Technologies & Methods</Link>
        {/* <Link to="/about">About</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/microbial-calculator" element={<Explorer />} />
	      <Route path="/self-schema-tool" element={<SelfSchemaTool />} />
        <Route path="/technologies" element={<Technologies />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

