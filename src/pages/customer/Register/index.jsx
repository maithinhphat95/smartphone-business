import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BusinessIcon from "@mui/icons-material/Business";
import { Face, Phone } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";
import "./Register.scss";
import { addUserRequest } from "../../../redux/common/userReducer";
function Register(props) {
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  // hook
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.user.userList);
  const today = new Date().toLocaleString();
  const registerUser = ({
    account,
    password,
    name,
    email,
    phone,
    gender,
    birthday,
    address,
    adminCode,
    avatar,
  }) => {
    return {
      account: account,
      password: password,
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      birthday: birthday,
      address: address,
      img:
        avatar ||
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/599e3b95636919.5eb96c0445ea7.jpg",
      isAdmin: adminCode === "admin123",
      registerDate: today,
    };
  };

  //Toast noti
  const onHandleSubmit = async (data) => {
    // Check existing account
    const checkExist = userList.some(
      (element) => element.account === data.account
    );

    if (checkExist) {
      toast.error("Tài khoản tồn tại,đăng ký không thành công!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      toast.success("Thêm tài khoản thành công!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(addUserRequest(registerUser(data)));
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate("/login");
        resolve(true);
      }, 3000);
    });
  };
  return (
    <div className="container-fluid register">
      <div className="container">
        <section className="">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Đăng ký tài khoản
                        </p>

                        <form
                          className="mx-1 mx-md-4"
                          onSubmit={handleSubmit(onHandleSubmit)}
                        >
                          {/* Account */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <AccountCircleIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                id="form3Example1c"
                                fullWidth
                                label="Tài Khoản"
                                name="account"
                                {...register("account", { required: true })}
                              />
                              {errors.account?.type === "required" && (
                                <p className="p-error">
                                  Mời bạn nhập tài khoản
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Password */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <KeyIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="password"
                                id="form3Example3c"
                                fullWidth
                                label="Mật khẩu"
                                name="password"
                                {...register("password", {
                                  required: true,
                                  minLength: 3,
                                  // pattern:
                                  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                                })}
                              />
                              {errors.password?.type === "required" && (
                                <p className="p-error">Mời bạn nhập mật khẩu</p>
                              )}
                              {errors.password?.type === "minLength" && (
                                <p className="p-error">
                                  Mật khẩu phải lớn hơn 8 kí tự
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Re password */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <KeyIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="password"
                                id="form3Example4c"
                                fullWidth
                                label="Nhập lại mật khẩu"
                                name="repassword"
                                {...register("repassword", {
                                  required: true,
                                  validate: (value) => {
                                    const { password } = getValues();
                                    return (
                                      password === value ||
                                      "Mật khẩu không khớp nhau!"
                                    );
                                    // pattern:
                                  },
                                })}
                              />
                              {errors.repassword?.type === "required" && (
                                <p className="p-error">Mời bạn nhập mật khẩu</p>
                              )}
                              {/* {errors.repassword?.type ==="minLength" && <p className="p-error">Mật khẩu phải lớn hơn 8 kí tự</p>} */}
                              {errors.repassword && (
                                <p className="p-error">
                                  {errors.repassword.message}
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Name */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <DriveFileRenameOutlineIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                // id="form3Example4cd"
                                fullWidth
                                label="Họ tên"
                                name="name"
                                {...register("name", { required: true })}
                              />
                              {errors.name?.type === "required" && (
                                <p className="p-error">Mời bạn nhập Họ tên</p>
                              )}
                            </div>
                          </div>
                          {/* Email */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <EmailIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                // id="form3Example4cd"
                                fullWidth
                                label="Email"
                                name="email"
                                {...register("email", {
                                  required: true,
                                  pattern:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                })}
                              />
                              {errors.email?.type === "required" && (
                                <p className="p-error">Mời bạn nhập email</p>
                              )}
                              {errors.email?.type === "pattern" && (
                                <p className="p-error">
                                  Email chưa đúng định dạng
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Phone Number */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <Phone fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="number"
                                // id="form3Example4cd"
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                {...register("phone", {
                                  required: true,
                                  pattern: /^[0-9]{10}$/i,
                                })}
                              />
                              {errors.phone?.type === "required" && (
                                <p className="p-error">
                                  Mời bạn nhập phone number
                                </p>
                              )}
                              {errors.phone?.type === "pattern" && (
                                <p className="p-error">
                                  Phone number chưa đúng định dạng hoặc số ký tự
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Gender */}
                          <FormLabel id="demo-radio-buttons-group-label">
                            Gender:
                          </FormLabel>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                  label="Female"
                                  // name="gender"
                                  {...register("gender")}
                                />
                                <FormControlLabel
                                  value="male"
                                  control={<Radio />}
                                  label="Male"
                                  // name="gender"
                                  {...register("gender")}
                                />
                                <FormControlLabel
                                  value="other"
                                  control={<Radio />}
                                  label="Other"
                                  // name="gender"
                                  {...register("gender")}
                                />
                              </RadioGroup>
                            </div>
                          </div>
                          {/* Birthday */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <CalendarMonthIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="date"
                                // id="form3Example4cd"
                                fullWidth
                                name="birthday"
                                {...register("birthday", { required: true })}
                                onChange={(e) => {}}
                              />
                              {errors.birthday?.type === "required" && (
                                <p className="p-error">
                                  Mời bạn chọn ngày sinh
                                </p>
                              )}
                            </div>
                          </div>
                          {/* Address */}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <BusinessIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                // id="form3Example4cd"
                                fullWidth
                                label="Địa chỉ"
                                name="address"
                                {...register("address", { required: true })}
                              />
                              {errors.address?.type === "required" && (
                                <p className="p-error">Mời bạn nhập địa chỉ</p>
                              )}
                            </div>
                          </div>
                          {/* Avatar for user*/}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <Face fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                // id="form3Example4cd"
                                fullWidth
                                label="Avatar"
                                name="avatar"
                                {...register("avatar", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          {/* Admin Secret Code for Admin Register*/}
                          <div className="d-flex flex-row align-items-center mb-4">
                            <BusinessIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="password"
                                // id="form3Example4cd"
                                fullWidth
                                label="Admin Code"
                                name="adminCode"
                                {...register("adminCode", {
                                  required: false,
                                  pattern: /^admin123$/,
                                })}
                              />
                              {errors.adminCode?.type === "pattern" && (
                                <p className="p-error">Không phải admin</p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                            <ToastContainer />
                          </div>
                          {Object.keys(errors).length !== 0 && (
                            <ul className="error-container">
                              {errors.account?.type === "required" && (
                                <li>Mục "Tài Khoản" không được bỏ trống</li>
                              )}
                              {errors.password?.type === "required" && (
                                <li>Mục "Mật Khẩu" không được bỏ trống</li>
                              )}
                              {errors.repassword?.type === "required" && (
                                <li>
                                  Mục "Nhập Lại Mật Khẩu" không được bỏ trống
                                </li>
                              )}
                              {errors.name?.type === "required" && (
                                <li>Mục "Họ Tên" không được bỏ trống</li>
                              )}
                              {errors.email?.type === "required" && (
                                <li>Mục "Email" không được bỏ trống</li>
                              )}
                              {errors.email?.type === "pattern" && (
                                <li>Email chưa nhập đúng định dạng</li>
                              )}
                              {errors.date?.type === "required" && (
                                <li>Mục "Ngày Sinh" không được bỏ trống</li>
                              )}
                              {errors.address?.type === "required" && (
                                <li>Mục "Địa Chỉ" không được bỏ trống</li>
                              )}
                            </ul>
                          )}
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
