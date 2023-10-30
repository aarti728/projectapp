import React from "react";
import hello1 from "../Asset/Images/hello1.jpg";
import hello3 from "../Asset/Images/hello3.jpg";
import logo2 from "../Asset/Images/logo2.jpg";

import girl3 from "../Asset/Images/girl3.jpg";
import girl4 from "../Asset/Images/girl4.jpg";
import girl5 from "../Asset/Images/girl5.jpg";
import photo from "../Asset/Images/photo.jpg";
import lapi from "../Asset/Images/lapi.jpg";
import lapi1 from "../Asset/Images/lapi1.jpg";
import lapi2 from "../Asset/Images/lapi2.jpg";
import lapi3 from "../Asset/Images/lapi3.jpg";

import net from "../Asset/Images/net-removebg-preview.png"
import mac from "../Asset/Images/mcafee.jpg"
import loom from "../Asset/Images/loom.png"
import sale from "../Asset/Images/salesforce.png"
import live from "../Asset/Images/livechat-removebg-preview.png"
import hub from "../Asset/Images/hu1925l4fa-hubspot-logo-logo-hubspot-general-catalyst-removebg-preview.png"

import "../page.css";
import { Button } from "bootstrap";

export const LandingPage = () => {
  return (
    <div>
      <div className="contain">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand text-success" href="#">
              WebGuard
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pricing
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        100$-200$
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        400$-800$
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                      hjhj
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Resource
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Supports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Partners
                  </a>
                </li>
              </ul>
              <form className="d-flex mx-2" role="search">
                <button className="btn btn-outline-dark mr-2" type="submit">
                  Login
                </button>

                <button className="btn btn-outline-dark" type="submit">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="heading">
          <h1 className="text1 mt-4 " style={{ fontFamily: "Rowdies" }}>
            Say GoodBye To Stress Of Forgotten passwords and The fear Of data
            breaches
          </h1>
          <p
            className="text1 m-3 mb-4"
            style={{ fontFamily: "Agbalumo", fontSize: "20px" }}
          >
            Say goodbye To Stress Of Forgotten passwords and The fear Of data
            breaches. Our password manager is Designed to keep your Digital Life
            Safe and Secure,while simplifying the process Of password
            management.{" "}
          </p>
        </div>
        <div className="btn1 mx-4 mb-4">
                <btn className="btn text-light" style={{borderRadius:"50px",backgroundColor:"green"}}>try WebGuard Now</btn>
                <btn className="btn btn-outline-dark mx-2" style={{borderRadius:"50px"}}>Learn More</btn>
              </div>

        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          {/* <!-- Indicators/dots --> */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>

          {/* <!-- The slideshow/carousel --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={lapi} alt="Los Angeles" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src={lapi1} alt="Chicago" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src={hello1} alt="New York" className="d-block" />
            </div>
            <div className="carousel-item">
              <img src={lapi3} alt="New York" className="d-block" />
            </div>
          </div>

          {/* <!-- Left and right controls/icons --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <h2 style={{ fontFamily: "Rowdies", fontSize: "30px" }}>
          Automate the management of your all passwords with our auto pilot
          feature.
        </h2>
        <p
          className="para text-success"
          style={{ fontFamily: "Agbalumo", fontSize: "20px" }}
        >
          Welcome to our password management platform , where you can put your
          password management on auto pilot. With our auto-pilot features, you
          can effortlessly manage all of your passwords in one place.
        </p>
      </div>
      <div className="main w-75">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="card">
              <h3
                className="hed mt-3"
                style={{ fontFamily: "Rowdies", fontSize: "30px" }}
              >
                Log in and go
              </h3>
              <p className="card-text text-info" style={{ fontFamily: "Agbalumo" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={girl3} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="card">
              <h3
                className="hed mt-3"
                style={{ fontFamily: "Rowdies", fontSize: "30px" }}
              >
                Dark Web monitoring
              </h3>

              <p
                className="card-text text-secondary"
                style={{ fontFamily: "Agbalumo" }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={girl5} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="main w-75">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="card">
              <h3
                className="hed mt-3"
                style={{ fontFamily: "Rowdies", fontSize: "30px" }}
              >
                Two-factor authentication
              </h3>
              <p
                className="card-text text-secondary"
                style={{ fontFamily: "Agbalumo" }}
              >
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={girl5} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="card">
              <h3
                className="hed mt-3"
                style={{ fontFamily: "Rowdies", fontSize: "30px" }}
              >
                PasswordLess Login
              </h3>
              <p className="card-text text-info" style={{ fontFamily: "Agbalumo" }}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <img src={girl3} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <h3 style={{ fontFamily: "Rowdies", fontSize: "30px" }}>
          Automate the management of your all passwords with our auto pilot
          feature.
        </h3>
        <p
          className="para text-success"
          style={{ fontFamily: "pacifico", fontSize: "25px" }}
        >
          Welcome to our password management platform , where you can put your
          password management on auto pilot. With our auto-pilot features, you
          can effortlessly manage all of your passwords in one place.
        </p>
      </div>

      <div className="main2 w-75">
        <div className="row">
          <div className="card" style={{ height: "25pc" }}>
            <h5
              className="card-title mt-3 mb-3"
              style={{ fontFamily: "Rowdies", fontSize: "35px" }}
            >
              The ultimate password protection
            </h5>
            <img src={photo} className="card-img-top1" alt="..." />
          </div>
        </div>
      </div>

      <div className="main w-75">
        <div className="row">
          <div className="col-xl-6 col-md-6">
            <div className="card">
              <h3 className="hed mt-3" style={{ fontFamily: "Rowdies" }}>
                Two-factor authentication
              </h3>
              <img src={girl5} className="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-xl-6 col-md-6 ">
            <div className="card">
              <h3 className="hed mt-3" style={{ fontFamily: "Rowdies" }}>
                PasswordLess Login
              </h3>

              <img src={girl3} className="card-img-top" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3">
        <h3 style={{ fontFamily: "Rowdies", fontSize: "30px" }}>
          Automate the management of your all passwords with our auto pilot
          feature.
        </h3>
        <p className="para text-secondary" style={{ fontFamily: "Agbalumo" }}>
          Welcome to our password management platform , where you can put your
          password management on auto pilot. With our auto-pilot features, you
          can effortlessly manage all of your passwords in one place. Welcome to
          our password management platform , where you can put your password
          management on auto pilot. With our auto-pilot features, you can
          effortlessly manage all of your passwords in one place.
        </p>
      </div>

      <div className="count" style={{ width: "76%" }}>
        <div
          className="want text-left"
          style={{
            border: "2px solid white",
            width: "50%",
            boxShadow: "1px 5px 5px #aaaaaa",
          }}
        >
          <div className="log d-flex">
            <img src={logo2} alt="Logo" className="images m-4" />
            <div className="log1">
              <p className="heading text-secondary mt-2">for individuals</p>
              <h5>Individual Starter Pack</h5>
            </div>
          </div>
          <p className="para m-4 text-verdana text-secondary">
            Paasword Management for one type of device that is easy to use and
            is reliable, secure,and easy to use.
          </p>
          <h2 className="head2 m-4" style={{ fontFamily: "verdana" }}>
            $12 <small className="small text-secondary ">/month</small>
          </h2>
          <button
            className="btn-success btn-lg m-3 "
            style={{ borderRadius: "28px", fontFamily: "verdana" }}
          >
            Get Started{" "}
            <i className="fa fa-arrow-right" style={{ rotate: "-30deg" }}></i>
          </button>
        </div>
        <div className="go text-left">
          <h5 className="include m-4 text-light font-verdana">
            What's included
          </h5>
          <div className="pera d-flex text-light font-verdana ">
            <div>
              <ul className="list">
                <li>Unlimited Passwords</li>
                <li>1 User Account</li>
                <li>Access on 1 Device Type</li>
                <li>Save and Autofill Passwords</li>
                <li>One to One Sharing</li>
              </ul>
            </div>
            <div>
              <ul className="list">
                <li>Unlimited Passwords</li>
                <li>1 User Account</li>
                <li>Access on 1 Device Type</li>
                <li>Save and Autofill Passwords</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="count" style={{ width: "76%" }}>
        <div
          className="want text-left"
          style={{
            border: "2px solid white",
            width: "50%",
            boxShadow: "1px 5px 5px #aaaaaa",
          }}
        >
          <div className="log d-flex">
            <img src={logo2} alt="Logo" className="images m-4" />
            <div className="log1">
              <p className="heading text-secondary mt-2">for EnterPrise</p>
              <h5>EnterPrise Starter Pack</h5>
            </div>
          </div>
          <p className="para m-4 text-verdana text-secondary">
            A full range of business features as well as services cutomized to
            your large business needs
          </p>
          <h2 className="head2 m-4" style={{ fontFamily: "verdana" }}>
            $94<small className="small text-secondary ">/month</small>
          </h2>
          <button
            className="btn-success btn-lg m-3 "
            style={{ borderRadius: "28px", fontFamily: "verdana" }}
          >
            Get Started{" "}
            <i className="fa fa-arrow-right" style={{ rotate: "-30deg" }}></i>
          </button>
        </div>
        <div className="go text-left">
          <h5 className="include m-4 text-light font-verdana">
            What's included
          </h5>
          <div className="pera d-flex text-light font-verdana ">
            <div>
              <ul className="list">
                <li>Unlimited Passwords</li>
                <li>1 User Account</li>
                <li>Access on 1 Device Type</li>
                <li>Save and Autofill Passwords</li>
                <li>One to One Sharing</li>
              </ul>
            </div>
            <div>
              <ul className="list">
                <li>Unlimited Passwords</li>
                <li>1 User Account</li>
                <li>Access on 1 Device Type</li>
                <li>Save and Autofill Passwords</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="box text-light">
        <button className="btn-lg">
          See More Pricing{" "}
          <i className="fa fa-arrow-right" style={{ rotate: "-30deg" }}></i>
        </button>

        <h4 className="box1 p-4">Get To Know About All Product's pricing</h4>
        <p className="box2 pl-4">
          Our platform offers a range of subscription plans that are tailored
        </p>
        <p className="box2 pl-4 pb-4">
          {" "}
          to your unique requirements,allowing you to find the perfect fit for
          you
        </p>
      </div>
      <div className="most container-fluid mt-5">
        <h3
          style={{
            fontFamily: "Rowdies",
            fontSize: "30px",
            textAlign: "left pr-2",
          }}
        >
          Be a part of the satisfied WebGuard user today and hear
        </h3>
        <h3
          style={{
            fontFamily: "Rowdies",
            fontSize: "30px",
            textAlign: "left pr-2  ",
          }}
        >
          firsthand what our customers are saying about us!
        </h3>
        <p className="para text-secondary " style={{ fontFamily: "inherit " }}>
          Welcome to our password management platform , where you can put your
          password management on auto pilot. With our auto-pilot features, you
          can effortlessly manage all of your passwords in one place. Welcome to
          our password management platform , where you can put your password
          management on auto pilot. With our auto-pilot features, you can
          effortlessly manage all of your passwords in one place.
        </p>
      </div>

      <div className="card mb-3 mt-5" style={{ width: "76%", margin: "0px auto" }}>
        <div className="card-body ">
          <p className="card-text fs-3">
            This passwordmanager is hand down the best on the market it easy to
            use affordable and has saved me from the headache of managing my
            passwordon my own
          </p>
          <hr></hr>
          <div className="log d-flex">
            <img
              src={girl3}
              alt="...."
              className="im"
              style={{ borderRadius: "150pc", width: "80px", height: "80px" }}
            />

            <div className="log1">
              <p className="heading text-secondary mt-2 mr-3">
                for individuals
              </p>
              <h5>Individual Starter Pack</h5>
            </div>
          </div>
        </div>
      </div>

<div className="row" style={{width:"76%",margin:"0px auto"}}>
  <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src={loom}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src={live}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={hub}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src={sale}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={net}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src={mac}
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>

      <div className="card mb-3 mt-4 " style={{ width: "76%", margin: "0px auto",backgroundColor:"green" }}>
        <div className="row no-gutters p-5">
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                Exeprience a sence of clam and security no matter where you are
                with WebGuard
              </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.This is a wider card with supporting text below as a
                natural lead-in to additional content. This content is a little
                bit longer.
              </p>
              <div className="btn1 text-left mx-4">
                <btn className="btn bg-light" style={{borderRadius:"50px"}}>try WebGuard Now</btn>
                <btn className="btn btn-outline-light mx-2" style={{borderRadius:"50px"}}>Learn More</btn>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={photo}
              className="card-img"
              alt="..."
              style={{ borderRadius: "none" }}
            />
          </div>
        </div>
      </div>

      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-github"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>

          <section className="Footer" style={{textDecoration:"none"}}>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Products</h5>

                <ul className="list-unstyled mb-0" style={{textDecoration:"none"}}>
                  <li>
                    <a href="#!" className="text-white">
                      Communication
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      remote Access
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      View all Products
                    </a>
                  </li>
                 
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Company</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                    Partners
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Features</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Autofill
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Password Vault
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Digital Wallet
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Password Manager
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Dark Monitoring
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Authenticator
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Resource</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Community
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            CRM Project
          </a>
        </div>
      </footer>
    </div>
  );
};
