import "./App.css";
import { Home } from "./pages/Home";
import { Layout } from "./layout";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
