import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function HeaderUser() {
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("userId");
    alert("User logged out Successfully");
    history("/");

  }

  return (
    <>

      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <Link t="" className="navbar-brand p-0">
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
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/services" className="nav-item nav-link">
                Services
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/turf" className="nav-item nav-link">
                Book Truf
              </Link>
              <Link to="/myBooking" className="nav-item nav-link">
                BooKing
              </Link>
            </div>
            <Link to="#" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4" onClick={logout}>
              <small className="me-3" >
                <i className="fa fa-user me-2" />
                Logout
              </small>
            </Link>
          </div>
        </nav>

      </div>
      <div
        className="container-fluid search-bar position-relative"
        style={{ top: "-50%", transform: "translateY(-50%)" }}
      >

      </div>
      {/* Navbar & Hero End */}

      <div className='container' style={{ height: "6rem" }}></div>
    </>


  )
}
  