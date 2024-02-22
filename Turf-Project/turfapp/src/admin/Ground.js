import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from "../common/HeaderAdmin";
import Footer from "../common/Footer";
import GroundService from "../Services/Ground";

export default function Ground() {

  const [groundName,setGroundName]=useState("");
  const [groundWidth,setGroundWidth]=useState("");
  const [groundLength,setGroundLength]=useState("");
  const [groundPrice,setGroundPrice]=useState("");
  const [groundImage,setGroundImage]=useState("");
  const [groundDescription,setGroundDescription]=useState("");

  const handeSubmit= ()=>{
    const ground={
      "name":groundName,
      "length":groundWidth,
      "width":groundLength,
      "price":groundPrice,
      "description":groundDescription
    }

    const mId=1;

    GroundService.addGround(mId,ground).then((res)=>{
      alert(res.data);
    }).catch((err)=>{
      alert(err.message);
    })

  }

  return (
    <>
    <HeaderAdmin></HeaderAdmin>
      {/* Header start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <h3 className="text-white display-3">Ground</h3>
        </div>
      </div>
      {/* Header End */}
      <div className="container">
        <div className="row">
          <div className="col-3 pt-5"></div>

          <div className="col-md-6 pt-5">
            <h1 className="h1  text-center">
              <u>Add Ground</u>
            </h1>
            <form className="row g-3 pt-3 pb-5">
              <div className="col-md-6">
                <label htmlFor="GroundName" className="form-label">
                  Ground Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                 
                  id="name"
                  placeholder="Enter the Ground Name"
                  onChange={(e)=>setGroundName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundWidth" className="form-label">
                  Ground Width
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="width"
                 
                  id="width"
                  placeholder="Enter the Ground Width"
                  onChange={(e)=>setGroundWidth(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundLength" className="form-label">
                  Ground Length
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="length"
                 
                  id="length"
                  placeholder="Enter the Ground Length"
                  onChange={(e)=>setGroundLength(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                
                  id="price"
                  placeholder="Enter the Price"
                  onChange={(e)=>setGroundPrice(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundHeight" className="form-label">
                  Select Ground Image
                </label>
                <input type="file" 
                className="form-control" 
                name="image"
               
                id="image" 
                onChange={(e)=>setGroundImage(e.target.value)}/>

              </div>

              <div className="col-md-6">
                <label htmlFor="GroundDescription" className="form-label">
                  Ground Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  name="description"
                 
                  id="description"
                  placeholder="Enter the Ground Description"
                  onChange={(e)=>setGroundDescription(e.target.value)}
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary" onClick={handeSubmit}
                  style={{ width: "calc(100% )" }}
                >
                  Add Ground
                </button>
              </div>
            </form>
          </div>
          <div className="col-3 pt-5"></div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
