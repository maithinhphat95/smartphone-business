import axios from "axios";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import useFetch from "../../../components/customize/fetch";
import EditProfile from "../EditProfile/EditProfile";
import "./Profile.scss";

function Profile(props) {
  const [modalEdit, setModalEdit] = useState(false);
  let params = useParams();
  const { data: dataProductItem } = useFetch(`http://localhost:3006/user/`);
  //lay checklogin() khi setREgiter nap vao login()
  const { setCheckLogin, checkLogin } = useContext(ThemeContext);
  // console.log(checkLogin);
  //edit
  const handleEdit = async (id) => {
    setModalEdit(true);

    // let data2 = checkLogin;
    // data2 = data2.find(item =>
    //   item.id === id);
    //   // setDatacovid(data);
    //   let res = await axios.put('http://localhost:3006/user', data2);
    //   if (res && res.data2) {
    //       let newUser = res.data2;
    //       // mang rỗng [ ] đăng ký
    //       setCheckLogin(newUser); //user
    //   }
  };
  return (
    <div className="container-fluld">
      <div className="container profile">
        {checkLogin.map((item) => {
          return (
            <div key={item.id} className="row">
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
                        <h5 className="my-3">{item.account}</h5>
                        <p className="text-muted mb-1">Full Stack Developer</p>

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
                        <h4 className="card-title">Thông tin cá nhân</h4>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Tài khoản:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.account}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Họ tên:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.name}</p>
                          </div>
                        </div>

                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Ngày tháng năm sinh:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.date}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.email}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Địa chỉ:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.address}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Số điện thoại:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{item.phone}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="mt-2 mb-2">
                            <button
                              type="button"
                              onClick={() => handleEdit(item.id)}
                              className="btn btn-success"
                              data-toggle="modal"
                              data-target="#exampleModal"
                            >
                              Edit
                            </button>
                            {modalEdit ? <EditProfile /> : ""}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
