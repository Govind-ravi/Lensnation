import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Spotlight from "./components/Spotlight";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function AppContent() {
  const location = useLocation();

  // Define routes where Navbar and Footer should not appear
  const noLayoutRoutes = ["/spotlight"];

  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {shouldShowLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
