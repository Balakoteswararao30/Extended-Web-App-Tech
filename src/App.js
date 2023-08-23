import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header";
import Services from "./components/Services";
import HireExpert from "./components/HireExpert";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Products } from "./components/Products";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/hireExpert" element={<HireExpert />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
