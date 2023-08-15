import "./App.css";
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home";
import { Team } from "./pages/Team";
import { Projects } from "./pages/Projects";

import { Layout } from "./layout";
import {  HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
