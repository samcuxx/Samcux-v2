import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./layout/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Archive from "./layout/Archive";
import RubberBand from "./components/RuberBand/RubberBand";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
