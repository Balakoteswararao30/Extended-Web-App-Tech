import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import product from "./img/product-banner.webp";
import maker from "./img/ezgif.com-gif-maker.webp";

export const Products = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setShowContact(true);
    navigate("/contact");
  };
  return (
    <div>
      <div className="m-top"></div>
      <div className="container-fulid">
        <div className="row product">
          <div className="col-md-6 b-ground  h-0">
            <h1>Product Development Services - Extended Web AppTech</h1>
            <p>
              Extended Web AppTech offers product development services that can
              take your business to the next level. Our team of experts has the
              skills and knowledge necessary to create innovative and functional
              products that will enhance your business's offerings and boost
              your revenue. From concept to launch, we work closely with our
              clients to ensure that each product is tailored to their specific
              needs and meets their business objectives.
            </p>
            <p>
              With our product development services, you can be confident that
              you're getting the best possible solution for your business. Let
              Extended Web Apptech help you bring your vision to life and take
              your business to the next growth phase.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={handleGetStartedClick}
            >
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
            {showContact && <Contact />}
          </div>
          <div className="col-md-6 b-ground h-0">
            <img src={product} alt=""></img>
          </div>
        </div>
        <div className="devel">
          <h1 className="t-center">
            <strong> Product Development Services- Extended Web AppTech</strong>
          </h1>
        </div>
        <div className="row maker">
          <div className="col-md-1"></div>
          <div className="col-md-5 p-5">
            <img src={maker} alt=""></img>
          </div>
          <div className="col-md-5 p-5">
            <h1>Understanding The Client's Needs</h1>
            <p>
              Understanding the client’s needs is crucial in any development
              services. We work closely with clients to learn about their
              requirements, expectations, and goals to deliver the perfect
              product that meets their business needs.
            </p>
            <p>
              By comprehending the client’s needs, we design and develop
              user-friendly, innovative, and relevant products. Our team of
              experts goes the extra mile to ensure that every feature and
              functionality reflect the client’s vision, mission, and values.
            </p>
            <p>
              We believe effective communication and collaboration with our
              clients are essential to delivering successful product development
              services. The wide range of services offered by our expert product
              development team includes:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
