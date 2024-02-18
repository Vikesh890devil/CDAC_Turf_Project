import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <Header></Header>

            {/* Carousel Start */}

            <div className="carousel-header " >

                <div id="carouselId" className="carousel slide" data-bs-ride="carousel"  >
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


            {/* Booking turf start   */}
            <div className="container">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="img/blog-2.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 py-2 px-4 ">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                                <Link to="/login" className='btn btn-primary py-2 px-4 ms-lg-2' > Get Click </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking turf end   */}







            <Footer></Footer>








        </>


    )
}
