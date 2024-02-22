import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../common/HeaderAdmin'
import Footer from '../common/Footer'
import GroundService from '../Services/Ground';

export default function GroundTable() {

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
                                
                                <th scope="col">Name</th>
                                <th scope="col">Ground Width</th>
                                <th scope="col">Ground Length</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        { Ground.map((groumd)=>(
                            <tr>
                                
                                <td scope="row">{groumd.name}</td>
                                <td scope="row">{groumd.width}</td>
                                <td scope="row">{groumd.length}</td>
                                <td scope="row">{groumd.price}</td>
                                <td scope="row">{groumd.image}</td>
                                <td scope="row">{groumd.description}</td>
                                <td><button type='button' className='btn btn-success'>Update</button></td>
                                <td><button type='button' className='btn btn-danger'>Delete</button></td>
                            </tr>
                         ))
                        }   
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    )
}