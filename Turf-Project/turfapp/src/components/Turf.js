import React, { useEffect, useState } from 'react'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'
import HeaderUser from '../common/HeaderUser'
import GroundService from '../Services/Ground';

export default function About() {

    const [Ground,setGround] = useState([]);

    useEffect(()=>{
    GroundService.getGround().then((res)=>{
        setGround(res.data);
        console.log(res.data);
    }).catch(error =>{
      console.log(error);
    })
    
 },[]);

    return (
        <>
            <HeaderUser></HeaderUser>
             {/* Header start */}
  <div className="container-fluid bg-breadcrumb">
    <div className="container text-center" style={{ maxWidth: 900 }}>
      <h3 className="text-white display-3">My Turf</h3>
    </div>
  </div>
  {/* Header End */}

            {/* Blog Start */}
            <div className="container-fluid blog mt-5 ">
                <div className="container pb-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">All Turf</h5>
                        <h1 className="mb-4">Top Level Turf</h1>
                        <p className="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                            deserunt tenetur sapiente atque. Magni non explicabo beatae sit, vel
                            reiciendis consectetur numquam id similique sunt error obcaecati
                            ducimus officia maiores.
                        </p>
                    </div>

                    
                    <div className="row g-4 ">
                    { Ground.map((groumd)=>(
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                               
                                    <div className="blog-img-inner">
                                        <img
                                            className="img-fluid w-100 rounded-top"
                                            src="img/blog-1.jpg"
                                            alt="Image"
                                        />
                                        <div className="blog-icon">
                                            <Link to="/turfBooking" className="my-auto">
                                                <i className="fas fa-link fa-2x text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <Link to="/turfBooking" className="h3">
                                     {groumd.name}
                                    </Link>
                                    <p className="my-3">
                                    {groumd.description}
                                    </p>

                                    <p className="my-1">
                                    Width: {groumd.width}
                                    </p>
                                    <p className="my-1">
                                    Length: {groumd.length}
                                    </p>
                                    <Link to="/turfBooking" className="h5">
                                        Price: {groumd.price}/hr
                                    </Link>
                                    <hr></hr>
                                    <Link to="/turfBooking" className="btn btn-primary rounded-pill py-2 px-4">
                                        Book
                                    </Link>

                                </div>
                                                    
                            </div>
                        </div>
                        ))
                    }   
                    </div>
                     
  
                </div>
            </div>
            {/* Blog End */}
            <Footer></Footer>

        </>

    )
}
