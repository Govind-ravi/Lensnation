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
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Define routes where Navbar and Footer should not appear
  const noLayoutRoutes = ["/spotlight"];

  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Spotlight />} />
          <Route path="/work" element={<Spotlight />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} /> */}
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
