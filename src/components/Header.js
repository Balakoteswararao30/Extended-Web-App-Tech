import React, { useState } from "react";
import path from "./img/cropped-logo.webp";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
const Navbar = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    setShowContact(true);
    navigate("/contact");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container">
          <img src={path} alt="" className="t-start" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <div className="dropdown">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <div className="dropdown-content">
                  <NavLink to="#">Web Development</NavLink>
                  <NavLink to="#">Full Stack</NavLink>
                  <NavLink to="#">Mobile App</NavLink>
                  <NavLink to="#">E-Commerce</NavLink>
                  <NavLink to="#">Web Design</NavLink>
                  <NavLink to="#">Digital Marketing</NavLink>
                </div>
              </div>
              <div className="dropdown">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/hireExpert">
                    Hire Expert
                  </NavLink>
                  </li>
                  <div className="dropdown-content">
                    <NavLink to="#">Hire Web Developers</NavLink>
                    <NavLink to="#">Hire Mobile Developers</NavLink>
                    <NavLink to="#">Hire Backend Developers</NavLink>
                    <NavLink to="#">Hire Cloud Developers</NavLink>
                    <NavLink to="#">Hire QA</NavLink>
                  </div>
              </div>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <div className="dropdown">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/industries">
                    Industries
                  </NavLink>
                </li>
                <div className="dropdown-content">
                  <NavLink to="#">Transportation</NavLink>
                  <NavLink to="#">Health & Fitness</NavLink>
                  <NavLink to="#">Government & Public Sector</NavLink>
                  <NavLink to="#">Ed-tech</NavLink>
                  <NavLink to="#">Travel</NavLink>
                  <NavLink to="#">Retail</NavLink>
                  <NavLink to="#">E-commerce</NavLink>
                </div>
              </div>
              <div className="dropdown">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/aboutUs">
                    About Us
                  </NavLink>
                </li>
                <div className="dropdown-content">
                  <NavLink to="#">Our Team</NavLink>
                  <NavLink to="#">Portfolio</NavLink>
                  <NavLink to="#">Gallery</NavLink>
                </div>
              </div>
              <li className="nav-item">
                <NavLink className="nav-link" to="/career">
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
            </ul>
            <button
              className="btn  btn-outline-primary"
              onClick={handleGetStartedClick}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
