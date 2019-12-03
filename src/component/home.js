
import React, { Component } from 'react';
import {Button,Card} from 'react-bootstrap';


export default class home extends Component {
  render(){
      return(
        <div className="container">
          <aside>
          <p>DANH MỤC SẢN PHẨM</p>
        <table>
          <tbody><tr>
              <th>Sách tiếng Việt</th>
            </tr>
            <tr>
              <td>Sách văn học</td>
            </tr>
            <tr>
              <td>Sách thiếu nhi</td>
            </tr>
            <tr>
              <td>Sách kinh tế</td>
            </tr>
            <tr>
              <td>Sách tham khảo</td>
            </tr>
            <tr>
              <td>Sách lịch sử</td>
            </tr>
            <tr>
              <td>Sách khoa học</td>
            </tr>
            <tr>
              <td>Từ điển</td>
            </tr>
            <tr>
              <th>Truyện</th>
            </tr>
            <tr>
              <td>Thám hiểm</td>
            </tr>
            <tr>
              <td>Doremon</td>
            </tr>
            <tr>
              <td>Trạng Quỳnh</td>
            </tr>
            <tr>
              <td>Conan</td>
            </tr>
            <tr>
              <th>Văn phòng phẩm</th>
            </tr>
            <tr>
              <td>Sản phẩm mới</td>
            </tr>
            <tr>
              <td>Tập Vở</td>
            </tr>
            <tr>
              <td>Dụng cụ học sinh</td>
            </tr>
            <tr>
              <th>Ebook</th>
            </tr>
            <tr>
              <td>Ebook chọn lọc</td>
            </tr>
            <tr>
              <td>Ebook mới phát hành</td>
            </tr>
            <tr>
              <td>Ebook kinh tế</td>
            </tr>
            <tr>
              <td>Ebook chuyên ngành</td>
            </tr>
            <tr>
              <td>Ebook thiếu nhi</td>
            </tr>
            <tr>
              <td>Ebook tryện tranh</td>
            </tr>
            <tr>
              <td>Ebook kỹ năng sống</td>
            </tr>
            <tr>
              <td>Ebook văn học</td>
            </tr>
          </tbody></table>
          </aside>
          <main>
            <p className="title_main">NHỮNG DÒNG SÁCH ĐƯỢC TIỀM KIẾM NHIỀU</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img className="image" src="./img/sach1.jpg" width="350px"/>
                <div className="card-body">
                  <h5>Từ TRang Sach Đến Phim</h5>
                  <h5 style={{color: 'red'}}>30.000 <sup>đ</sup><tt><strike>45.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img src="./img/sach3.jpg" width="350px"/>
                <div className="card-body">
                <h5>Văn Học Việt Nam</h5>
                  <h5 style={{color: 'red'}}>60.000 <sup>đ</sup><tt><strike>70.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a> 
                </div>
              </div>
            </div>
          </div>
          <blockquote><i>"đọc sách đem lại sự thư giãn và cảm thấy vui, là nguồn gốc tuyệt vời của sự hưởng thụ,<br/>
               mọi nguồn cảm hứng, chỉ cho chúng ta mọi con đường đi với những kiến thức tuyệt vời,<br/> 
               nó giúp ta trở thành một người thành công trong cuộc sống này."</i></blockquote>
          <div className="container-fluid">
            <div className="row">
              <div className="col-3"><img src="./img/ebook1.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook2.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook3.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook4.jpg" width="250px" height="250px"/></div>
            </div>
            <div className="row">
              <div className="col-3"><img src="./img/ebook5.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook6.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook7.jpg" width="250px" height="250px"/></div>
              <div className="col-3"><img src="./img/ebook8.jpg" width="250px" height="250px"/></div>
            </div>
          </div>
          <p className="title_main">VĂN PHÒNG PHẨM</p>
          <div className="BT_top">
            <button id="BT1" type="button" class="btn btn-secondary">MỚI</button>
            <button id="BT2" type="button" class="btn btn-secondary">NỔI BẬT</button>
            <button id="BT3" type="button" class="btn btn-secondary">GIẢM GIÁ</button>
          </div>
          <div className="card-deck">
            <div className="card">
              <img  src="./img/column1.jpg" height="250px"/>
                <h5 className="card-title">Dụng Cụ Hoc Vẽ</h5>
                <h5 style={{color: 'red'}}>60.000 <sup>đ</sup><tt><strike>70.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a> 
            </div>
            <div className="card">
              <img src="./img/column2.jpg" height="250px" />
                <h5 className="card-title">Vở</h5>  
                <h5 style={{color: 'red'}}>60.000 <sup>đ</sup><tt><strike>70.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a>           
            </div>
            <div className="card">
              <img  src="./img/column3.jpg" height="250px"/>           
                <h5 className="card-title">Bút</h5>    
                <h5 style={{color: 'red'}}>60.000 <sup>đ</sup><tt><strike>70.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a>       
            </div>
            <div className="card">
              <img  src="./img/column4.jpg" height="250px"/>         
                <h5 className="card-title">Túi Đựng Dụng Cụ</h5>  
                <h5 style={{color: 'red'}}>60.000 <sup>đ</sup><tt><strike>70.000<sup>đ</sup></strike></tt></h5>
                   <br/>
                  <a href="#" className="btn btn-primary">mua hàng</a>       
            </div>
          </div>
          <div className="logo">
            <img id="logo1" src="./img/logo1.jpg" width="100px"/>
            <img id="logo2" src="./img/logo2.jpg" width="100px"/>
            <img id="logo3" src="./img/logo3.jpg" width="100px"/>
            <img id="logo4" src="./img/logo4.jpg" width="100px"/>
            <img id="logo5" src="./img/logo5.jpg" width="100px"/>
          </div>
          </main>
        </div>
      );
    }
}