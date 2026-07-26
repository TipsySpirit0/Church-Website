import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App
