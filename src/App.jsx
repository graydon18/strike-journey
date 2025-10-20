import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import Tournaments from "./pages/Tournaments";
import OpenBowl from "./pages/OpenBowl";
import Stats from "./pages/Stats";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/open-bowling" element={<OpenBowl />} />
        <Route path="/statistics" element={<Stats />} />
      </Routes>
    </Router>
  )
}

export default App
