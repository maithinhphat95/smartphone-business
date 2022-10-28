import { TextField } from "@mui/material";
import React, { useContext } from "react";
import ThemeContext from "../../../components/customer/Context/ThemeContext";

function EditProfile(props) {
  const { checkLogin } = useContext(ThemeContext);
  // const handleUpdate = () =>{

  //     alert("click")
  //     // let data2 = checkLogin;
  //     // data2 = data2.find(item =>
  //     //   item.id === id);
  //     //   let res = await axios.put('http://localhost:3006/user', data2);
  //     //   if (res && res.data2) {
  //     //       let newUser = res.data2;
  //     //       // mang rỗng [ ] đăng ký
  //     //       setCheckLogin(newUser); //user
  //     //   }

  // }
  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Thông tin cá nhân
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {checkLogin.map((item) => {
            return (
              <div key={item.id} className="modal-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Tài khoản:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.account}
                      variant="filled"
                      name={item.account}
                    />
                    {/* <p classnameName="text-muted mb-0">{item.account}</p> */}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Họ tên:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.name}
                      variant="filled"
                      name={item.name}
                    />
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Ngày tháng năm sinh:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.date}
                      variant="filled"
                      name={item.date}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.email}
                      variant="filled"
                      name={item.email}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Địa chỉ:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.address}
                      variant="filled"
                      name={item.address}
                    />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Số điện thoại:</p>
                  </div>
                  <div className="col-sm-9">
                    <TextField
                      id="filled-basic"
                      label={item.phone}
                      variant="filled"
                      name={item.phone}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
