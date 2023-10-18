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
import { Blog } from "./components/Blog";
import { Blog2 } from "./components/Blog2";
import { Blog3 } from "./components/Blog3";
import { Blog4 } from "./components/Blog4";
import { Blog5 } from "./components/Blog5";
import { Blog6 } from "./components/Blog6";
import { Home } from "./components/Home";
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hireExpert" element={<HireExpert />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/industries" element={<Industries/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog2" element={<Blog2/>}/>
          <Route path="/blog3" element={<Blog3/>}/>
          <Route path="/blog4" element={<Blog4/>}/>
          <Route path="/blog5" element={<Blog5/>}/>
          <Route path="/blog6" element={<Blog6/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
