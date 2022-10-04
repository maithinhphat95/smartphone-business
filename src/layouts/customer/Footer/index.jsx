import { Grid, Typography } from "@mui/material";
import React from "react";
import "./Footer.scss";
import { FaCcPaypal, FaCcVisa } from "react-icons/fa";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ApprovalIcon from "@mui/icons-material/Approval";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="container-fluid footer">
      <div className="container content-footer">
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <div className="content-footer-ul">
              <ul>
                <li>
                  <a href="https://frt.vn/" target="_blank">Giới thiệu về công ty</a>
                </li>
                <li>
                  <Link to="/question">Câu hỏi thường gặp mua hàng</Link>
                </li>
                <li>
                  <Link to="/aboutSecurity">Chính sách bảo mật</Link>
                </li>
                <li>
                  <a href="#">Tra cứu thông tin bảo hành</a>
                </li>
                <li>
                  <a href="https://vn.indeed.com/jobs?q=C%E1%BB%ADa+H%C3%A0ng+%C4%90i%E1%BB%87n+Tho%E1%BA%A1i+Di+%C4%90%E1%BB%99ng&redirected=1&vjk=10f06e4e7772e206" target="_blank">Tin tuyển dụng</a>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <div className="content-footer-ask">
              <Typography>
                Tư vấn mua hàng (Miễn phí)
              </Typography>
              <a href="">1800 6601</a>
              <span>(Nhánh 1)</span>
              <Typography>
                Hỗ trợ kỹ thuật (8h00-22h00)
              </Typography>
              <a href="">1800 6601</a>
              <span>(Nhánh 2)</span>
              <Typography>
                Góp ý, khiếu nại dịch vụ (8h00-22h00)
              </Typography>
              <a href="">1800 6616</a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="content-footer-pay">
              <Typography>
                Hỗ trợ thanh toán:
              </Typography>
              <a title="" style={{ cursor: "none" }}>
                <FaCcVisa fontSize="50" />
              </a>
              <a title="" style={{ cursor: "none" }}>
                <FaCcPaypal fontSize="50" />
              </a>
             <Typography> Chứng nhận:</Typography>
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
