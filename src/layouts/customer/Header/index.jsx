import {
  Badge,
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext} from "react";
import "./Header.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import Flip from "react-reveal/Flip";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import useFetch from "../../../components/customize/fetch";
function Header(props) {
  // API
  // let params = useParams();
  // const { data: dataProductItem} =
  // useFetch(`http://localhost:3006/user/${params.account}`);
  // console.log(dataProductItem);
 
  //search   ,login
  const history = useNavigate();
  const {setSearchTerm,mylogin,setMylogin,myCart,checkLogin} = useContext(ThemeContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    history("/search");
  };
  const handelChangel = (e) =>{
    setSearchTerm(e.target.value)
    history("/search");
  }
  //dropdown tài khoản
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const { profile, setProfile } = useState(false);
 //account
//  const {myAccount,setMyAccount} = useContext(ThemeContext);
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => {

  //   setOpen(true);
  // }
  // const handleClose = () => setOpen(false);
  
  // const onClickSearch = (e) =>{
  //   e.preventdefault();
  //   history("/search");
  //

  // }
  const handLogout = () =>{
    // alert("đã thoát")
    setMylogin(false);
    // history("/");
  }
  return (
    <div
    //       sx={{ height: { xs: "250px", sm: "250px", md: "200px", lg: "150px" } }}
      className="container-fuild header"

    >
      <div className=" container header-container">
        <Grid container>
          <Grid item={true} sm={12} xs={12} md={3}>
            <Link to="/" className="text-link">
              <Typography className="logo" variant="h6">
                TPSmartPhone
              </Typography>
            </Link>
          </Grid>
          <Grid item={true} sm={12} xs={12} md={4}>
          {/* <form className='search-form' > */}
            <Paper component="form" sx={{ display: "flex", marginTop: 2.5 }}>
              {" "}
              <InputBase  sx={{ ml: 1, flex: 1 }} type = "search"  placeholder="Nhập tên điện thoại ... cần tìm" onChange={(e)=>{handelChangel(e)}} 
             />
              <IconButton  type = "submit" aria-label="search" onClick={(e) =>handleSubmit(e)}>
              <SearchIcon fontSize="medium" />
              </IconButton>
            </Paper>
            {/* </form> */}
          </Grid>
          <Grid item={true} sm={12} xs={12} md={5}>
            <Box>
              <Flip cascade>
                <ul className="header-ul ">
                  <li>
                    <Link to="/checkorder" href="#" className="header-link">
                      <LocalShippingOutlinedIcon color="" fontSize="large" />{" "}
                      <p className="d-none d-sm-block">Kiểm tra đơn hàng</p>
                    </Link>
                  </li>
                  {!mylogin ? (
                    <li>
                      <Link to="/login" className="header-link">
                        <AccountCircleOutlinedIcon color="" fontSize="large" />
                        <p className="d-none d-sm-block">Tài khoản của tôi</p>
                      </Link>
                    </li>
                  ) : (
                    <div className="dropdown">
                      {/* nhan mang [] setCheckLogin  */}
                        {  checkLogin.map((item,index) => {
                          {/* if(dataProductItem.account === item.account ){ */}
                            {/* console.log(item.account) */}
                        
                    return(
                        <li key={index}  className="nav-item dropdown">
                   
                          <a 
                            className=" dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" color=""  style={{height:"50px",borderRadius:"180px"}}/> {item.account}
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <Link to={`/profile`} className="dropdown-item item-color" >
                              Profile
                            </Link>
                            <Button className="dropdown-item item-color"   onClick={()=>handLogout()}   >
                             Log out
                            </Button>
                          </div>
                        </li>
                        )
                          {/* } */}
                        })}
                    </div>
                  )}
                  {/* {open && <Login handleClose={setOpen}/>} */}
                  <li>
                    <Link to="/cart" className="header-link">
                      <ShoppingCartOutlinedIcon color="" fontSize="large" />
                      <Badge>{myCart.length}</Badge>
                      <p className="d-none d-sm-block">Giỏ hàng</p>
                    </Link>
                  </li>
                </ul>
              </Flip>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
