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
import React, { useContext } from "react";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { ToastContainer, toast } from "react-toastify";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Cart(props) {
  const { myCart,setMycart,totalCart,setTotalCart,countCart,setCountCart } = useContext(ThemeContext);
   //history
  //  const [payment,setPayment] = useState(false);
   const history = useNavigate();
  //   const handleChange = (event: SelectChangeEvent) => {
  //     setAge(event.target.value as string);
  //   };
  //delete 
  //delete item cart
  // console.log(myCart.priceNew)
  const handleDeleteItem= (id) => {
    let data = myCart;
    data = data.filter(item => item.id !== id)  
    setMycart(data);
    setCountCart(() =>( Number(countCart-1)));
    // setTotalCart((item) =>( Number(totalCart - item)));
    };
  const handlePay = () =>{
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
  }
  return (
    <Container maxWidth="xl">
      <Container>
        <Box className="cart-header-items ">
         {
          myCart.length === 0 ? (
            <Typography variant="h4">Sản phẩm trong giỏ không có:</Typography>
          ) : (
            <Typography variant="h4">Có {countCart} sản phẩm trong giỏ hàng:</Typography>     
            )
          }
         
         {/* <Typography variant="h4">Sản phẩm trong giỏ hàng:</Typography> */}
          {myCart.length >=1 && myCart.slice(0).map((item, index) => {
            return (
              <Box key={index} className="cart-items">
                <div className="row">
                  <div className="col-md-3">
                    <img className="imgCart" src={item.img} />
                  </div>
                  <div className="col-md-3">
                    <h4>{item.name}</h4>
                    <p className="text-danger font-weight-bold">{item.priceNew.toLocaleString()} VNĐ</p>
                  </div>
                  <div className="col-md-3 d-flex">
                    <Button className="btnCount"  variant="contained" color="success" size="small">
                      <AddIcon />
                    </Button>
                    <p className="pCount">1</p>
                    <Button className="btnCount" variant="contained" color="success" size="small">
                    <HorizontalRuleIcon />
                    </Button>
                  </div>
                  <div className="col-md-3">
                    <Button className="btnCount"  variant="contained" color="error"  size="small" onClick={() =>handleDeleteItem(item.id)}>
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
        <Typography variant="h6">Tổng giá tiền thanh toán:<p className="text-danger ">{totalCart.toLocaleString()} VNĐ</p></Typography>
       {
        myCart.length === 0 ? (
          <Button variant="contained" color="success" disabled
        >
        Hoàn tất thanh toán
      </Button>
        ) : (
          <Button variant="contained" color="success" onClick={() => handlePay()}
        >
        Hoàn tất thanh toán
      </Button>
        )
       }
      <ToastContainer />
        </Box>
      </Container>
    </Container>
  );
}

export default Cart;
