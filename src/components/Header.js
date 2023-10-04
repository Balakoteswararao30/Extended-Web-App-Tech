import React from 'react';
import path from "./img/cropped-logo.webp";
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
      <div className='container-fuild'></div>
      <div className="container">
        <img src={path} alt="" className='t-start'></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hireExpert">Hire Expert</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/industries">Industries</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutUs">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/career">Career</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
            </li>
          </ul>
          <button className='btn  btn-outline-primary'>Get In Touch</button>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
