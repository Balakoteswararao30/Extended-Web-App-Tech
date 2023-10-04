import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import origin from "./img/Origins.webp";
import about from "./img/About-Our-Client.webp";
import where from "./img/From-Where-To-Where.webp";
import strategy from "./img/Strategy.webp";
import workculture from "./img/Work-Culture.webp";
export const AboutUs = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setShowContact(true);
    navigate("/contact");
  };
  return (
    <div className="m-top">
      <div className="container-fulid">
        <div className="row product origin">
          <div className="col-md-6 b-ground  h-0">
            <h1>Origins Of Extended Web AppTech</h1>
            <p>
              The beginnings of anything are never easy, and so was Extended Web
              AppTech. It all started on December 1, 2013 – We set out on a
              mission to build a reliable and breakthrough firm in the
              technology industry. And now that we are here and
            </p>
            <p>
              we have grown to be much more because we are serious about what we
              do – it is as simple as that.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={handleGetStartedClick}
            >
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
            {showContact && <Contact />}
          </div>
          <div className="col-md-6 b-ground h-0 ">
            <img src={origin} alt=""></img>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="t-center m-top">Vision Of Extended Web AppTech</h1>
        <p className="t-center">
          Our goal when we first launched in 2013 was to serve all sizes of
          organizations, from startups to small-scale industries to large-scale
          corporations. We started with the fundamentals to get our feet wet in
          the business. Month after month and year after year, we continued to
          expand the range and quality of services we offered.
        </p>
        <div className="row">
          <div className="col-md-6">
            <img src={about} alt="about" />
          </div>
          <div className="col-md-6">
            <h1>About Our Client</h1>
            <p>
              Regarding mobile development, no one does it better than Extended
              Web AppTech. With a portfolio of over 700 successful apps, 100+
              mobile application solutions and over …
            </p>
            <p>
              We have more than 9 plus years of experience in providing services
              from mobile app development to web design to its development.
              Nobody does it better than Extended Web AppTech in mobile
              development. Having developed over 700 successful apps and more
              than 100 mobile application solutions, dealt with over 40 plus
              industries and provided them with A-1 services to the client’s
              requirements. When we set out on a client’s project, we do not
              consider it one of the client’s projects but rather take it more
              personally to give our utmost expertise. This is where we stood
              out.
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-md-6">
            <h1>From Where To Where</h1>
            <p>
              As demand for our services increased, so did the need for our
              staff. We were nothing at first, but now we are here with over a
              hundred employees. We even outgrew our office, using space and
              everything about the company. At Extended Web AppTech, there have
              been a lot of fascinating advances throughout the years. The
              Extended Web AppTech squad is now more proficient and efficient
              than before. With you, our valued clients, we hope to continue
              establishing connections and strengthening our technical
              capabilities that can help beyond your requirements.
            </p>
            <p>
              The Extended Web AppTech growth story isn’t over yet. Where we are
              now is just another phase of the beginnings, and where we want to
              be after 10 years will leave a mark in the technology industry.
            </p>
            <p>
              What we have become now and where we want to see ourselves after
              10 years or so is what we always strive for.
            </p>
          </div>
          <div className="col-md-6 pt-3">
            <img src={where} alt="where" />
          </div>
        </div>
        <h1 className="t-center pt-5">
          Different Industries Or Sectors We Cater To
        </h1>
        <p className="t-center">
          Extended Web AppTech can cover all of your needs, from mobile app
          development to web design to its development. The industries we cater
          to are Ecommerce, health care, Retail, Travel, Taxi Booking, Food
          Delivery, Energy & Utilities, Highway Management, Financial Services,
          and Education.
        </p>
        <p className="t-center">
          Choose Extended Web AppTech for our firm’s services, and we do the
          rest.
        </p>
        <div className="row">
          <div className="col-md-6">
            <img src={strategy} alt="strategy" className="w-75 mb-5" />
          </div>
          <div className="col-md-6 pt-3">
            <h4>Pillars Of Extended Web AppTech</h4>
            <p>
              Extended Web AppTech was founded in December 2013 by Sachin
              Saivilas Basanwar and Smita Saivilas Basanwar. They are the
              founders of the company Extended Web AppTech.
            </p>
            <p>
              Currently, the CEO of Extended Web AppTech is Dhiraj Aknurwar –
              CEO & VP of Sales at Extended Web AppTech.
            </p>
          </div>
        </div>
        <h1 className="t-center">Work Culture At Extended Web AppTech</h1>
        <div className="row pt-4">
          <div className="col-md-6">
            <p>
              Extended Web AppTech’s staff members are satisfied and at ease at
              work. The working atmosphere at Web AppTech is set up in a way
              that is suited for all employees. They will repay the favour by
              providing the business with their best effort – This is what we
              believe at Extended Web AppTech. Extended Web AppTech respects its
              employees with respect because it believes that they are what make
              the business.
            </p>
            <p>
              Employees at all levels benefit from having their voices heard by
              feeling more at ease and liberated at work, which boosts
              productivity. Innovation is made possible by their capacity for
              self-expression and creativity. Therefore, employees are not
              afraid to push the boundaries and go beyond their skill set to
              produce results.
            </p>
          </div>
          <div className="col-md-6">
            <img src={workculture} alt="workculture" />
          </div>
        </div>
        <div className="t-center pb-5 pt-3">
        <h1>Let Us Help You Towards The Growth</h1>
        <h4 className="pt-4">
          We Are Here To Build The Next Big Thing For You
        </h4>
        <button className="btn btn-primary p-2 mt-4" onClick={handleGetStartedClick}>
          Let's Have A Talk
        </button>
        </div>
      </div>
    </div>
  );
};
