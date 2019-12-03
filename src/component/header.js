
import React, { Component } from 'react';




export default class header extends Component {
  render(){
      return(
        <div classname="header">
        <div id="carouselExampleIndicators" className="carousel-slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./img/banner2.jpg" height="250px" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./img/banner1.jpg" height="250px" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./img/banner3.jpg" height="250px" alt="Third slide" />
            </div>
          </div>
        </div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="nav_menu">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">TRANG CHỦ <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">KHUYẾN MÃI HÓT</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" 
              aria-expanded="false">SÁCH</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Sách tiếng việt</a>
                <a className="dropdown-item" href="#">Truyện tranh</a>
                <a className="dropdown-item" href="#">Văn phòng phẩm</a>
                <div className="dropdown-divider"/>
                <a className="dropdown-item" href="#">Ebook</a>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">LIÊN HỆ</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
    );
  }
};