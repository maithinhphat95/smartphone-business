import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  Icon,
} from "@mui/material";

import {
  LocalShippingOutlined,
  ShoppingCartOutlined,
  AccountCircleOutlined,
  Search,
  Logout,
  AccountBox,
  Leaderboard,
} from "@mui/icons-material";
import ThemeContext from "../../../components/customer/Context/ThemeContext";
import { login, logout } from "../../../redux/common/userReducer";
import "./Header.scss";
import { useEffect } from "react";
function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogin, currentUser } = useSelector((state) => state.user);
  const localLogin = JSON.parse(localStorage.getItem("userData")) || {};

  const { setSearchTerm, myCart } = useContext(ThemeContext);
  // Check login from local
  useEffect(() => {
    if (localLogin?.isLogin) {
      dispatch(login(localLogin.currentUser));
      navigate("/");
    }
  }, [localLogin.isLogin]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    navigate("/search");
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
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
                          className="dropdown-menu account-action"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <Button className="dropdown-item item-color" href="#">
                            <AccountBox /> Profile
                          </Button>
                          {currentUser.isAdmin && (
                            <Link
                              to={"/admin/dashboard"}
                              target="_blank"
                              className="dropdown-item item-color"
                            >
                              <Leaderboard /> Admin Dashboard
                            </Link>
                          )}
                          <Button
                            onClick={() => handleLogout()}
                            className="dropdown-item item-color"
                          >
                            <Logout /> Log out
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
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
