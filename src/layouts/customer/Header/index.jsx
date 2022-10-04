import {Container,Grid,IconButton,InputBase,Paper,Typography,} from "@mui/material";
import React from "react";
import "./Header.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Flip from "react-reveal/Flip";
function Header(props) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => {

  //   setOpen(true);
  // }
  // const handleClose = () => setOpen(false);
  // const history = useNavigate();
  // const onClickSearch = (e) =>{
  //   e.preventdefault();
  //   history("/search");
  //

  // }
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
            <Paper component="form" sx={{ display: "flex", marginTop: 2.5 }}>
              {" "}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nhập tên điện thoại ... cần tìm"
                inputProps={{
                  "aria-label": "Nhập tên điện thoại ... cần tìm",
                }}
                type="search"
              />
              <Link to="/search" className="text-link">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon fontSize="medium" />
                </IconButton>
              </Link>
            </Paper>
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
                  <li>
                    <Link to="/login" className="header-link">
                      <AccountCircleOutlinedIcon color="" fontSize="large" />
                      <p className="d-none d-sm-block">Tài khoản của tôi</p>
                    </Link>
                  </li>
                  {/* {open && <Login handleClose={setOpen}/>} */}
                  <li>
                    <Link to="/cart" className="header-link">
                      <ShoppingCartOutlinedIcon color="" fontSize="large" />
                      <p className="d-none d-sm-block">Giỏ hàng</p>
                    </Link>
                  </li>
                </ul>
              </Flip>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Header;
