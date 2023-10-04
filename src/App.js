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
import Industries from "./components/Industries";
import { AboutUs } from "./components/AboutUs";
import { Career } from "./components/Career";
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
          <Route path="/industries" element={<Industries/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/career" element={<Career/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
