import { Grid } from "@mui/material";
import React from "react";
import "./Footer.scss";
import { FaCcPaypal, FaCcVisa } from "react-icons/fa";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ApprovalIcon from "@mui/icons-material/Approval";

function Footer(props) {
  return (
    <div className="container-fluid footer">
      <div className="container content-footer">
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <div className="content-footer-ul">
              <ul>
                <li>
                  <a href="">Giới thiệu về công ty</a>
                </li>
                <li>
                  <a href="">Câu hỏi thường gặp mua hàng</a>
                </li>
                <li>
                  <a href="">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="">Tra cứu thông tin bảo hành</a>
                </li>
                <li>
                  <a href="">Tin tuyển dụng</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <div className="content-footer-ask">
              <p variant="" >
                Tư vấn mua hàng (Miễn phí)
              </p>
              <a href="">1800 6601</a>
              <span>(Nhánh 1)</span>
              <p variant="h4" >
                Hỗ trợ kỹ thuật Góp ý, khiếu nại dịch vụ (8h00-22h00)
              </p>
              <a href="">1800 6601</a>
              <span>(Nhánh 2)</span>
              <p variant="h4" >
                Góp ý, khiếu nại dịch vụ (8h00-22h00)
              </p>
              <a href="">1800 6616</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="content-footer-pay">
              <p variant="h4" >
                Hỗ trợ thanh toán:
              </p>
              <a title="" style={{ cursor: "none" }}>
                <FaCcVisa fontSize="50" />
              </a>
              <a title="" style={{ cursor: "none" }}>
                <FaCcPaypal fontSize="50" />
              </a>
            
             <p variant="h4" > Chứng nhận:</p>
            <a href="" style={{ cursor: "none" }}>
              <WorkspacePremiumIcon fontSize="large" />
            </a>
            <a href="" style={{ cursor: "none" }}>
              <ApprovalIcon fontSize="large" />
            </a>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
