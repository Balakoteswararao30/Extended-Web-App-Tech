import React, { useState } from "react";
import home from "./img/home-banner.png";
import About from "./img/about.webp";
import path from "./img/banner-1.webp";
import value1 from "./img/value-1.webp";
import value2 from "./img/value-2.webp";
import value3 from "./img/value-3.webp";
import android from "./img/android-development.avif";
import ios from "./img/ios-development.webp";
import api from "./img/api-development.avif";
import seo from "./img/seo-developer.webp";
import react from "./img/react.webp";
import wearable from "./img/wearable.webp";
import wordpress from "./img/wordpress.webp";
import cross from "./img/cross.avif";
import PRODUCT from "./img/PRODUCT-MARKET-STRATEGY-1.png";
import UX from "./img/UX-DESIGN.png";
import NFP from "./img/NFP-MVP.png";
import DEVELOPMENT from "./img/PRODUCT-DEVELOPMENT.png";
import QA from "./img/QA-TESTING.png";
import SUPPORT from "./img/SUPPORT-MAINTENANCE.png";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
export const Home = () => {
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
              We Offer Modern Solutions For Growing Your Business
            </h1>
            <h5 className="p">
              Our impeccable team is a pillar of the strong foundation that
              solidifies your ideas into concrete concepts that make the digital
              world more accessible.
            </h5>
            <button
              className="btn btn-outline-primary contactbutton mt-4"
              onClick={handleGetStartedClick}
            >
              Click Me <i class="fa-solid fa-arrow-right"></i>
            </button>
            {showContact && <Contact />}
          </div>
          <div className="col-md-6 b-ground">
            <img src={home} alt="" className="w-75 pt-3"></img>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ms-5">
          <div className="col-md-4 pt-5">
            <img src={About} alt="About" className="w-100" />
          </div>
          <div className="col-md-8 pt-5 ps-5">
            <h1>Who We Are</h1>
            <h5 className="w-75">
              Your idea, Our execution is our only mission. The tech-savvy world
              requires experts who turn ideas into reality and ambition into a
              mission; that's where our role-play begins.
            </h5>
            <p className="w-75">
              We help our clients build on their dreams with concrete concepts.
              Extended Web AppTech was established to ensure that individuals
              and firms have reliable solution providers in the web technology
              and digital domain.
            </p>
          </div>
        </div>
        <div className="t-center pb-5">
          <h1>Our Values</h1>
          <h5>
            Strive To Deliver The Catalyst Solutions To Accelerate Your Business
            To The Next Level.
          </h5>
          <h6 className="pt-2">
            Extended Web AppTech's core values are understanding customer
            expectations and being sincere and honest with our customers.
          </h6>
        </div>
        <div className="row value ps-5">
          <div className="col-md-4">
            <img src={value1} alt="value1" />
            <h2>Excellence</h2>
            <p>
              We are passionate about the highest quality standards, always
              promoting meritocracy.
            </p>
          </div>
          <div className="col-md-4">
            <img src={value2} alt="value2" />
            <h2>Pioneering</h2>
            <p>
              We are bold and agile to courageously take up challenges to
              provide innovative solutions to digital world problems.
            </p>
          </div>
          <div className="col-md-4">
            <img src={value3} alt="value3" />
            <h2>Collaborative Mindset</h2>
            <p>
              We will invest in our people and partners, enable continuous
              learning, and build caring and collaborative relationships based
              on trust and mutual respect.
            </p>
          </div>
        </div>
        <h1 className="t-center">Our Services</h1>
        <h5 className="t-center">What Do We Do?</h5>
        <div className="row">
          <p className="ps-10 pb-5">
            We offer services that assist in finding the best solutions for our
            clients regarding strategy, consultancy, digital technology, and
            operations. As a company that develops digital technologies, we have
            formed collaborations with organizations that pursue technical
            innovation as a broad strategy for approaching the digital world and
            how it functions. We have more than enough practical knowledge from
            working in more than 40 different company functions and sectors to
            offer the finest outcomes in the rapidly changing technical and
            digital environment.
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
        <h2 className="t-center">Our Approach To The Projects</h2>
        <div className="row nfp p-5">
          <div className="col-md-4">
            <img src={PRODUCT} alt="PRODUCT" />
            <h5>PRODUCT & MARKET STRATEGY</h5>
            <p>
              With the capability of building ‘Multi-Million Dollar Enterprise,’
              we shape your product reach globally with our expert consulting.
            </p>
          </div>
          <div className="col-md-4">
            <img src={UX} alt="UX" />
            <h5>UI/UX DESIGN</h5>
            <p>
              We create next-generation user-centric UI/UX leading to elevation
              of revenue in your business.
            </p>
          </div>
          <div className="col-md-4">
            <img src={NFP} alt="NFPx" />
            <h5>NFP & MVP</h5>
            <p>
              We give life to your idea, getting it ready to live bold in the
              real world.
            </p>
          </div>
        </div>
        <div className="row nfp p-5">
          <div className="col-md-4">
            <img src={DEVELOPMENT} alt="DEVELOPMENT" />
            <h5>PRODUCT DEVELOPMENT</h5>
            <p>
              Getting the product developed isn’t enough, so get it done in such
              a way that no competitor ever dares to compete with you.
            </p>
          </div>
          <div className="col-md-4">
            <img src={QA} alt="QA" />
            <h5>QA & TESTING</h5>
            <p>
              We fix bugs, and test your product rigorously how it behave in the
              real environment.
            </p>
          </div>
          <div className="col-md-4">
            <img src={SUPPORT} alt="SUPPORT" />
            <h5>SUPPORT & MAINTENANCE</h5>
            <p>
              With all the knowledge of your product, we will take care of it as
              it is ours baby.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
