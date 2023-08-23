import React, { useState }  from "react";
import path from "./img/banner-1.webp";
import pat from "./img/Software.webp";
import Experience from "./img/Experience.jpg";
import android from "./img/android-development.avif";
import ios from "./img/ios-development.webp";
import api from "./img/api-development.avif";
import seo from "./img/seo-developer.webp";
import react from "./img/react.webp";
import wearable from "./img/wearable.webp";
import wordpress from "./img/wordpress.webp";
import cross from "./img/cross.avif";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";

const Services = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate(); 

  const handleGetStartedClick = () => {
    setShowContact(true);
    navigate("/contact");
  };
  return (
    <div>
      <div className="m-top"></div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 b-ground">
            <h1 className="pt">
              From Napkin Sketches To Fully Developed Spec Sheets.
            </h1>
            <h3 className="p">
              Extended Web AppTech Is Able To Meet Your Needs For Web & Mobile
              Design, Development, And Strategy.
            </h3>
            <button className="btn btn-outline-primary mt-5" onClick={handleGetStartedClick}>
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
            {showContact && <Contact />}
          </div>
          <div className="col-md-6 b-ground">
            <img src={path} alt=""></img>
          </div>
        </div>
      </div>
      <h1 className="t-center pt-5 ">Services Offered</h1>
      <h3 className="t-center">
        We Ensure Supreme Assistance To Our Clients!!!
      </h3>
      <div className="container">
        <div className="row">
          <p>
            Extended Web App Tech focuses on quality delivery, innovation, and
            flexibility which are critical factors to the engaging target market
            of our clients. Our clients are our top priority; we deep dive into
            the business requirements they come up with. Analysis and estimation
            of the requirements are unceasing to reward with a profitable
            product. We are determined and committed to swotting ourselves into
            trendy technologies to meet our clients. The current market prefers
            reliable, robust, and efficiently built mobile applications. When
            you opt for our service, our developers, analysts, and the entire
            team will surpass the result. Our deemed clients opted services are
            below:
          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src={pat} alt="" className="w-90"></img>
          </div>
          <div className="col-md-8 pt-5">
            <h3>Software Development And Analysis Of Business Requirements</h3>
            <p>
              Our determination daily drives us to incorporate demanded
              technologies in the market, and the digital approach is the easy
              way to conspire; our professionals have always focused on good
              hands-on experience in the software development, which plays a
              vital role in clients business expansion. We utilise the advances
              in technology and digital processes to the fullest, and as per our
              analysis, we figure out suitable technology for you.
            </p>
            <p>
              A software product's major concern is data security. We are
              bending our efforts to earn our clients trust to create secure
              software. Their long-lasting relationship with us encourages us to
              appraise them with expert advice, customer support and technology
              suitable to their business.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 pt-5">
            <h3>Experience</h3>
            <p>
              The world we live in today is predominately changing with the
              advancement of digital and technology, which is convinced with
              Authentic information, so we have come up with solutions that
              speak for ourselves. Our application development services make
              great deals in this rush-paced world, mainly to market and serve
              the business.
            </p>
            <p>
              Games, location tracking/GPS, social media, and business are hot
              areas we deal with.
            </p>
            <p>
              We believe in teamwork, designers, developers, and testers work
              closely with the client from the abstraction of ideas to the final
              launch of the mobile application.
            </p>
          </div>
          <div className="col-md-4">
            <img src={Experience} alt="" className="w-75"></img>
          </div>
        </div>
        <h1 className="t-center">Who Are We?</h1>
        <div className="row">
          <p>
            We have a well-established technological firm that goes the extra
            mile to meet clients' necessities, mainly in strategy, consultation,
            digital technology and operation sectors. Our exposure is more than
            40 industries, Core business functions and support functions
            activities have made us full-fledged with the challenges and
            hands-on experience we got to deal with.
          </p>
        </div>
        <div className="row developer">
          <div className="col-md-4">
            <img src={android} alt="" className="w-100"></img>
            <h3>Android Development</h3>
            <p>
              Nobody does it better than Extended Web AppTech in Android
              development. We have broadened our services across crucial
              platforms and have a portfolio of more than 700 successful
              applications, 100+ Android application solutions, and more than
              1000 brands. These platforms allow us to interact with clients
              from various sectors, and we have added more than $2 billion in
              value for our clients. We are your go-to resource for Android
              application development.
            </p>
          </div>
          <div className="col-md-4">
            <img src={ios} alt="" className="w-100"></img>
            <h3>IOS Development</h3>
            <p>
              You are at the right place if you're looking for a reputable
              service provider for IOS development. This is due to our expertise
              in working with more than 1000 businesses, our 700+ top-rated
              applications, and our 100+ mission-critical mobile solutions.
              Extended Web AppTech has worked with clients that came to us with
              demands from various platforms and sectors. In the long run, we
              are happy to have given our clients a total value of over $2
              billion.
            </p>
          </div>
          <div className="col-md-4">
            <img src={api} alt="" className="w-100"></img>
            <h3>API Development</h3>
            <p>
              Our qualified experts have the necessary technological know-how
              advantageous in the API development industry. We are experts at
              designing, creating, and developing API functionality. We use
              NodeJS, PHP,.NET, MongoDB, and MySQL to get the finest results.
            </p>
          </div>
        </div>
        <div className="row developer">
          <div className="col-md-4">
            <img src={seo} alt="" className="w-100"></img>
            <h3>SEO</h3>
            <p>
              Nobody knows the age of digital marketing and website creation
              better than we do because we are experiencing it. All effective
              website content is driven by SEO since it affects how often Google
              will select your website for inclusion on the first page of
              results. Thanks to our expertise, professionalism, and talents, we
              can help you rank your website highly, utilizing the most
              fantastic SEO techniques.
            </p>
          </div>
          <div className="col-md-4">
            <img src={react} alt="" className="w-100"></img>
            <h3>React Native Development</h3>
            <p>
              React Native will dominate the creation of mobile applications in
              the future. We create native mobile applications utilizing
              JavaScript and React while developing mobile software. Our
              programmers are skilled in using JavaScript technology and can
              provide you with native apps for Android and iOS mobile devices.
              The consumer may easily browse the product and appreciate its
              high-caliber performance and visual appeal.
            </p>
          </div>
          <div className="col-md-4">
            <img src={wearable} alt="" className="w-100"></img>
            <h3>Web Development</h3>
            <p>
              You need experts in the field if you want a fully working website
              that accurately represents your company while being simple to use
              and navigate. Our HTML5 app development team is at the forefront
              of this. They keep creating precisely what you need websites by
              using the information, expertise, and tools they are accumulating.
            </p>
          </div>
        </div>
        <div className="row developer">
          <div className="col-md-4">
            <img src={wordpress} alt="" className="w-100"></img>
            <h3>WordPress</h3>
            <p>
              Own a WordPress page yourself? Our experts can help you create CMS
              and eCommerce websites, so take advantage of it. Additionally, we
              can turn your blog or WordPress website into a combined native app
              and mobile site for Android and iPhone. With our WooCommerce and
              BuddyPress integrations, it will be simple for all company owners
              to do a follow-up.
            </p>
          </div>
          <div className="col-md-4">
            <img src={wearable} alt="" className="w-100"></img>
            <h3>Wearable Technology</h3>
            <p>
              Our wearables are successful at optimizing cost efficiency and
              doubling productivity benefits in the workplace. Our
              customer-facing wearables, which work across all businesses and
              sectors, elevate your business process. Additionally, we design
              solutions that access additional hardware, integrate with smart
              clothing, produce sensors with a broader range to increase the
              power of your mobility, and construct essential apps for
              wearables. You advance your company to the next level in this way.
            </p>
          </div>
          <div className="col-md-4">
            <img src={cross} alt="" className="w-100"></img>
            <h3>Cross-Platform Creation</h3>
            <p>
              You need experts in the field if you want a fully working website
              that accurately represents your company while being simple to use
              and navigate. Our HTML5 app development team is at the forefront
              of this. They keep creating exactly what you need websites by
              using the information, expertise, and tools they are accumulating.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
