import React from "react";
import "../ProductList/Productlist.css";
export default function Variant({editdata}) {
  return (
      <div className="card nav_pills_card">
        <div className="card-body">
          <div>
            <div className="form-title">Variants</div>
            <p>
              Add A Custome Variat Options For Your Product, Like Different
              Sizes Or Colors.
            </p>
            <div className="">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Variant
                    </label>
                    <input
                      type="text"
                      name="variant"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[0].variant :""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Price
                    </label>
                    <input
                      type="text"
                      name="variantPrice"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[0].price :""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Stock keeping unit
                    </label>
                    <input
                      type="text"
                      name="variantPrice"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[0].stock :""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group uploader-wrapper">
              <label htmlFor="Description">
                <span className="text-danger">*</span> Upload Image
              </label>
              <div className="uploader-wrapper-inner">
                <img
                  src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
                  alt="pictures"
                />
                <input type="file" />
              </div>
            </div>

            <div className="isMinus">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Variant
                    </label>
                    <input
                      type="text"
                      name="variant"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[1].variant :""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Price
                    </label>
                    <input
                      type="text"
                      name="variantPrice"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[1].price :""}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor=" productName">
                      <span className="text-danger">*</span> Stock keeping unit
                    </label>
                    <input
                      type="text"
                      name="variantPrice"
                      className="form-control"
                      value={editdata.length!==0 ? editdata[0].variation[1].stock :""}
                    />
                  </div>
                </div>
              </div>
              <span className="removeSpan">-</span>
            </div>
            <div className="form-group uploader-wrapper">
              <label htmlFor="Description">
                <span className="text-danger">*</span> Upload Image
              </label>
              <div className="uploader-wrapper-inner">
                <img
                  src="https://emilus.themenate.net/img/thumbs/thumb-7.jpg"
                  alt="pictures"
                />
                <input type="file" />
              </div>
            </div>

            <button className="uploader-add-btne" type="button">
              Add field
            </button>
          </div>
        </div>
      </div>
    
  );
}
