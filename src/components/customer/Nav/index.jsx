import React from "react";
import "./Nav.scss";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { Link, useParams } from "react-router-dom";

function Nav(props) {
  let { producer } = useParams();
  return (
    <div className="container-fuild nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          {/* <a class="navbar-brand" href="#">
            Navbar
          </a> */}
          <button
            className="navbar-toggler btn btn-secondary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
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
                  <Link to="/phones/Apple" className="dropdown-item">
                    Apple (iPhone)
                  </Link>
                  <Link to="/phones/SamSung" className="dropdown-item">
                    Samsung
                  </Link>
                  <Link to="/phones/Oppo" className="dropdown-item">
                    {" "}
                    OPP
                  </Link>
                  <Link to="/phones/Xiaomi" className="dropdown-item">
                    Xiaomi
                  </Link>
                  <Link to="/phones/Vivo" className="dropdown-item">
                    Vivo
                  </Link>
                  <Link to="/phones/Nokia" className="dropdown-item">
                    Nokia
                  </Link>
                  <h5>Mức giá</h5>
                  <Link to="/phones/duoi-2-trieu" className="dropdown-item">
                    Dưới 2 triệu
                  </Link>
                  <Link
                    to="/phones/tu-2-4-trieu"
                    className="dropdown-item"
                    href="#"
                  >
                    Từ 2 - 4 triệu
                  </Link>
                  <Link to="/phones/tu-4-7-trieu" className="dropdown-item">
                    Từ 4 - 7 triệu
                  </Link>
                  <Link
                    to="/phones/tu-7-13-trieu"
                    className="dropdown-item"
                    href="#"
                  >
                    Từ 7 - 13 triệu
                  </Link>
                  <Link to="/phones/tren-13-trieu" className="dropdown-item">
                    Trên 13 triệu
                  </Link>
                </div>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <LaptopMacOutlinedIcon fontSize="smaill" /> Laptop
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <ComputerOutlinedIcon fontSize="smaill" /> Máy tính bảng
                </a>
              </li>
              <li>
                <a className="nav-link">
                  <HeadphonesOutlinedIcon fontSize="smaill" /> Phụ kiện
                </a>
              </li>
              <li>
                <a href="#" className="nav-link">
                  <AutoAwesomeOutlinedIcon fontSize="smaill" /> KHUYẾN MÃI
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
