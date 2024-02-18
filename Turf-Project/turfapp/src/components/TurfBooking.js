import React from 'react'
import HeaderUser from '../common/HeaderUser'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

export default function TurfBooking() {
    return (
        <>
            <HeaderUser />

            {/* Header start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3">Turf Booking</h3>
                </div>
            </div>
            {/* Header End */}

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='col-12'>
                            <img className="img-fluid w-100 rounded-top " src="img/blog-2.jpg" alt="Image"
                                style={{ height: "250px", width: "450px" }}
                            />
                        </div>
                    </div>

                    <div className='col-6'>
                        <div className='container'>
                            <div className="blog-content border border-top-2 rounded p-4 bg-light" >
                                <Link to="//turfBooking" className="h3">
                                    Cricket Turf
                                </Link>
                                <div className="row">
                                    <p className="my-3">
                                        Cricket Truf In Nashik All content
                                    </p>
                                    <div className="col-6">
                                        <p className="my-1">
                                            Ground Width:
                                        </p>
                                        <p className="my-1">
                                            Ground Length:
                                        </p>
                                        <p className="mb-3">
                                            Ground Height:
                                        </p>
                                    </div>


                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Open</option>
                                                <option value="1">9'0 clock - 11'0 clock </option>
                                                <option value="2">11'0 clock - 1'0 clock </option>
                                                <option value="3">1'0 clock  - 3'0 clock </option>
                                                <option value="3">3'0 clock  - 5'0 clock </option>
                                                <option value="3">5'0 clock  - 7'0 clock </option>
                                                <option value="3">7'0 clock  - 9'0 clock </option>
                                            </select>
                                            <label htmlFor="email">Slot</label>
                                        </div>
                                    </div>

                                    <div className="col-6">

                                        <Link to="//turfBooking" className="h5">
                                            Price: 250/hr
                                        </Link>
                                    </div>

                                    <div className="col-md-6">
                                        <div
                                            className="form-floating date"
                                            id="date3"
                                            data-target-input="nearest"
                                        >
                                            <input
                                                type="datetime-local"
                                                className="form-control bg-white border-0"
                                                id="datetime"
                                                data-target="#date3"
                                                data-toggle="datetimepicker"
                                            />
                                            <label htmlFor="datetime"><b>Date &amp; Time</b></label>
                                        </div>
                                    </div>
                                </div>







                                <hr></hr>
                                <div className='row'>
                                    <div className="col-md-3">
                                        <Link to="/turfBooking" className="btn btn-primary rounded-pill py-2 px-4">
                                            Book
                                        </Link>
                                    </div>
                                    <div className="col-md-3">
                                        <Link to="/turfBooking" className="btn btn-primary rounded-pill py-2 px-4 ">
                                            Review
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='col-3 bg-light'>
                        <div className='container '>
                            <div className='row '>
                                <div className='col-12'>
                                <div className="blog-content  py-4  mt-2" >
                                    <p>Review Content</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
