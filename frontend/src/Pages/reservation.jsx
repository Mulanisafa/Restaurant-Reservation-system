// src/App.jsx (or wherever routes are defined)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./pages/Reservation"; // Update path if placed elsewhere

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/success" element={<div>Reservation successful!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
