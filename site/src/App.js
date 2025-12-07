import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";
import About from "./pages/About";
import SelfSchemaTool from "./pages/SelfSchemaTool";
import "./styles.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/explorer">Explorer</Link>
	<Link to="/self-schema-tool">Self-Schema Tool</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
	<Route path="/self-schema-tool" element={<SelfSchemaTool />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

