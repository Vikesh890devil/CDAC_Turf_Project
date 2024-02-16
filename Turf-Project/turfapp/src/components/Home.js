import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
        <Header></Header>
            {/* Carousel Start */}
            
            <div className="carousel-header pt-5" >
                <div className='container-fluid' pt-5>.</div>
                <div id="carouselId" className="carousel slide pt-4 " data-bs-ride="carousel"  >
                    <ol className="carousel-indicators">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <li data-bs-target="#carouselId" data-bs-slide-to={1} />
                        <li data-bs-target="#carouselId" data-bs-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox" style={{ height: '550px' }}>
                        <div className="carousel-item active" >
                            <img src="img/score1.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/score3.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/socer4.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon btn bg-primary"
                            aria-hidden="false"
                        />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon btn bg-primary"
                            aria-hidden="false"
                        />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
            {/* Carousel End */}

            {/* Gallary Start */}
            <div className="container-fluid destination py-5">
                <div className="container py-5">
                    <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                        <h5 className="section-title px-3">Gallary</h5>
                        <h1 className="mb-0">Feature Artistic Representations Of Turf In Various Forms</h1>
                    </div>
                    <div className="tab-class text-center">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer1.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer2.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/socer3.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallary End */}

            {/* Blog Start */}
            <div className="container-fluid blog ">
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
                    <div className="row g-4 justify-content-center">
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
                                            <a href="#" className="my-auto">
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                    <a href="/book" className="h3">
                                        Cricket Turf
                                    </a>
                                    <p className="my-3">
                                        Cricket Truf In Nashik All content
                                    </p>

                                    <p className="my-1">
                                        Ground Width                            
                                    </p>
                                    <p className="my-1">
                                        Ground Length
                                    </p>
                                    <p className="mb-3">
                                        Ground Height
                                    </p>


                                    <a href="/book" className="h5">
                                        Price: 250/hr
                                    </a>
                                    <hr></hr>
                                    <a href="book" className="btn btn-primary rounded-pill py-2 px-4">
                                        Book
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-img-inner">
                                        <img
                                            className="img-fluid w-100 rounded-top"
                                            src="img/blog-2.jpg"
                                            alt="Image"
                                        />
                                        <div className="blog-icon">
                                            <a href="#" className="my-auto">
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">

                                    <a href="/book" className="h3">
                                        Badminton Turf
                                    </a>
                                    <p className="my-3">
                                        Badminton Truf In Nashik All content
                                    </p>

                                    <p className="my-1">
                                        Ground Width                            
                                    </p>
                                    <p className="my-1">
                                        Ground Length
                                    </p>
                                    <p className="mb-3">
                                        Ground Height
                                    </p>


                                    <a href="/book" className="h5">
                                        Price: 270/hr
                                    </a>
                                    <hr></hr>
                                    <Link to="book" className="btn btn-primary rounded-pill py-2 px-4">
                                        Book
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <div className="blog-img-inner">
                                        <img
                                            className="img-fluid w-100 rounded-top"
                                            src="img/blog-3.jpg"
                                            alt="Image"
                                        />
                                        <div className="blog-icon">
                                            <a href="#" className="my-auto">
                                                <i className="fas fa-link fa-2x text-white" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                <div className="blog-content border border-top-0 rounded-bottom p-4">

                                    <a href="/book" className="h3">
                                        Football Turf
                                    </a>
                                    <p className="my-3">
                                        Football Truf In Nashik All content                          
                                     </p>

                                    <p className="my-1">
                                        Ground Width                            
                                    </p>
                                    <p className="my-1">
                                        Ground Length
                                    </p>
                                    <p className="mb-3">
                                        Ground Height
                                    </p>

                                    <a href="/book" className="h5">
                                        Price: 280/hr
                                    </a>
                                    <hr></hr>
                                    <a href="book" className="btn btn-primary rounded-pill py-2 px-4">
                                        Book
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}




            <Footer></Footer>








        </>


    )
}
