import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogTimeline from "./Components/BlogTimeline";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogTimeline />} />
      </Routes>
    </Router>
  );
}

export default App;
