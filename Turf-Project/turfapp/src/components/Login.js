import React, { useRef, useState } from 'react';
import UserService from '../Services/UserService';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const history = useNavigate();

  const username = useRef();
  const password = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const Users = {
      username: username.current.value,
      password: password.current.value
    }
    UserService.loginCheck(Users)
      .then((res) => {
        const result = res.data;
        console.log(result);

        if (result.username === Users.username && result.password === Users.password) {
          alert("Successfully logged in");
          localStorage.setItem("userId", JSON.stringify(result.userId));
          // const expirationDate = new Date(Date.now() + 864e5);
          // const cookieValue = JSON.stringify(result);
          // document.cookie = `userlogin=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
          history("/turf");
        } else {
          alert("Failed to login Invalid username or password.");
        }
      })
      .catch((err) => {
        alert("Failed to log in: " + err.message);
      });

  };
  return (
    <>
      <Header></Header>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Login</h3>
        </div>
      </div>
      {/*================login_part Area =================*/}
      <section className="login_part section_padding pt-5 pb-5" >
        <div className="container ">
          <div className="row align-items-center pt-4 pb-5" >
            <div className="col-lg-6 col-md-6 log"  >
              <img className="img-fluid w-100 rounded-top"
                src="img/userLogin.png"
                alt="Image"
              />

            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner"><u>
                  <h2 className='h1 text-center'>Sigin</h2></u>
                  <form
                    className='form-control py-3'
                  >
                    <div className="col-md-12 py-3" >
                      <input
                        type="text"
                        className="form-control p-2"
                        name="username"
                        placeholder="Username"
                        ref={username}
                      />
                    </div>
                    <div className="col-md-12 py-3 ">
                      <input
                        type="password"
                        className="form-control p-2"
                        name="password"
                        placeholder="Password"
                        ref={password}
                      />
                    </div>
                    <div className="col-md-12 py-3 text-center">
                      <button type="submit" className="btn btn-primary w-50" onClick={handleSubmit} >
                        Log In
                      </button><br></br>
                      <a className="lost_pass" href="#">
                        Forgot password?
                      </a><br />
                      <Link className="registration" to="/register">
                        Registration
                      </Link>


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
