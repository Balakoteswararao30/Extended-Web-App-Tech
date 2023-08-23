import React from "react";
import path from "./img/footer_logo.webp";
const Footer = () => {
  return (
    <div>
      <div className="container-fulid">
        <div className="row footer">
          <div className="col-md-4 logo">
            <img src={path} alt=""></img>
            <p>
              <i class="fa-solid fa-location-dot"></i>
              Extended Web AppTech LLP Bansal Pride first floor, Ayyappa Society
              Main Road, SBH Officers Colony, Megha Hills, Sri Sai Nagar,
              Madhapur, Hyderabad - 500081, Telangana
            </p>
            <i class="fa-solid fa-phone"></i>
            <span> For Sales : +91-6304702727</span>
            <br />
            <span> For HR : +91-7757001585</span>
            <br />
            <span> For HR : +91-7702921585</span>
            <br />
            <span> For HR : +91-8977621585</span>
            <br />
            <span> For HR : +91-8977031585</span>
            <br />
            <i class="fa-solid fa-envelope"></i>
            <span> sales@extwebtech.com</span>
            <br />
            <span>info@extwebtech.com</span>
          </div>
          <div className="col-md-4 link">
            <a href="Services">Home</a>
            <br />
            <a href="Services">Services</a>
            <br />
            <a href="HireExpert">Hire Expert</a>
            <br />
            <a href="#">Product</a>
          </div>
          <div className="col-md-4 link">
            <a href="#">Industries</a>
            <br />
            <a href="#">About Us</a>
            <br />
            <a href="#">Career</a>
            <br />
            <a href="#">Blog</a>
          </div>
          <p className="t-center copy">2023 &copy;Copyright | Extended Web AppTech 
            <br/>          
          Designed by Balu</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
