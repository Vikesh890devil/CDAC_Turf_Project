import React from 'react'

export default function MyBooking() {
    return (
        <>

            {/* Header start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3">MyBooking</h3>
                </div>
            </div>
            {/* Header End */}
            <div className='container' >
                <div className='row pt-5 pb-5'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Ground</th>
                                <th scope="col">Ground Name</th>
                                <th scope="col">Booking Id</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Cunstomer Contact</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">Booking Time Slot</th>
                                <th scope="col">Total Payable Amount</th>
                                <th scope="col">Booking Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >Image</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>2565</td>
                                <td>500</td>
                                <td>110</td>
                                <td>252</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><button type='button' className='btn btn-danger'>Cancle Booking</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}