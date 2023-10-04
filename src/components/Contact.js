import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  changeMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  submitHandler = (e) => {
    let alphaexp=/^[a-zA-Z]+$/;
    let emailexp=/^[a-z0-9]+@[a-z]+.[a-z]+$/;
    let numberexp=/^[0-9]+$/;
    e.preventDefault();
    if (this.state.name === "") {
      document.getElementById("namenote").innerHTML = "please enter name";
    }
    else{
      if(this.state.name.match(alphaexp)) {
        document.getElementById("namenote").innerHTML=""
    }
    else{
      document.getElementById("namenote").innerHTML="please enter charater only";
    }
  }
    if(this.state.email===""){
      document.getElementById("emailnote").innerHTML="please enter email id";
    }
    else{
      if(this.state.email.match(emailexp)){
        document.getElementById("emailnote").innerHTML=""
      }
      else{
        document.getElementById("emailnote").innerHTML="please enter valid email id"
      }
    }
    if(this.state.phone===""){
      document.getElementById("numbernote").innerHTML="Please enter mobile number";
    }
    else{
      if(this.state.phone.length===10){
        document.getElementById("numbernote").innerHTML="";
      }
      else{
        document.getElementById("numbernote").innerHTML="phone number length must be 10 digits"
      }
    }
    if(this.state.message===""){
      document.getElementById("messagenote").innerHTML="Please enter message";
    }
    else{
      if(this.state.message.match()){
        document.getElementById("messagenote").innerHTML="";
      }
    }
  };
  render() {
    const { name, email, phone, message } = this.state;
    return (
      <div>
        <div className="m-top"></div>
        <div className="container">
          <h4 className="t-center p-3">Contact us</h4>
          <h1 className="t-center p-1 mb-5">Get In Touch</h1>
          <div className="row contact">
            <div className="col-md-1"></div>
            <div className="col-md-5 address">
              <h4>
                <i className="fa-solid fa-location-dot"></i>Address
              </h4>
              <p>
                Extended Web AppTech LLP , Bansal Pride first floor, Ayyappa
                Society Main Road, SBH Officers Colony, Megha Hills, Sri Sai
                Nagar, Madhapur, Hyderabad - 500081, Telangana
              </p>
              <div className="mb-5 mt-4">
                <h4>
                  <i className="fa-solid fa-phone"></i>Call Us
                </h4>
                <span> For Sales : +91-6304702727</span>
                <br />
                <span> For HR : +91-7757001585</span>
                <br />
              </div>
              <div>
                <h4>
                  <i className="fa-solid fa-envelope"></i>Email Us
                </h4>
                <span> sales@extwebtech.com</span>
                <br />
                <span>info@extwebtech.com</span>
              </div>
              <div className="pt-5 f-book">
              <i className="fa-brands fa-twitter twitter"></i>
              <i className="fa-brands fa-facebook face"></i>
              <i className="fa-brands fa-instagram insta"></i>
              <i className="fa-brands fa-youtube you"></i>
              <i className="fa-brands fa-square-pinterest pint"></i>
              </div>
            </div>
            <div className="col-md-6 contactus">
              <form onSubmit={this.submitHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className="form-control"
                      value={name}
                      onChange={this.changeName}
                    />
                    <div id="namenote" className="errormsg"></div>
                  </div>
                  <div className="col-md-6"></div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Email*"
                      className="form-control"
                      value={email}
                      onChange={this.changeEmail}
                    />
                    <div id="emailnote" className="errormsg"></div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone*"
                      className="form-control"
                      value={phone}
                      onChange={this.changePhone}
                    />
                    <div id="numbernote" className="errormsg"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={this.changeMessage}
                    ></textarea>
                    <div id="messagenote" className="errormsg"></div>
                  </div>
                </div>
              <h6>Select your requirement :</h6>
              <div className="row">
                <div className="col-md-6">
                <ul className="check">
                <li><input type="checkbox"/>
                <label>
                Mobile Development
                </label></li>
                <br/>
                <li>
                <input type="checkbox"/>
                <label>
                Cloud Solutions
                </label>
                </li>
                <br/>
                <li><input type="checkbox"/>
                <label>
                Custom Development
                </label></li>
                <br/>
                <li><input type="checkbox"/>
                <label>
                Hire a Team Development
                </label></li>
                <br/>
                <li><input type="checkbox"/>
                <label>
                Other
                </label></li>
                </ul>
                </div>
                <div className="col-md-6">
                <ul className="check">
                <li><input type="checkbox"/>
                <label>
                Application Development
                </label></li>
                <br/>
                <li>
                <input type="checkbox"/>
                <label>
                Ecommerce Development
                </label>
                <br/>
                </li>
                <li><input type="checkbox"/>
                <label>
                Microsoft Development
                </label></li>
                <br/>
                <li><input type="checkbox"/>
                <label>
                UI/UX Development
                </label></li>
                </ul>
                </div>
              </div>
              <input type="submit" name="submit" className="btn btn-danger"  />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
