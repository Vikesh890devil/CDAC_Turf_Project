import React from 'react'

export default function Home() {
    return (
        <>
            {/* Carousel Start */}
            <div className="carousel-header" >
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
                            <img src="img/socer3.jpg" className="img-fluid" alt="Image" />
                            <div className="carousel-caption">
                                <div className="p-3" style={{ maxWidth: 900 }}>

                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="img/socer7.jpg" className="img-fluid" alt="Image" />
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
            {/* Navbar & Hero start */}
            <div
                className="container-fluid search-bar position-relative"
                style={{ top: "-50%", transform: "translateY(-50%)" }}
            >

            </div>
            {/* Navbar & Hero End */}

            {/* Destination Start */}
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
                                                src="img/vik-1.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Nashik</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-1.jpg" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-2.webp"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Panchwati</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-2.webp" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-3.webp"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Puna</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-3.webp" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-4.avif"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Mumbai</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-4.avif" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-5.avif"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Mandavgaon</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-5.avif" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-6.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Beed</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-6.jpg" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="destination-img">
                                            <img
                                                className="img-fluid rounded w-100"
                                                src="img/vik-7.jpg"
                                                alt="" style={{ width: '100%', height: '300px' }}
                                            />
                                            <div className="destination-overlay p-4">
                                                <a
                                                    href="#"
                                                    className="btn btn-primary text-white rounded-pill border py-2 px-3"
                                                >
                                                    20 Photos
                                                </a>
                                                <h4 className="text-white mb-2 mt-3">Bale</h4>
                                                <a href="#" className="btn-hover text-white">
                                                    View All Place <i className="fa fa-arrow-right ms-2" />
                                                </a>
                                            </div>
                                            <div className="search-icon">
                                                <a href="img/vik-7.jpg" data-lightbox="destination-1">
                                                    <i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Destination End */}

            {/* Blog Start */}
            <div className="container-fluid blog py-5">
                <div className="container py-5">
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
                            
                            <a href="/book" className="h5">
                                Price: 270/hr
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


            










        </>


    )
}
