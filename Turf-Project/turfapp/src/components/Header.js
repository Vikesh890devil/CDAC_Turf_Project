import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <>
        {/* Topbar Start */}
        <div className="container-fluid bg-primary px-5 d-none d-lg-block">
          <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a
                  className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                  href=""
                >
                  <i className="fab fa-instagram fw-normal" />
                </a>
             
              </div>

            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div
                className="d-inline-flex align-items-center"
                style={{ height: 45 }}
              >
                <a href="/register">
                  <small className="me-3 text-light">
                    <i className="fa fa-user me-2" />
                    Register
                  </small>
                </a>
                <a href="/login">
                  <small className="me-3 text-light">
                    <i className="fa fa-sign-in-alt me-2" />
                    Login
                  </small>
                </a>

              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
              <h1 className="m-0">

              <img src="img/trufLogo.png" className="img-fluid" alt="Image"
              style={{ width: '100px', height: '90px', paddingLeft: '40px' }} />

              </h1>

            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about" className="nav-item nav-link">
                  About
                </a>
                <a href="services" className="nav-item nav-link">
                  Services
                </a>
                <a href="ground" className="nav-item nav-link">
                  Ground
                </a>
                <a href="groundTable" className="nav-item nav-link">
                  GroundTable
                </a>
                <a href="myBooking" className="nav-item nav-link">
                  MyBooking
                </a>
                <a href="allBooking" className="nav-item nav-link">
                  AllBooking
                </a>

                <a href="contact" className="nav-item nav-link">
                  Contact
                </a>
              </div>
              <a href="book" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">
                Book Now
              </a>
            </div>
          </nav>
       
        </div>
        <div
          className="container-fluid search-bar position-relative"
          style={{ top: "-50%", transform: "translateY(-50%)" }}
        >

        </div>
        {/* Navbar & Hero End */}
      </>

    </>
  )
}
