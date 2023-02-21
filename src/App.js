import "./App.css";
import { Home } from "./pages/Home";
import { Layout } from "./layout";
import {  BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
