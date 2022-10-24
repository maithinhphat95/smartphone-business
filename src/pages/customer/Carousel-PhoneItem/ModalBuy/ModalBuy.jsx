import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  import { Container } from "@mui/system";
  import React, { useContext, useState } from "react";
  import AddIcon from '@mui/icons-material/Add';
  import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
  import { ToastContainer, toast } from "react-toastify";
  import { useNavigate } from "react-router-dom";
  import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ThemeContext from "../../../../components/customer/Context/ThemeContext";
import "./ModalBuy.scss";


function ModalBuy(props) {
    const { myCart,
      setMycart,
      totalCart,
      setTotalCart,
      countCart,
      setCountCart,myModalBuy, setMyModalBuy,  totalModal,setTotalModal } = useContext(ThemeContext);
   //history
   const [countItem,setCountItem] = useState(1);
   const history = useNavigate();
// select color
const [colorItem, setColorItem] = useState('');

// total price
let totalPrice = 0;
const handleChange = (event) => {
  setColorItem(event.target.value);
};
  //delete item cart
  // console.log(myCart)
  const handleDeleteItem = (id) => {
    let data = myModalBuy;
    data = data.filter((item) => item.id !== id);
    setMyModalBuy(data);
    // setCountCart(() => Number(countCart - 1));
    toast.error('Đã xóa sản phẩm trong giỏ!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    return new Promise((resolve) => {
      setTimeout(() => {
        history("/");
        resolve(true);
      }, 3000);
    });
  };

const handleEditQuatity = (id,price,action) =>{
  const currentindex = myModalBuy.findIndex((item)=>{return item.id === id})

  if(action === "add"){
    myModalBuy[currentindex].quantity++;
    myModalBuy[currentindex].priceNew  += price ;
    // console.log(myCart[currentindex].quantity)
    setMyModalBuy([...myModalBuy]);
  }else if(action === "sub"){
    if( myModalBuy[currentindex].quantity >1){
      myModalBuy[currentindex].quantity--;
      myModalBuy[currentindex].priceNew  -= price ;
    }else{
      myModalBuy[currentindex].quantity=1;
      myModalBuy[currentindex].priceNew  = price;
  }
  setMyModalBuy([...myModalBuy])
  }
}

   



  const handlePay = () => {
    setMyModalBuy([]);
    setTotalModal(0);

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
        // <!-- Modal -->
        // tabIndex={-1}
<div className="modal fade" id="exampleModal" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Có {countItem} sản phẩm thanh toán</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/* body */}
        <Container maxWidth="xl">
      <Container>
        <Box className="cart-header-items ">
          {/* {myCart.length === 0 ? (
            <Typography variant="h4">Sản phẩm trong giỏ không có:</Typography>
          ) : (
            <Typography variant="h4">
              Có {countCart} sản phẩm trong giỏ hàng:
            </Typography>
          )} */}

          {/* <Typography variant="h4">Sản phẩm trong giỏ hàng:</Typography> */}
          {myModalBuy.length >= 1 &&
            myModalBuy.slice(0).map((item, index) => {
              totalPrice += item.price*item.quantity;
              return (
                <Box key={index} className="cart-items">
                  <div className="row">
                    <div className="col-md-3">
                      <img className="imgCart" src={item.img} />
                    </div>
                    <div className="col-md-3">
                      <h6>{item.name}</h6>
                      <p className="text-danger font-weight-bold">
                        {item.priceNew.toLocaleString()} VNĐ
                      </p>
                      <div className="d-flex list-color-item">
                        <Box  sx={{ minWidth: 80 }}>
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
                                  <MenuItem key={index} value={item2}>{item2}</MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <Button
                        className="btnCount"
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleEditQuatity(item.id,item.price,"add")}
                      >
                        <AddIcon />
                      </Button>
                      <p className="pCount">{item.quantity}</p>
                        <Button
                        className="btnCount"
                        variant="contained"
                        color="success"
                        size="small"
                        onClick={() => handleEditQuatity(item.id,item.price,"sub")}
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
                        data-dismiss="modal"
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
        <Box className="totalItem text-center">
          <Typography variant="h6">
            Tổng giá tiền thanh toán:
            <p className="text-danger ">{totalPrice.toLocaleString()} VNĐ</p>
          </Typography>
          {/* {myCart.length === 0 ? (
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
          )} */}
          <ToastContainer />
        </Box>
      </Container>
    </Container>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={() => handlePay()}>Hoàn tất đặt hàng</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default ModalBuy;