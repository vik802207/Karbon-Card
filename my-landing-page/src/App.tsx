import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./Contact"
import Landingpage from "./LandingPage";

const App = () => {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>
  );
};

export default App;
