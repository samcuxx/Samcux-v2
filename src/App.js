import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./layout/Home/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./layout/Archive/Archive";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
import Preloader from './components/Preloader/Preloader'

function App() {
  return (
    <BrowserRouter>

      {/* <Preloader /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
