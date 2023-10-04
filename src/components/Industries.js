import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
import Ecomm from "./img/E-Commerce.webp";
import Buy from "./img/Buy.webp";
import Specifications from "./img/Product-Specifications-1.webp";
import Search from "./img/Relevance-of-Search.webp";
import Tagging from "./img/Product-Classification-and-Tagging.webp";
import Administration from "./img/Product-Data-Administration.webp";
import videos from "./img/Tagging-of-images-and-videos.webp";
import seo from "./img/Making-SEO.webp";
import Guides from "./img/Guides.webp";
import Generation from "./img/Market-Information.webp";
import Analysis from "./img/Analysis-of-Attitudes.webp";
import Category from "./img/Texts-by-Category-1.webp";
import Glossaries from "./img/Texts-with-Glossaries.webp";
import Competitor from "./img/Online-Competitor.webp";
import Surveys from "./img/Surveys-1.webp";
const Industries = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    setShowContact(true);
    navigate("/contact");
  };
  return (
    <div className="m-top">
      <div className="container-fulid">
        <div className="row product">
          <div className="col-md-6 b-ground  h-0">
            <h2>E-Commerce Services</h2>
            <h5>Your ultimate business-companion</h5>
            <p>
              E-commerce, often known as electronic commerce, is the exchange of
              goods and services and sending of money and data through an
              electronic network, most commonly the internet. The e-commerce
              sector business dealings can be either B2B (business-to-business),
              B2C (business-to-consumer), C2C (consumer-to-consumer), or C2B.
            </p>
            <p>
              Increase your online earnings with new content, SEO, and data
              insights. As website operators, we are constantly faced with the
              challenge of monitoring the market and creating unique content
              with added value for the user on new product pages constantly
              being added. We can create, edit, or research thousands of data
              files in multiple languages for you in record time, thanks to our
              Extended Web AppTech network. Our experts can manage the
              e-commerce industry services very optimally.
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
            <img src={Ecomm} alt=""></img>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="t-center pt-4">
          Services Provided By Our E-Commerce Experts
        </h2>
        <div className="row pt-4">
          <div className="col-md-4 buy">
            <img src={Buy} alt="buy" />
          </div>
          <div className="col-md-8 relevance">
            <div className="row p-1">
              <div className="col-md-1">
                <img src={Specifications} alt="Specifications" />
              </div>
              <div className="col-md-10 ">
                <h4>Product Specifications</h4>
                <p>
                  Our Extended Web AppTech community copywriters create unique,
                  search-engine-optimized product information that contributes
                  to making each of your commodity pages the perfect homepage
                  for both users and engines.
                </p>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-1">
                <img src={Search} alt="Search" />
              </div>
              <div className="col-md-10 ">
                <h4>Relevance of Search</h4>
                <p>
                  Extended Web AppTech tests your website's internal search and
                  evaluates search results to optimize your store's technique
                  and usability.
                </p>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-1">
                <img src={Tagging} alt="Tagging" />
              </div>
              <div className="col-md-10 ">
                <h4>Product Classification and Tagging</h4>
                <p>
                  We provide precise allocation and labeling of each product in
                  your shop assemblage into the relevant product categories
                  using appropriate keywords. Customers can conveniently find
                  what you're looking for in your online store and through
                  search engines this way.
                </p>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-1">
                <img src={Administration} alt="Administration" />
              </div>
              <div className="col-md-10 ">
                <h4>Product Data Administration</h4>
                <p>
                We extract product data from templates such as image files, PDFs,
              and print catalogs to ensure that the product information in your
              online store is always up to date and that your customers have the
              information they need to make a purchasing decision.
                </p>
              </div>
            </div>
            <div className="row p-1">
              <div className="col-md-1">
                <img src={videos} alt="videos" />
              </div>
              <div className="col-md-10">
                <h4>Tagging of images and videos</h4>
                <p>
                Allow Extended Web AppTech to tag your images and videos on the
              web so customers can easily find your content via the internal
              search function and increase visibility in search engines like
              Google and others.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="t-center pt-4">
          Competitors And E-Commerce- The Vast Expansive Field.
        </h2>
        <p className="t-center">
          Competition is fierce in the eCommerce industry; offers are brief and
          transparent to the user. You can gain a competitive advantage while
          remaining visible in search engines and to users. Extended Web AppTech
          can help you provide all the necessary product data and interesting
          descriptions to every potential customer on your website. Furthermore,
          your store’s products and contents are classified and marked according
          to your store taxonomy to optimize your site’s filter and search
          functions. This ensures happy customers and top rankings in search
          engines like Google.
        </p>
        <h2 className="t-center pt-4">
          USPs To Choose E-Commerce Services From Our Firm!
        </h2>
        <div className="row firm pt-4 mb-5">
          <div className="col-md-6">
            <img src={seo} alt="seo" />
            <h4>Making SEO texts of extra value</h4>
            <p>
              Extended Web AppTech increased pertinent and relevant SEO content
              will benefit you in various ways. By conveying specialist skills
              and knowledge, insightful texts about your product categories,
              blog articles, and glossaries can add value. To be rewarded with a
              high search engine ranking, draw attention to your online store
              and appropriate link products.
            </p>
            <img src={Guides} alt="Guides" />
            <p>
              <h4>Guides and how-to manuals</h4>
              Order was interestingly written and useful advisory texts about
              your product and service offerings to provide real added value and
              expertise to your customers, giving them a reason to return to
              your website.
            </p>
            <img src={Generation} alt="Generation" />
            <h4>Market Information Generation</h4>
            <p>
              For years, online commerce has been booming, increasing
              competition for you as a store owner. To be successful in the
              market, you must keep up with the competition and the rapid
              development of eCommerce. Extended Web AppTech assists you in
              keeping track of your competitors and their offers, analyzing the
              market, and gathering consumer data.
            </p>
            <img src={Analysis} alt="Analysis" />
            <h4>Analysis of Attitudes</h4>
            <p>
              Extended Web AppTech can view and analyze text, video, or audio
              content to identify and extract the mood of your customers,
              allowing you to react to potentially negative market developments
              early on.
            </p>
          </div>
          <div className="col-md-6 seo">
            <img src={Category} alt=" Category" />
            <h4>Texts by Category</h4>
            <p>
              Receive category texts/information texts about your products or
              services to create long-lasting content for your website,
              improving your search engine ranking and attracting customers.
            </p>
            <img src={Glossaries} alt="Glossaries" />
            <h4>Texts with Glossaries</h4>
            <p>
              Request that Extended Web AppTech create unique glossary texts
              about the topics and terms you want to include on your website. As
              a result, provide content on your website that is appreciated by
              both search engines and customers, as well as convey your
              expertise.
            </p>
            <img src={Competitor} alt="Competitor" />
            <h4>Online Competitor Analysis</h4>
            <p>
              We conduct online research on all freely available and desired
              data on your competitors, allowing you to monitor them and stay at
              least one step ahead.
            </p>
            <img src={Surveys} alt="Surveys" />
            <h4>Surveys</h4>
            <p>
              Our crowd provides a large, global pool of survey participants to
              complete your surveys and provide feedback on products, ideas, and
              websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
