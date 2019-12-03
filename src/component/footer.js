
import React, { Component } from 'react';

export default class footer extends Component {
  render(){
      return(
          <div className="footer">
                  <div className="footer_left">
                  <img src="./img/logo.jpg" width="300px"/>
                  <p style={{color: 'red'}}>HỖ TRỢ KHÁCH HÀNG: 1800-8198</p>
                  <i>(Miễn phí , 8-21h kể cả T7, CN)</i>
                  <p style={{color: 'red'}}>Hotline chăm sóc khách hàng: 1900-6035</p>
                  <i>(1000đ/phút , 8-21h kể cả T7, CN)<br/>Các câu hỏi thường gặp<br/>
                     Gửi yêu cầu hỗ trợ<br/> Hướng dẫn đặt hàng<br/>
                     chính sách đổi trả</i>
                  </div>
                  <p className="footer_center">
                  <p className="footer_p" style={{color: 'red'}}>Đăng kí nhận bản tin từ Shop<br/>
                  Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                  <p id="footer_center_p" style={{color: 'red'}}>HÌNH THỨC THANH TOÁN</p>
                  <img src="./img/footerlogo.jpg" width="100px"/>
                  <img src="./img/footerlogo1.jpg" width="100px"/>
                  <img src="./img/footerlogo2.jpg" width="100px"/>
                  <img src="./img/footerlogo3.jpg" width="100px"/>
                  </p>
                  <div className="footer_right">              
                  <form className="Email" > 
                  <input  type="password" className="form-control" id="pwd" placeholder="Địa Chỉ Email Của Bạn" name="pswd" />
                  <button id="BT_dk" type="button" class="btn btn-secondary">ĐĂNG KÍ </button>
                  </form>
                  <p id="footer_right_p" style={{color: 'red'}}>Về Hồng Đức</p>
                  <i>Giới thiệu Hồng Đức<br/>Tuyển dụng<br/>
                     Chính sách bảo mật thanh toán<br/>Chính sách thanh toán<br/>
                    Điều khoản sử dụng<br/>Hội Sách Online</i>
                  </div>
          </div>
      );
    }
}