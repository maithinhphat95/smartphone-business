import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';


function Question(props) {
    return (
        <Box className='container-fuild question'>
        <Box className="container page-text" sx={{marginTop:5}}>
         <Typography  variant="h6" gutterBottom>Giải đáp 1 số thắc mắc của khách hàng:</Typography>
         <Typography variant="body1" gutterBottom>
         <strong>1:</strong> Tại sao TPSmartPhone rẻ hơn so với các đại lý khác ?
      </Typography>
      <Typography variant="body2" gutterBottom>
         <strong>Trả lời:</strong> <p>Do chúng tôi lấy lợi nhuận thấp và cập nhật giá liên tục theo giờ với phương châm giá luôn phải tốt nhất trên thị trường. Chúng tôi luôn mong muốn khách hàng có được những sản phẩm tốt với giá rẻ nhất.</p>
      </Typography>
      <Typography variant="body1" gutterBottom>
         <strong>2:</strong> Cụ thể về chính sách bao xài đổi trả trong 15 ngày.
      </Typography>
      <Typography variant="body2" gutterBottom>
         <strong>Trả lời:</strong>
      </Typography>
      <Typography variant="body1" gutterBottom>
      A, Trường hợp được đổi trả :
      </Typography>
      <Typography variant="body2" gutterBottom>
      Máy được bán ra từ TPSmartphone và còn trong thời gian 15 ngày. Tình trạng máy phải bị lỗi phần cứng từ phía nhà sản xuất. Nếu máy đáp ứng đủ chúng tôi sẽ đổi ngay lập tức cho khách hàng máy mới trong vòng 24h. Trong trường hợp hết máy, chúng tôi sẽ hoàn trả 100% tiền mua máy tại thời điểm mua cho khách hàng.
      </Typography>
      <Typography variant="body1" gutterBottom>
      B, Trường hợp không được đổi trả:
      </Typography>
      <Typography variant="body2" gutterBottom>
      <p>+ Không phải máy của Hoàng Hà Mobile bán ra.</p>
      <p>+ Thời gian sử dụng đã quá 15 ngày (sau 15 ngày chúng tôi sẽ áp dụng các chính sách bảo hành của hãng hoặc cửa hàng nếu là hàng nhập khẩu)</p>
     <p>+ Máy không phát sinh lỗi nhưng chủ máy không ưng và muốn trả lại : trường hợp này cửa hàng sẽ nhập lại máy với tối đa 85% tùy theo tình trạng mới, cũ của máy.</p>
      </Typography>
      <Typography variant="body1" gutterBottom>
      <strong>3: </strong> Khách hàng ở tỉnh làm sao để mua được máy?
      </Typography>
      <Typography variant="body2" gutterBottom>
         <strong>Trả lời:</strong> <p>Bạn vui lòng sử dụng dịch vụ mua hàng Online để được ưu tiên. Hoàng Hà Mobile hỗ trợ miễn phí hoàn toàn chi phí vận chuyển khi mua hàng trên toàn quốc, thanh toán khi nhận hàng bạn nhé. Bên mình sẽ liên hệ lại với bạn ngay khi có sản phẩm để xác nhận thông tin nhé.</p>
      </Typography>
      <Typography variant="body1" gutterBottom>
      <strong>4: </strong> Khách hàng thắc mắc về cách thức và lãi suất khi mua trả góp tại Hoàng Hà Mobile
      </Typography>
      <Typography variant="body2" gutterBottom>
         <strong>Trả lời:</strong> <p>Bạn vui lòng sử dụng dịch vụ mua hàng Online để được ưu tiên. Hoàng Hà Mobile hỗ trợ miễn phí hoàn toàn chi phí vận chuyển khi mua hàng trên toàn quốc, thanh toán khi nhận hàng bạn nhé. Bên mình sẽ liên hệ lại với bạn ngay khi có sản phẩm để xác nhận thông tin nhé.</p>
      <p>Áp dụng với những khách hàng có thẻ tín dụng của Sacombank, khách hàng có thể lựa chọn trả góp 6 tháng hoặc 12 tháng với lãi suất 0%. Thủ tục hồ sơ gồm: CMND + Thẻ tín dụng. Bạn vui lòng qua trực tiếp các chi nhánh của Hoàng Hà Mobile để được hỗ trợ.</p>
     <p>Để trả góp theo chương trình của Home Credit với ưu điểm lãi xuất thấp, thời gian làm thủ tục ngắn gọn. Yêu cầu độ tuổi từ 21 – 60, khi làm thủ tục đăng kí trả góp yêu cầu CMND, Bằng lái xe. Chi nhánh hỗ trợ làm thủ tục theo chương trình của Home Credit (Không hỗ trợ mua hàng trả góp với sản phẩm cũ) tại 194 Lê Duẩn - ĐT: 043.51.86.033</p>
     <p>Để trả góp theo chương trình của FE Credit với ưu điểm lãi xuất thấp, thời gian làm thủ tục ngắn gọn. Yêu cầu độ tuổi từ 21 – 60, khi làm thủ tục đăng kí trả góp yêu cầu CMND, Bằng lái xe, hóa đơn điện nước. Chi nhánh hỗ trợ làm thủ tục trả góp theo chương trình của FE Credit (Hỗ trợ mua hàng trả góp với tất cả các sản phẩm cho mua hàng trả góp trên trang chủ) tại 95B Phố Huế - ĐT: 0968668995</p>
     <p>Để biết chính xác mức phí trả góp cho từng hình thức để khách hàng có sự lựa chọn phù hợp, bạn vui lòng tham khảo trực tiếp tại đây:</p>
      </Typography>
      <Typography variant="body1" gutterBottom>
      <strong>5: </strong>Các cơ sở của TPSmartPhone ở đâu? Làm sao để liên hệ?
      </Typography>
      <Typography variant="body2" gutterBottom>
         <strong>Trả lời:</strong>
         <p>Để liên hệ và xem danh sách các cửa hàng của TPSmartPhone, khách hàng có thể vào website: Hoanghamobile.com xuống dưới cuối trang web truy cập vào link hệ thống các siêu thị trên toàn quốc hoặc khách hàng có thể truy cập Tại đây </p>
     <p>Update…</p>
     <p>Chúng tôi xin chân thành cảm ơn tất cả các khách hàng đã, đang và sẽ ủng hộ chúng tôi.</p>
      </Typography>
    </Box>
        </Box>
    );
}

export default Question;