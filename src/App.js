import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogTimeline from "./Components/BlogTimeline";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogTimeline />} />
      </Routes>
    </Router>
  );
}

export default App;
