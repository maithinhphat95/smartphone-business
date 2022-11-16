import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Flip from "react-reveal/Flip";
import {
  Badge,
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
  Box,
} from "@mui/material";

import {
  LocalShippingOutlined,
  ShoppingCartOutlined,
  AccountCircleOutlined,
  Search,
  Logout,
  AccountBox,
} from "@mui/icons-material";
import useFetch from "../../../components/customize/fetch";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import { login, logout } from "../../../redux/common/userReducer";
import "./Header.scss";
function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, currentUser, userList } = useSelector((state) => state.user);

  // API
  const { data: dataProductItem } = useFetch(`http://localhost:3006/userList/`);

  const { setSearchTerm, mylogin, setMylogin, myCart } =
    useContext(ThemeContext);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    navigate("/search");
  };

  const handleLogout = () => {
    setMylogin(false); //useContext
    dispatch(logout());
    navigate("/");
  };
  return (
    <Container
      maxWidth="xl"
      className="header"
      sx={{ height: { xs: "250px", sm: "250px", md: "200px", lg: "150px" } }}
    >
      <Container className="header-container">
        <Grid container>
          <Grid item={true} sm={12} xs={12} md={2}>
            <Link to="/" className="text-link">
              <Typography className="logo" variant="h6">
                TPSmartPhone
              </Typography>
            </Link>
          </Grid>
          <Grid item={true} sm={12} xs={12} md={5}>
            {/* <form className='search-form' > */}
            <Paper component="form" sx={{ display: "flex", marginTop: 2.5 }}>
              {" "}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                type="search"
                placeholder="Nhập tên điện thoại ... cần tìm"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <IconButton
                type="submit"
                aria-label="search"
                onClick={(e) => handleSearch(e)}
              >
                <Search fontSize="medium" />
              </IconButton>
            </Paper>
            {/* </form> */}
          </Grid>
          <Grid item={true} sm={12} xs={12} md={5}>
            <Box>
              <div>
                <ul className="header-ul ">
                  <li>
                    <Link to="/checkorder" href="#" className="header-link">
                      <LocalShippingOutlined color="" fontSize="large" />{" "}
                      <p className="d-none d-sm-block">Kiểm tra đơn hàng</p>
                    </Link>
                  </li>
                  {!isLogin ? (
                    <li>
                      <Link to="/login" className="header-link">
                        <AccountCircleOutlined color="" fontSize="large" />
                        <p className="d-none d-sm-block">Tài khoản của tôi</p>
                      </Link>
                    </li>
                  ) : (
                    <div className="dropdown">
                      <div className="nav-item dropdown">
                        <a
                          className=" dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img
                            src={currentUser.img}
                            color=""
                            style={{
                              height: "50px",
                              borderRadius: "180px",
                            }}
                          />{" "}
                          {currentUser.account}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Button
                            className="dropdown-item item-color"
                            href="#"
                            endIcon={<AccountBox />}
                          >
                            Profile
                          </Button>
                          <Button
                            onClick={() => handleLogout()}
                            className="dropdown-item item-color"
                            endIcon={<Logout />}
                          >
                            Log out
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* {open && <Login handleClose={setOpen}/>} */}
                  <li>
                    <Link to="/cart" className="header-link">
                      <ShoppingCartOutlined color="" fontSize="large" />
                      <Badge>{myCart.length}</Badge>
                      <p className="d-none d-sm-block">Giỏ hàng</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Header;
