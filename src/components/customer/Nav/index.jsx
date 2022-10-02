import React from "react";
import "./Nav.scss";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Container, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function Nav(props) {
  let { producer } = useParams();
  return (
    <div  className="container-fuild nav">
      <div className="container">
        <Grid container>
          <Grid item={true} md={12} sm={12} xs={12}>
            <ul className="nav-ul">
              {/* <li>
            <a className="navbar-brand nav-link" href="#">Trang chủ</a>
            </li> */}
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
              <li className="dropdown">
                <a
                  href=""
                  className="dropdown-toggle nav-link"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <PhoneIphoneOutlinedIcon fontSize="smaill" /> Điện thoại
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <h5>Hãng sản xuất</h5>
                  <Link
                    to="/phone/Apple"
                    className="dropdown-item"
                   
                  >
                    Apple (iPhone)
                  </Link>
                  <Link
                    to="/phone/SamSung"
                    className="dropdown-item"
                    
                  >
                    Samsung
                  </Link>
                  <Link
                    to="/phone/Oppo"
                    className="dropdown-item"
                    
                  >
                    OPPO
                  </Link>
                  <Link
                    to="/phone/Xiaomi"
                    className="dropdown-item"
                   
                  >
                    Xiaomi
                  </Link>
                  <Link
                    to="/phone/Vivo"
                    className="dropdown-item"
                    
                  >
                    Vivo
                  </Link>
                  <Link
                    to="/phone/Nokia"
                    className="dropdown-item"
                    
                  >
                    Nokia
                  </Link>

                  <h5>Mức giá</h5>
                  <Link to="/phone/duoi-2-trieu" className="dropdown-item">
                    Dưới 2 triệu
                  </Link>
                  <Link to="/phone/tu-2-4-trieu" className="dropdown-item" href="#">
                    Từ 2 - 4 triệu
                  </Link>
                  <Link to="/phone/tu-4-7-trieu" className="dropdown-item" >
                    Từ 4 - 7 triệu
                  </Link>
                  <Link to="/phone/tu-7-13-trieu" className="dropdown-item" href="#">
                    Từ 7 - 13 triệu
                  </Link>
                  <Link to="/phone/tren-13-trieu" className="dropdown-item" >
                    Trên 13 triệu
                  </Link>
                </div>
                {/* righ */}
              </li>
              <li>
                <a href="#" className="nav-link">
                  <LaptopMacOutlinedIcon fontSize="smaill" /> Laptop
                </a>
              </li>
              <li>
                <a href="#"  className="nav-link">
                  <ComputerOutlinedIcon fontSize="smaill" /> Máy tính bảng
                </a>
              </li>
              <li>
                <a  className="nav-link">
                  <HeadphonesOutlinedIcon fontSize="smaill" /> Phụ kiện
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <AutoAwesomeOutlinedIcon fontSize="smaill" /> KHUYẾN MÃI
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Nav;
