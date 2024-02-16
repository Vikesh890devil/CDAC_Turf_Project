import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderAdmin() {
  return (
    <>
      
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <Link to="" className="navbar-brand p-0">
              <h1 className="m-0">

              <img src="img/trufLogo.png" className="img-fluid" alt="Image"
              style={{ width: '100px', height: '90px', paddingLeft: '40px' }} />

              {/* <p style={{color:"blue", paddingLeft: '40px'}} >Turf </p> */}

              </h1>

            </Link>
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
                <Link to="/" className="nav-item nav-link ">
                  Home
                </Link>
                <Link to="/allBooking" className="nav-item nav-link">
                  AllBooking
                </Link>
                <Link to="/groundDetail" className="nav-item nav-link">
                  Ground Detail
                </Link>
                <Link to="/groundTable" className="nav-item nav-link">
                  Ground Table
                </Link>
              </div>
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

  
  )
}