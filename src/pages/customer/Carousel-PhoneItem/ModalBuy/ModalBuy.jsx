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



function ModalBuy(props) {
    const { myCart,setMycart,totalCart,setTotalCart,countCart,setCountCart,myModalBuy, setMyModalBuy,  totalModal,setTotalModal } = useContext(ThemeContext);
   //history
   const [countItem,setCountItem] = useState(1);
   const history = useNavigate();
// select color
const [colorItem, setColorItem] = useState('');

const handleChange = (event) => {
  setColorItem(event.target.value);
};
  //delete item cart
  // console.log(myCart)
  const handleDeleteItem= (id) => {
    let data = myCart;
    data = data.filter(item => item.id !== id)  
    setMycart(data);
    setCountCart(() =>( Number(countCart-1)));
    // setTotalCart(
    //   data.reduce((acc,curr) => acc + Number(totalCart) - curr.priceNew,0)
    // );
    };
    const handleClickAdd = (id) => {
      // console.log(myCart);
       myCart.map((item) =>{
        if(myCart.id == id){
          setCountItem(countItem + 1);
        }
       })
     }
    
    const handleClickSub = (id) =>{
    //   let data2 = myCart;
    //  data2 = data2.filter(item => item.id !== id)  
     setCountItem(countItem - 1);
    }
  const handlePay = () =>{
    setMyModalBuy([]);
    // setTotalModal(0);

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
        // <!-- Modal -->
        // tabIndex={-1}
<div className="modal fade" id="exampleModal" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Sản phẩm thanh toán</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {/* body */}
        <Container maxWidth="xl">
      <Container>
        <Box className="cart-header-items ">
        
         
         {/* <Typography variant="h4">Sản phẩm trong giỏ hàng:</Typography> */}
          {myModalBuy.length >=1 && myModalBuy.slice(0).map((item, index) => {
            return (
              <Box key={index} className="cart-items">
                <div className="row">
                  <div className="col-md-3">
                    <img className="imgCart" src={item.img} />
                  </div>
                  <div className="col-md-3">
                    <h4>{item.name}</h4>
                    <p className="text-danger font-weight-bold">{item.priceNew.toLocaleString()} VNĐ</p>
                    <div className="d-flex list-color-item">
              <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colorItem}
          label="Color"
          onChange={handleChange}
        >
            {item.color.map((item2,index) =>{
              return(
          <MenuItem key={index} value={item2}>{item2}</MenuItem>  
              )
            })}
        </Select>
              
            </FormControl>
    </Box>
              
            </div>
                  </div>
                  <div className="col-md-3 d-flex">
                    <Button className="btnCount"  variant="contained" color="success" size="small" onClick={() => handleClickAdd(item.id)}>
                      <AddIcon />
                    </Button>
                    <p className="pCount">{countItem}</p>
                    <Button className="btnCount" variant="contained" color="success" size="small" onClick={() => handleClickSub(item.id)}>
                    <HorizontalRuleIcon />
                    </Button>
                  </div>
                  <div className="col-md-3">
                    <Button className="btnCount"  variant="contained" color="error"  size="small" onClick={() =>handleDeleteItem(item.id)}>
                      <DeleteForeverIcon />
                    </Button>
                   
                  </div>
                </div>
              </Box>
            );
        
          })}
        </Box>
        <Box className="totalItem text-center">
        <Typography variant="h6">Tổng giá tiền thanh toán:<p className="text-danger ">{totalModal.toLocaleString()} VNĐ</p></Typography>
      <ToastContainer />
        </Box>
      </Container>
    </Container>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
        <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick={() => handlePay()}>Thanh toán</button>
      </div>
    </div>
  </div>
</div>
    );
}

export default ModalBuy;