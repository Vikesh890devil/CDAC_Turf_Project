import React from "react";
import HeaderAdmin from "../common/HeaderAdmin";
import Footer from "../common/Footer";

export default function Ground() {
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
                  id="GroundName"
                  placeholder="Enter the Ground Name"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundWidth" className="form-label">
                  Ground Width
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="GroundWidth"
                  placeholder="Enter the Ground Width"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundLength" className="form-label">
                  Ground Length
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="GroundLength"
                  placeholder="Enter the Ground Length"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundHeight" className="form-label">
                  Ground Height
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="GroundHeight"
                  placeholder="Enter the Ground Height"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="Price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="GroundLength"
                  placeholder="Enter the Price"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundHeight" className="form-label">
                  Select Ground Image
                </label>
                <input type="file" className="form-control" id="GroundHeight" />
              </div>

              <div className="col-md-6">
                <label htmlFor="GroundDescription" className="form-label">
                  Ground Description
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="GroundDescription"
                  placeholder="Enter the Ground Description"
                />
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "calc(100% )" }}
                >
                  Sign in
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
