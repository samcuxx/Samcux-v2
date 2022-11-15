import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./layout/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./layout/Archive";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
