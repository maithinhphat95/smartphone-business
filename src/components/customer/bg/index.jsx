import React from "react";
import "./Imgbackground.scss";
import Banner from "../Banner";
import Rotate from 'react-reveal/Rotate';
function Imgbackground(props) {
  return (
    <div className="container-fluid imgbg">
      <div className="fpt-sale">
        <div className="category-container">
          <div className="sale-cd-tit">
          <Rotate>
            <a href="">
                <img src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/9/15/637988511655314952_top-head.png" alt="" />
            </a>
            </Rotate>
          </div>
          {/* sale */}
          {/* <div className="sale-cd-timer">
          <label id="only-time" style={{"color": "rgb(255, 255, 255)"}}>Chỉ còn </label>
          <ul>
          <li><div className="cd-box"><div className="cd-tm" style={{"color": "rgb(251, 213, 116)"}}>00</div><span style={{"color": "rgb(251, 213, 116)"}}>:</span></div></li>
          <li><div className="cd-box"><div className="cd-tm" style={{"color": "rgb(251, 213, 116)"}}>13</div><span style={{"color": "rgb(251, 213, 116)"}}>:</span></div></li>
          <li><div className="cd-box"><div className="cd-tm" style={{"color": "rgb(251, 213, 116)"}}>32</div><span style={{"color": "rgb(251, 213, 116)"}}>:</span></div></li>
          <li><div className="cd-box"><div className="cd-tm" style={{"color": "rgb(251, 213, 116)"}}>20</div></div></li>
          <a><span style={{"color": "rgb(255, 255, 255)"}}>Xem chi tiết &gt;</span></a>
          </ul>
          </div> */}
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Imgbackground;
