import React, {useRef} from 'react';
import UserService from '../Services/UserService';

export default function Login() {
  const username = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
  e.preventDefault();
  const Users = {
    username: username.current.value,
    password: password.current.value
  }
  UserService.loginCheck(Users).then((res)=>{
    console.log(res.data);
    if(res.data===true){
      alert("success full login");
    }else{
      alert("failed to login");
    }
  }).catch((err)=>{
    alert("failed to login"+err.message);
  })
  };
  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Login</h3>
        </div>
      </div>
      {/*================login_part Area =================*/}
      <section className="login_part section_padding pt-5 pb-5" >
        <div className="container " style={{ border: "1px solid", borderRadius: "30px" }}>
          <div className="row align-items-center pt-5 pb-5" >
            <div className="col-lg-6 col-md-6 log"  >
              <div className="login_part_text text-center">
                <div className="login_part_text_iner">
                  <h2>New User</h2>
                  <p>
                    If you're looking for a concise and engaging line for a turf signup form, you might consider something like:
                  </p><button type='button' className='btn btn-success'>
                    <a href="/register" className="btn_3">
                      Create an Account
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="login_part_form">
                <div className="login_part_form_iner">
                  <h3>
                    Welcome<br />
                    Please Sign in now
                  </h3>
                  <form
                    className='form-control'
                  >
                    <div className="col-md-12 pt-3" >
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="Username"
                        ref={username}
                      />
                    </div>
                    <div className="col-md-12 pt-4 ">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        ref={password}
                        />
                    </div>
                    <div className="col-md-12 pt-4">
                      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Log In
                      </button>
                      <a className="lost_pass" href="#">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================login_part end =================*/}
    </>
  );
}
