import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import product from "./img/product-banner.webp";
import maker from "./img/ezgif.com-gif-maker.webp";
import apps from "./img/product-1-1.webp";
import water from "./img/water-cane-1.png";
import food from "./img/food-3.png";
import salon from "./img/salon-app-1.webp";
import learning from "./img/lms-1.webp";
import asset from "./img/asset-4.avif";
import design from "./img/Design.webp";
import planning from "./img/Planning.webp";

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
        <div className="devel p-3">
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
            <h1 className="color-w">Understanding The Client's Needs</h1>
            <p className="color-w">
              Understanding the client’s needs is crucial in any development
              services. We work closely with clients to learn about their
              requirements, expectations, and goals to deliver the perfect
              product that meets their business needs.
            </p>
            <p className="color-w">
              By comprehending the client’s needs, we design and develop
              user-friendly, innovative, and relevant products. Our team of
              experts goes the extra mile to ensure that every feature and
              functionality reflect the client’s vision, mission, and values.
            </p>
            <p className="color-w">
              We believe effective communication and collaboration with our
              clients are essential to delivering successful product development
              services. The wide range of services offered by our expert product
              development team includes:
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card p-5 m-5">
          <div className="row">
            <div className="col-4">
              <div className="card car">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner waterapps">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="apps"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={water}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="water"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 t-center p-5">
              <h4>Water Can App</h4>
              <p className="w-100 t-center">
                We offer innovative and efficient Water Can App Development
                Services. With our services, water delivery vendors can easily
                register themselves and promptly deliver water cans as per the
                customer’s order. Our app services make the process of water
                delivery hassle-free and convenient for customers and vendors
                alike.
              </p>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-8 t-center p-5">
              <h4>Food Delivery App</h4>
              <p className="w-100 t-center">
                We provide food delivery app development services that provide
                clients with a white-labelled e-commerce product for customers
                to order and purchase food. With an easy-to-use interface and
                features like real-time tracking, secure payment gateways, and
                order management, our food delivery app development service
                ensures food’s smooth and convenient delivery.
              </p>
            </div>
            <div className="col-4">
              <div className="card car">
                <div
                  id="carouselExampleDark1"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark1"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark1"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner waterapps">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={food}
                        className="d-block w-75 mt-5 mx-auto"
                        alt="apps"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={water}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="water"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4">
              <div className="card car">
                <div
                  id="carouselExampleDark2"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark2"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark2"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark2"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner waterapps">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={salon}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="apps"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={water}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="water"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 t-center p-5">
              <h4>Salon App</h4>
              <p className="w-100 t-center">
                Extended Web AppTech provides Salon App Development Services,
                which are tailored to the specific needs of salons and beauty
                professionals. With features like appointment scheduling, online
                booking, and payment processing, our Salon app services can help
                streamline and automate salon operations.
              </p>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-8 t-center p-5">
              <h4>Learning Management System</h4>
              <p className="w-100 t-center">
                Our team of tech geeks with extensive knowledge in the Learning
                Management System enable organizations, from small-scale to
                large-scale, to create and deliver eLearning courses. Our LMS
                includes features like course creation, progress tracking, and
                reporting, making it easy to manage training programs and track
                employee development.
              </p>
            </div>
            <div className="col-4">
              <div className="card car">
                <div
                  id="carouselExampleDark3"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark3"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark3"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark3"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner waterapps">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={learning}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="apps"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={water}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="water"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-4">
            <div className="col-4">
              <div className="card car">
                <div
                  id="carouselExampleDark4"
                  className="carousel carousel-dark slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark4"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark4"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark4"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner waterapps">
                    <div
                      className="carousel-item active"
                      data-bs-interval="10000"
                    >
                      <img
                        src={asset}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="apps"
                      />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                      <img
                        src={water}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="water"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={apps}
                        className="d-block w-50 mt-5 mx-auto"
                        alt="app"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 t-center p-5">
              <h4>Asset Management System</h4>
              <p className="w-100 t-center">
                Get better tracking and management of your assets with our Asset
                Management System Services that help your company track and
                manage its physical assets efficiently. Our Asset management
                system includes features like asset tracking, maintenance
                scheduling, and reporting, allowing businesses to make
                data-driven decisions to maximise the value of their assets.
              </p>
            </div>
          </div>
        </div>
        <h1 className="w-75 ml-100 t-center">
          Product Development Services- Extended Web AppTech
        </h1>
        <p className="t-center">
          The product Development Process is a step-by-step approach used to
          develop new products from ideation to market launch. Our process
          ensures that the end product is customer-centric, feasible, and
          profitable. The product development process at Extended Web AppTech
          includes the following:
        </p>
        <div className="row p-3 research">
          <div className="col-md-4 ">
            <img src={planning} alt="design" className="h-40" />
          </div>
          <div className="col-md-8 p-4">
            <h5>Ideation And Conceptualization</h5>
            <p>
              Our team collaborates with clients to brainstorm and generate
              fresh ideas for product development. By aligning these ideas with
              their business goals and target market needs, we ensure that each
              product concept is practical, innovative, and meets end-users
              needs.
            </p>
          </div>
        </div>
        <div className="row p-3 research">
          <div className="col-md-8 p-4">
            <h5>Market Research And Analysis</h5>
            <p>
              We conduct in-depth market research and competitive analysis to
              understand the current market landscape. This allows us to
              identify areas of opportunity for our client’s products and ensure
              they have a unique selling proposition.
            </p>
          </div>
          <div className="col-md-4 research">
            <img src={design} alt="design" className="h-40" />
          </div>
        </div>
        <div className="row p-3 research">
          <div className="col-md-4 ">
            <img src={planning} alt="design" className="h-40" />
          </div>
          <div className="col-md-8 p-4">
            <h5>Requirements Gathering And Planning</h5>
            <p>
              Working with clients, we define their products’ functional and
              technical requirements. We create a project plan for development,
              ensuring the product is on track to meet its business goals.
            </p>
          </div>
        </div>
        <div className="row p-3 research">
          <div className="col-md-8 p-4">
            <h5>Prototyping And Testing</h5>
            <p>
              Our team develops functional prototypes and conducts user testing
              to validate our assumptions. This process ensures that the product
              meets the needs and expectations of end-users, creating a seamless
              user experience.
            </p>
          </div>
          <div className="col-md-4 research">
            <img src={design} alt="design" className="h-40" />
          </div>
        </div>
        <div className="row p-3 research">
          <div className="col-md-4 ">
            <img src={planning} alt="design" className="h-40" />
          </div>
          <div className="col-md-8 p-4">
            <h5>Development And Deployment</h5>
            <p>
              We use agile development methodologies to build and deploy the
              product. This ensures that the product is developed with quality,
              scalability, and security, creating a sustainable and long-lasting
              solution.
            </p>
          </div>
        </div>
        <div className="row p-3 research">
          <div className="col-md-8 p-4">
            <h5>Continuous Improvement And Maintenance</h5>
            <p>
              Our team provides ongoing support and maintenance for the product,
              monitoring user feedback and analytics data to identify
              opportunities for improvement and optimization. This process
              ensures that the product continues to evolve and meet end-users
              needs over time.
            </p>
          </div>
          <div className="col-md-4">
            <img src={design} alt="design" className="h-40" />
          </div>
        </div>
        <div className="t-center">
          <h2>Hire Our Developers From Extended Web AppTech</h2>
          <p className="t-center">
            Our product developers from Extended Web AppTech are the best in the
            business. With years of experience, they have the knowledge and
            expertise to deliver innovative, user-friendly products that meet
            your business needs. We use the latest technologies and development
            methodologies to ensure that your product is scalable, secure, and
            efficient.
          </p>
          <p className="t-center">
            Our developers are passionate about their work and go the extra mile
            to deliver products that exceed your expectations. Whether you need
            a custom software solution, a mobile app, or a web application, our
            product developers can help you achieve your goals. Contact us today
            to learn more about how we can help you grow your business.
          </p>
          <button className="btn btn-primary m-3" onClick={handleGetStartedClick}>
            Contact Us <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
