import React, { useRef } from 'react';
import UserService from '../Services/UserService';
import Footer from '../common/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../common/Header';

export default function AdminLogin() {
  const history = useNavigate();
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Users = {
      username: username.current.value,
      password: password.current.value
    }
    UserService.loginCheck(Users).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        alert("success full login");
        localStorage.setItem("userlogin", JSON.stringify(Users));
        history("/allBooking",)
      } else {
        alert("failed to login");
      }
    }).catch((err) => {
      alert("failed to login" + err.message);
    })

  };
  return (
    <>
      <Header></Header>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Admin Login</h3>
        </div>
      </div>
      {/*================login_part Area =================*/}
      <section className="login_part section_padding pt-5 pb-5" >
        <div className="container ">
          <div className="row align-items-center pt-5 pb-5" >
            <div className="col-lg-6 col-md-6 log"  >
              <img className="img-fluid w-100 rounded-top"
                src="img/blog-2.jpg"
                alt="Image"
              />

            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome<br />
                    Please Sign in now
                  </h3>
                  <form
                    className='form-control py-3'
                  >
                    <div className="col-md-12 py-3" >
                      <input
                        type="text"
                        className="form-control p-3"
                        name="username"
                        placeholder="Username"
                        ref={username}
                      />
                    </div>
                    <div className="col-md-12 py-3 ">
                      <input
                        type="password"
                        className="form-control p-3"
                        name="password"
                        placeholder="Password"
                        ref={password}
                      />
                    </div>
                    <div className="col-md-12 py-3">
                      <div className="row">
                        <div className="col-md-2">
                          <button type="submit" className="btn btn-primary p-3 " onClick={handleSubmit}>
                            Log In
                          </button>
                        </div>
                        <div className="col-md-10 ">
                          <a className="lost_pass fs-5" href="#"><u>
                            Forgot password?</u>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================login_part end =================*/}
      <Footer></Footer>
    </>
  );
}
