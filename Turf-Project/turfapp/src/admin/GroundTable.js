import React from 'react'
import HeaderAdmin from '../common/HeaderAdmin'
import Footer from '../common/Footer'

export default function GroundTable() {
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            {/* Header start */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center" style={{ maxWidth: 900 }}>
                    <h3 className="text-white display-3">GroundTable</h3>
                </div>
            </div>
            {/* Header End */}
            <div className='container' >
                <div className='row pt-5 pb-5'>
                <div className='table-responsive'>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Ground Width</th>
                                <th scope="col">Ground Height</th>
                                <th scope="col">Ground Length</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th >1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>2565</td>
                                <td>500</td>
                                <td>110</td>
                                <td>252</td>
                                <td><button type='button' className='btn btn-success'>Update</button></td>
                                <td><button type='button' className='btn btn-danger'>Delete</button></td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    )
}