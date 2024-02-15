import React from 'react'

export default function Footer() {
  return (
    <>
  {/* Footer Start */}
  <div className="container-fluid footer ">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3 ">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white footertext">Get In Touch</h4>
            <a href="">
              <i className="fas fa-home me-2" /> 123 Street, Adgaon, Puna
            </a>
            <a href="">
              <i className="fas fa-envelope me-2" />sanketlike63@gmail.com
            </a>
            <a href="">
              <i className="fas fa-phone me-2" />9414173314
            </a>
            
            <div className="d-flex align-items-center">
              <i className="fas fa-share fa-2x text-white me-2" />
              <a
                className="btn-square btn btn-primary rounded-circle mx-1"
                href="https://www.facebook.com"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn-square btn btn-primary rounded-circle mx-1"
                href="https://twitter.com/i/flow/login"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn-square btn btn-primary rounded-circle mx-1"
                href="https://www.instagram.com"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn-square btn btn-primary rounded-circle mx-1"
                href="https://in.linkedin.com"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 ">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Sports</h4>
            <a href="https://www.cricket.com">
              <i className="fas fa-angle-right me-2" /> Cricket
            </a>
            <a href="https://olympics.com/en/sports/basketball/">
              <i className="fas fa-angle-right me-2" /> Basketball
            </a>
            <a href="https://www.football.com/welcome/">
              <i className="fas fa-angle-right me-2" /> FootBall
            </a>
            <a href="https://www.fih.hockey/events/world-cup">
              <i className="fas fa-angle-right me-2" /> Hockey 
            </a>
            
           
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Support</h4>
            
            <a href="https://www.manupatra.com/corporate/Blog/legal-notice-basics.aspx">
              <i className="fas fa-angle-right me-2" /> Legal Notice
            </a>
            <a href="https://policies.google.com/privacy?hl=en-US">
              <i className="fas fa-angle-right me-2" /> Privacy Policy
            </a>
            <a href="https://en.wikipedia.org/wiki/Terms_of_service">
              <i className="fas fa-angle-right me-2" /> Terms and Conditions
            </a>
           
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 ">
          <div className="footer-item">
            <h4 className="text-white mb-3">Payments</h4>
            <div className="footer-bank-card">
              <a href="#" className="text-white me-2">
                <i className="fab fa-cc-amex fa-2x" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-cc-visa fa-2x" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="fas fa-credit-card fa-2x" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-cc-mastercard fa-2x" />
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-cc-paypal fa-2x" />
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-cc-discover fa-2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright  py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <p className='h5' style={{textAlign:"center", color:"white"}}>
          <a href="#"> Turf Mangement</a> Power By Team
          </p>
        </div>
        
      </div>
    </div>
  </div>
  {/* Copyright End */}


  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top"
  >
    <i className="fa fa-arrow-up" />
  </a>
</>

  )
}
