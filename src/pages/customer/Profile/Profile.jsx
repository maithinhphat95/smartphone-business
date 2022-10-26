import React from "react";
import "./Profile.scss";

function Profile(props) {
  return (
    <div className="container-fluld">
      <div className="container profile">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: 150 }}
                    />
                    <h5 className="my-3">John Smith</h5>
                    <p className="text-muted mb-1">Full Stack Developer</p>
                    <p className="text-muted mb-4">
                      Bay Area, San Francisco, CA
                    </p>
                    <div className="d-flex justify-content-center mb-2">
                      <button type="button" className="btn btn-primary">
                       Thay đổi ảnh đại diện
                      </button>
                      {/* <button
                        type="button"
                        className="btn btn-outline-primary ms-1"
                      >
                        Message
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                  <h4 class="card-title">Thông tin cá nhân</h4>
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Họ tên:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Johnatan Smith</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Tài khoản:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Ngày tháng năm sinh:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 765-4321</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Địa chỉ:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Bay Area, San Francisco, CA
                        </p>
                      </div>
                  
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Số điện thoại:</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 765-4321</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                    <div className="mt-2 mb-2">
                      <button type="button" className="btn btn-success">
                        Edit
                      </button>
                      
                    </div>
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
