import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useState } from "react";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { ToastContainer, toast } from "react-toastify";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useForm } from "react-hook-form";
function Cart(props) {
  const { myCart, setMycart, setTotalCart, countCart, setCountCart } =
    useContext(ThemeContext);
  //history
  const history = useNavigate();
  // select color
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [colorItem, setColorItem] = useState("");
  // total price
  let totalPrice = 0;
  // const handleChange = (event) => {
  //   setColorItem(event.target.value);
  // };
  //delete item cart
  // console.log(myCart)
  const handleDeleteItem = (id) => {
    let data = myCart;
    data = data.filter((item) => item.id !== id);
    setMycart(data);
    setCountCart(() => Number(countCart - 1));
    toast.error("Đã xóa 1 sản phẩm trong giỏ!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleEditQuatity = (id, price, action) => {
    const currentindex = myCart.findIndex((item) => {
      return item.id === id;
    });

    if (action === "add") {
      myCart[currentindex].quantity++;
      myCart[currentindex].priceNew += price;
      // console.log(myCart[currentindex].quantity)
      setMycart([...myCart]);
    } else if (action === "sub") {
      if (myCart[currentindex].quantity > 1) {
        myCart[currentindex].quantity--;
        myCart[currentindex].priceNew -= price;
      } else {
        myCart[currentindex].quantity = 1;
        myCart[currentindex].priceNew = price;
      }
      setMycart([...myCart]);
    }
  };

  // đặt hàng
  const handlePay = (data) => {
    // console.log(data);
    setMycart([]);
    setTotalCart(0);

    toast.success("Đã đặt hàng thành công!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        history("/");
        resolve(true);
      }, 3000);
    });
  };

  return (
    <Container maxWidth="xl">
      <Container>
        <Box className="cart-header-items ">
          {myCart.length === 0 ? (
            <Typography variant="h4">Sản phẩm trong giỏ không có:</Typography>
          ) : (
            <Typography variant="h4">
              Có {countCart} sản phẩm trong giỏ hàng:
            </Typography>
          )}

          {myCart.length >= 1 &&
            myCart.slice(0).map((item, index) => {
              totalPrice += item.price * item.quantity;
              return (
                <Box key={index} className="cart-items">
                  <div className="row">
                    <div className="col-md-3">
                      <img className="imgCart" src={item.img} />
                    </div>
                    <div className="col-md-3">
                      <h4>{item.name}</h4>
                      <p className="text-danger font-weight-bold">
                        {item.priceNew.toLocaleString()} VNĐ
                      </p>
                      {/* <div className="d-flex list-color-item">
                        <Box key={index} sx={{ minWidth: 80 }}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Color
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={colorItem}
                              label="Color"
                              onChange={handleChange}
                            >
                              {item.color.map((item2, index) => {
                                return (
                                  <MenuItem value={item2}>{item2}</MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Box>
                      </div> */}
                    </div>
                    <div className="col-md-3 d-flex">
                      <Button
                        className="btnCount"
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() =>
                          handleEditQuatity(item.id, item.price, "add")
                        }
                      >
                        <AddIcon />
                      </Button>
                      <p className="pCount">{item.quantity}</p>
                      <Button
                        className="btnCount"
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() =>
                          handleEditQuatity(item.id, item.price, "sub")
                        }
                      >
                        <HorizontalRuleIcon />
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        className="btnCount"
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </div>
                  </div>

                  {/* <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    // label="Age"
                    // onChange={handleChange}
                  >
                    <MenuItem value={item.color}>{item.color}</MenuItem>
                    <MenuItem value={item.color}>{item.color}</MenuItem>
                    <MenuItem value={item.color}>{item.color}</MenuItem>
                  </Select>
                </FormControl> */}
                </Box>
              );
            })}
        </Box>
        {/* onSubmit={handleSubmit(handlePay)} */}
        <form className="mx-1 mx-md-4" >
        <div className="row">
          <div className="col-md-6">
          <h4> Thông tin đặt hàng</h4>
          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <TextField
                type="text"
                id="form3Example4cd"
                label="Họ tên"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="p-error">Mời bạn nhập Họ tên</p>
              )}
            </div>
          </div>
          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <TextField
                type="text"
                id="form3Example5cd"
                label="Email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="p-error">Mời bạn nhập email</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="p-error">Email chưa đúng định dạng</p>
              )}
            </div>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <TextField
                type="text"
                id="form3Example8cd"
                label="Số Điện Thoại"
                name="phone"
                {...register("phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <p className="p-error">Mời bạn nhập số điện thoại</p>
              )}
              {errors.phone?.type === "pattern" && (
                <p className="p-error">Số điện thoại chưa đúng định dạng</p>
              )}
            </div>
          </div>
          <FormLabel id="demo-radio-buttons-group-label">Gender:</FormLabel>
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

          <div className="d-flex flex-row align-items-center mb-4">
            <div className="form-outline flex-fill mb-0">
              <TextField
                type="text"
                id="form3Example7cd"
                label="Địa chỉ"
                name="address"
                {...register("address", { required: true })}
              />
              {errors.address?.type === "required" && (
                <p className="p-error">Mời bạn nhập địa chỉ</p>
              )}
            </div>
          </div>
          </div>
          <div className="col-md-6">
          <Box className="totalItem text-center">
            <Typography variant="h6">
              Tổng giá tiền thanh toán:
              <p className="text-danger ">{totalPrice.toLocaleString()} VNĐ</p>
            </Typography>
            {myCart.length === 0 ? (
              <Button variant="contained" color="success" disabled>
                Hoàn tất thanh toán
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={() => handlePay()}
              >
                Hoàn tất thanh toán
              </Button>
            )}
            <ToastContainer />
          </Box>
          </div>
        </div>
       

         
        </form>
      </Container>
    </Container>
  );
}

export default Cart;
