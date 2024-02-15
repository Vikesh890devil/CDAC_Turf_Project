import React, { useRef } from 'react'
import UserService from '../Services/UserService';
import { Link, redirect } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Register() {
  const Name = useRef();
  const age = useRef();
  const mobileNo = useRef();
  const username = useRef();
  const password = useRef();

  const handeSubmit = (e) => {
    e.preventDefault();
    const Users = {
      name: Name.current.value,
      age: age.current.value,
      mobileNo: mobileNo.current.value,
      username: username.current.value,
      password: password.current.value
    }
    UserService.addUser(Users).then((res) => {
      console.log(res.data);
      alert('sucessfully added');
      console.log(res.status);
      // if(res.status===200){
      // <redirect from="/register" to="/login" />
      // }      
    }).catch((err) => {
      console.log(err);
      alert('Faild to add user');
    });
  };
  return (
    <>
      <Header></Header>

      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Register</h3>
        </div>
      </div>
      {/* Header End */}
      <form  className='form-control'>
        <div className='container' >
          <div className='row' >
            <div className='col-3 pt-5'></div>
            <div className='col-md-6 pt-5' >
              <h1 className='h1  text-center' ><u>Signup</u></h1>
              <form className="row g-3 pt-3 pb-5" >
                <div className="col-12" >
                  <label htmlFor="inputFullName" className="form-label">
                    FullName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='Name'
                    ref={Name}
                    placeholder="Enter the full name"
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputGender" className="form-label">
                    age
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="Enter your age"
                    name='age'
                    ref={age}
                  />


                </div>

                <div className="col-md-12">
                  <label htmlFor="inputNumber" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="Number"
                    className="form-control"
                    name='mobileNo'
                    placeholder="Enter the number"
                    ref={mobileNo}

                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputAge" className="form-label">
                    Enter youe username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='username'
                    placeholder="Enter the your username"
                    ref={username}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" name='password1'
                    placeholder="Enter the your password" />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputComformPassword" className="form-label">
                    Comform Password
                  </label>
                  <input type="password" className="form-control" name='password'
                    placeholder="Enter the conform password" ref={password} />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100 " onClick={handeSubmit} >
                    Sign in
                  </button>
                </div>
                <div className="col-12">
                <Link to="/displayallusers"><button className="btn btn-primary w-100 ">
                       display  All users
                       </button>
               </Link>
                </div>
              </form>
            </div>
            <div className='col-3 pt-5'></div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </>

  )
};
