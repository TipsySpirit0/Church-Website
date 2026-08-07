import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Stream from "./pages/Stream";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/stream" element={<Stream />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App
