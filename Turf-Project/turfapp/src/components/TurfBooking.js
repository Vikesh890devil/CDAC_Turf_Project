import React, { useState } from 'react'
import HeaderUser from '../common/HeaderUser'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'


export default function TurfBooking() {


    const [showFields, setShowFields] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

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

            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-xl-3 col-md-12 g-3'>
                        <div className='col-12'>
                            <img className="img-fluid w-100 rounded " src="img/blog-2.jpg" alt="Image"
                                style={{ height: "250px", width: "450px" }} />
                        </div>
                    </div>

                    <div className='col-xl-6 col-md-12 g-2 rounded'>
                        <div className='container'>
                            <div className="blog-content border border-top-2 rounded p-4 bg-light">
                                <Link to="/turfBooking" className="h3">
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
                                        <p></p>

                                        <p className="my-1">
                                            Ground Length:
                                        </p>

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
                                        <br />
                                        <div className="form-floating date" id="date3" data-target-input="nearest">
                                            <input
                                                type="datetime-local"
                                                className="form-control bg-white border-0"
                                                id="datetime"
                                                data-target="#date3"
                                                data-toggle="datetimepicker" />
                                            <label htmlFor="datetime"><b>Date &amp; Time</b></label>
                                        </div>

                                        <br />

                                        <Link to="//turfBooking" className="h5">
                                            Price: 250/hr
                                        </Link>

                                    </div>


                                    <div className="col-md-6 ">
                                        <div className='col-12 text-center '>
                                            <img className="img-fluid w-75  rounded-50 border m-3" style={{ height: "15rem", borderRadius: "12px", WebkitBoxShadow: "5px 5px 10px  black" }} src="img/phonephe.jpeg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                            
                                <div className='row'>
                                    <div className="col-md-3 col-xl-3">
                                        <Link to="/turfBooking" className="btn btn-primary rounded-pill py-2 px-4">
                                            Book
                                        </Link>
                                    </div>&nbsp;
                                    <div className="col-md-3 col-xl-3">
                                        <button onClick={() => setShowFields(true)} className="btn btn-primary rounded-pill py-2 px-4 ">Review</button>

                                        {showFields && (
                                            <form onSubmit={handleSubmit}>
                                                <br />
                                                    <textarea name="description" className='' style={{ borderRadius: "10px" }} value={formData.description} onChange={handleChange} placeholder='Enter The Description' />
                                                    <br />
                                                <button type="submit" className="btn btn-primary rounded-pill py-2 px-4 ">Submit</button>
                                            </form>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='col-xl-3 col-md-12 bg-light g-2 rounded'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="blog-content  py-4  mt-2">
                                        <h5>Client-Name</h5>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                                        <hr />
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
