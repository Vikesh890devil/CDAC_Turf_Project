import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../common/HeaderAdmin'
import Footer from '../common/Footer'
import GroundService from '../Services/Ground';
import axios from 'axios';

export default function GroundTable() {
    const URL = 'http://localhost:6162';
    const [Ground, setTurfDetails] = useState([]);

   
  useEffect(() => {
    const fetchAllTurfDetails = async () => {
      try {
        const response = await axios.get(URL + '/get-allTurf');
        console.log(response)
        setTurfDetails(response.data);
      } catch (error) {
        console.error('Error fetching all turf details:', error);
      }
    };

    fetchAllTurfDetails();
  }, []); 



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
                                <td scope="row">
                                <img src={"TurfImage/TurfImage/"+groumd.image} style={{width:"7rem"}} /></td>
                                <td scope="row">{groumd.description}</td>
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