import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./layout/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Archive from "./layout/Archive";
import Footer from "./components/Footer/Footer";
import Preloader from './components/Preloader/Preloader';
const Homie = React.lazy(()=>import("./layout/Main"))

function App() {
  return (
    <React.Suspense fallback={<Preloader/>}>
    <Router>
      
      <Navbar />
      <Routes> 
        <Route path="/" element={<Homie />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<Main />}/>
      </Routes>
      <Footer />
    </Router>
   </React.Suspense>
  );
}

export default App;


