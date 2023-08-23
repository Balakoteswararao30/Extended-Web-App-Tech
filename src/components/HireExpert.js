import React, { useState }  from "react";
import Hire1 from "./img/Hire1.webp";
import Hire2 from "./img/Hire2.webp";
import Hire3 from "./img/Hire3.webp";
import Hire4 from "./img/Hire4.webp";
import Hire5 from "./img/Hire5.webp";
import Hire6 from "./img/Hire6.webp";
import Hire7 from "./img/Hire7.webp";
import Hire8 from "./img/Hire8.webp";
import net from "./img/Net.webp";
import php from "./img/PHP.webp";
import reactjs from "./img/ReactJS.png";
import laravel from "./img/Laravel.png";
import html from "./img/HTML.webp";
import node from "./img/NodeJS.webp";
import cake from "./img/CakePHP.webp";
import word from "./img/Word.webp";
import android from "./img/Android.webp";
import ios from "./img/iOS.webp";
import azure from "./img/Azure.webp";
import dot from "./img/DotNet.webp";
import dev from "./img/DevOps.webp";
import vue from "./img/VueJS.png";
import flutter from "./img/Flutter.png";
import magento from "./img/Magento.webp";
import xamarin from "./img/Xamarin.webp";
import joomla from "./img/Joomla.png";
import angular from "./img/Android.webp";
import circle from "./img/circle.webp";
import java from "./img/java.webp";
import yii from "./img/yii.webp";
import expert from "./img/expert.png";
import aws from "./img/aws.webp";
import manual from "./img/manual.webp";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact";
const HireExpert = () => {
    const [showContact, setShowContact] = useState(false);
    const navigate = useNavigate();
  
    const handleGetStartedClick = () => {
      setShowContact(true);
      navigate("/contact");
    };
  return (
    <div>
      <div className="m-top"></div>
      <div className="container-fuild Hire">
        <div className="row Hire">
          <div className="col-md-6 b-ground  h-0">
            <h1>Hire Trusted And Qualified Developers In India</h1>
            <p>
              Extended Web AppTech has developed significantly since its early
              days. We started as a tiny crew, but now we have more than a
              hundred experienced and screened engineers working for us out of
              India.
            </p>
            <p>
              The fact that we've been able to go above and beyond for our
              customers consistently is a big reason why we've been so
              successful. Through the use of state-of-the-art tools and highly
              skilled staff, we are continually exploring new frontiers in the
              realm of web and mobile app creation.
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-check fa-lg"></i>Team with
              experience and expertise
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-check fa-lg"></i>Superior online
              and mobile application development services
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-check fa-lg"></i>Innovative
              technology
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-check fa-lg"></i>Demonstrated
              capacity to meet client expectations
            </p>
            <p>
              <i class="fa-sharp fa-solid fa-check fa-lg"></i>Superior customer
              service
            </p>
            <button className="btn btn-outline-primary" onClick={handleGetStartedClick}>
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
            {showContact && <Contact />}
          </div>
          <div className="col-md-6 b-ground h-0"></div>
        </div>
      </div>
      <h2 className="reason">Reason To Hire Developers In India?</h2>
      <div className="container">
        <div className="row">
          <p>
            Finding bright, skilled, and hard-working IT workers is challenging
            for many businesses, but hiring developers in India is a
            cost-effective alternative. India is an excellent place for
            businesses to outsource their technology projects because of its
            vast talent pool, high technical expertise, strong work ethic, and
            cultural compatibility.
          </p>
        </div>
        <div className="row margin">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>Geographical Time Zone Benefits</h4>
            <p>
              The time zone difference is another perk of working with
              developers in India. Due to the time difference, businesses who
              outsource their development work to India might effectively gain
              an extra working day. With this, they can operate more quickly and
              effectively, which helps shorten project durations.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Great Supply of Potential Employees</h4>
            <p>
              When it comes to the field of information technology, India has a
              reputation for having an abundance of highly qualified experts.
              The country's abundance of engineering schools and IT institutes
              means it regularly turns out significant numbers of highly skilled
              technologists. In this way, businesses may quickly and easily find
              the skilled workers they need for their projects.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Equipped with Exceptional Technical Abilities</h4>
            <p>
              Indian programmers are in high demand worldwide because of their
              superior technical abilities. As such, they are ideally suited to
              various technological endeavors that call for expertise in several
              different programming languages, software development processes,
              and cutting-edge technology.
            </p>
          </div>
        </div>
        <div className="row mr">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>Values in the Workplace</h4>
            <p>
              Developers from India are noted for their hard work ethic and
              professionalism. They have excellent self-control and always
              deliver on time, making them an invaluable asset to any
              organization.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Harmony between Cultures</h4>
            <p>
              With their familiarity with Western culture, developers from India
              are easy to work with for businesses worldwide. They can easily
              adjust to new circumstances, which facilitates teamwork.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Excellent Performance</h4>
            <p>
              Companies worldwide rely on Indian developers because they
              consistently deliver excellent results. Their work is guaranteed
              to be up to par because they stick to rigid quality guidelines and
              conventional industry practices.
            </p>
          </div>
        </div>
        <div className="row mr">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>An Affordable Approach</h4>
            <p>
              Companies often seek to hire developers in India because it is
              more cost-effective for them to do so. India is a desirable
              location for businesses since its cost of living and salaries are
              cheaper than those in other countries.
            </p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-11">
            <h1 className="t-center">
              Hire Developers In India To Work On A Wide Range Of Projects
            </h1>
            <p className="t-center ">
              India is a hotspot for smart and professional software engineers,
              with a diverse spectrum of technical knowledge to satisfy the
              needs of organizations worldwide. Take a look at the list below:
            </p>
          </div>
        </div>
        <div className="row hire">
          <div className="col-md-1"></div>
          <div className="col-md-3 b-b t-center">
            <img src={Hire1} alt=""></img>
            <h4>Hire Web Developers</h4>
            <p>
              Web developers in India are knowledgeable about various web
              technologies such as HTML, CSS, JavaScript, React, Angular, and
              others.
            </p>
          </div>
          <div className="col-md-3 b-b b-l t-center">
            <img src={Hire2} alt=""></img>
            <h4>Hire Mobile App Developer</h4>
            <p>
              Hire competent mobile app developers in India to build unique apps
              for Android or iOS platforms.
            </p>
          </div>
          <div className="col-md-3 b-b b-l t-center">
            <img src={Hire3} alt=""></img>
            <h4>Hire Front-end Developers</h4>
            <p>
              Hire skilled front-end developers capable of creating engaging
              user interfaces and user experiences.
            </p>
          </div>
        </div>
        <div className="row hire">
          <div className="col-md-1"></div>
          <div className="col-md-3 b-b t-center">
            <img src={Hire4} alt=""></img>
            <h4>Hire Web Developers</h4>
            <p>
              Our full-stack developers are knowledgeable about several
              technologies and can work on both client and server-side
              programming.
            </p>
          </div>
          <div className="col-md-3 b-b b-l t-center">
            <img src={Hire5} alt=""></img>
            <h4>Hire an E-Commerce Developer</h4>
            <p>
              Hire eCommerce developers who can construct custom eCommerce
              solutions for your company.
            </p>
          </div>
          <div className="col-md-3 b-b b-l t-center">
            <img src={Hire6} alt=""></img>
            <h4>Hire CMS Developer</h4>
            <p>
              Hire professional CMS developers in India to develop custom CMS
              solutions for your company.
            </p>
          </div>
        </div>
        <div className="row hire">
          <div className="col-md-1"></div>
          <div className="col-md-3  t-center">
            <img src={Hire7} alt=""></img>
            <h4>Hire an API Developer</h4>
            <p>
              Hire API developers in India to construct custom APIs for your
              company's needs.
            </p>
          </div>
          <div className="col-md-3 b-l b-r t-center">
            <img src={Hire8} alt=""></img>
            <h4>Hire a backend Developer</h4>
            <p>
              Hire a backend developer in India to design custom backend
              solutions for your company.
            </p>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-4 mb-2 w-20">
          Hire Developer <i class="fa-solid fa-arrow-right"></i>
        </button>
        <h1 className="t-center">
          Hire Skilled, Comprehensive Programmers In India.
        </h1>
        <p>
          The Indian workforce includes many skilled programmers who can be
          contracted out to work on various technologies. Here is a selection of
          potential solutions.
        </p>
        <div className="row program">
          <div className="col-md-3">
            <img src={net} alt=""></img>
            <span>Hire .Net Developer</span>
          </div>
          <div className="col-md-3">
            <img src={php} alt=""></img>
            <span>Hire PHP Developer</span>
          </div>
          <div className="col-md-3">
            <img src={reactjs} alt=""></img>
            <span>Hire ReactJS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={laravel} alt=""></img>
            <span>Hire Laravel Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={html} alt=""></img>
            <span>Hire HTML/CSS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={node} alt=""></img>
            <span>Hire NodeJS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={cake} alt=""></img>
            <span>Hire CakePHP Developer</span>
          </div>
          <div className="col-md-3">
            <img src={reactjs} alt=""></img>
            <span>Hire React Native Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={word} alt=""></img>
            <span>Hire WordPress Developer</span>
          </div>
          <div className="col-md-3">
            <img src={android} alt=""></img>
            <span>Hire Android Developer</span>
          </div>
          <div className="col-md-3">
            <img src={ios} alt=""></img>
            <span>Hire iOS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={azure} alt=""></img>
            <span>Hire Azure Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={dot} alt=""></img>
            <span>Hire DotNetNuke Developer</span>
          </div>
          <div className="col-md-3">
            <img src={dev} alt=""></img>
            <span>Hire DevOps Developer</span>
          </div>
          <div className="col-md-3">
            <img src={vue} alt=""></img>
            <span>Hire Vue JS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={flutter} alt=""></img>
            <span>Hire Flutter Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={magento} alt=""></img>
            <span>Hire Magento Developer</span>
          </div>
          <div className="col-md-3">
            <img src={xamarin} alt=""></img>
            <span>Hire Xamarin Developer</span>
          </div>
          <div className="col-md-3">
            <img src={joomla} alt=""></img>
            <span>Hire Joomla Developer</span>
          </div>
          <div className="col-md-3">
            <img src={angular} alt=""></img>
            <span>Hire Angular JS Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={circle} alt=""></img>
            <span>Hire Ruby On Rails Developer</span>
          </div>
          <div className="col-md-3">
            <img src={java} alt=""></img>
            <span>Hire Java Backend Developer</span>
          </div>
          <div className="col-md-3">
            <img src={yii} alt=""></img>
            <span>Hire YII Developer</span>
          </div>
          <div className="col-md-3">
            <img src={expert} alt=""></img>
            <span>Hire Expert Web Developer</span>
          </div>
        </div>
        <div className="row program">
          <div className="col-md-3">
            <img src={aws} alt=""></img>
            <span>Hire AWS Developer</span>
          </div>
          <div className="col-md-3">
            <img src={manual} alt=""></img>
            <span>Hire Manual QA Developer</span>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-3 mb-3 w-20">
          Hire Developer <i class="fa-solid fa-arrow-right"></i>
        </button>
        <h1>Why Should You Hire Developers From Extended Web AppTech?</h1>
        <p>
          In web and mobile app development, look no further than Extended Web
          AppTech, based in India and staffed by a highly skilled and creative
          group of professionals. We have built a solid reputation for providing
          first-rate services and innovative solutions by investing in
          cutting-edge technology.
        </p>
        <div className="row mr">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>Experienced and Skilled Team</h4>
            <p>
              Our engineers have considerable experience and expertise in all
              facets of online and mobile app development, from the front end to
              the back end and across the entire stack. They have expertise in
              various programming languages and technologies, guaranteeing that
              we can provide you with the best possible solutions.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Innovative New Methods and Equipment</h4>
            <p>
              To keep ahead of the curve, we invest heavily in research and
              development of cutting-edge technology and tools. As a result, we
              can provide our customers with cutting-edge solutions,
              guaranteeing that your online and mobile applications will always
              be at the forefront of technology.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Dedicated Project Management</h4>
            <p>
              Our project managers are committed to seeing every one of our
              projects through to a successful and timely conclusion. If you
              have any queries or want an update on the status of your project,
              you may reach out to them at any time of the day or night.
            </p>
          </div>
        </div>
        <div className="row mr">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>Affordable Pricing</h4>
            <p>
              Our services are reasonably priced because we at Extended Web
              AppTech think everyone should have access to the high-quality web
              and mobile app development regardless of financial means.
              Therefore, we price our services competitively without sacrificing
              quality.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Proven Track Record</h4>
            <p>
              Our customers trust us because they know they’ll receive
              exceptional service, and we never fail to live up to that
              confidence.
            </p>
          </div>
          <div className="col-md-3 boder t-center">
            <h4>Customizable Solutions</h4>
            <p>
              Our clients have different wants and needs; thus, our programmers
              create tailored solutions. As a result, we provide flexible
              options that can be adjusted to fit any size company.
            </p>
          </div>
        </div>
        <div className="row mr">
          <div className="col-md-1"></div>
          <div className="col-md-3 boder t-center">
            <h4>Ongoing Support and Maintenance</h4>
            <p>
              We won’t just hand over your website or mobile app and vanish.
              After the app has been released, we provide continuous support and
              maintenance to keep it running smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireExpert;