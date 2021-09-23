import React, { Component } from "react";
import "./footer1.scss"

export default class Footer1 extends Component {
  render() {
    return (
      <div className="bottom">
        <div className="bottom-nav">
          <img src="http://cinestar.com.vn/pictures/moi/9Logo/white-2018.png" />
          <div className="bottom-wrap">
            <div className="social">
              <h2>Liên kết</h2>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/CinestarVietNam"
                    target="_blank"
                    className="facebook"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCMZgMHS9vFfXoe3UA6eanyQ"
                    target="_blank"
                    className="youtube"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
              <h2>Hotline</h2>
              <a className="hotline-tel" href="tel:028 7300 8881">
                028 7300 8881
              </a>
            </div>
            <div className="cinestart-price">
              <h2>Hệ thống rạp</h2>
              <ul>
                <li data-name="8f3a5832-8340-4a43-89bc-6653817162f1">
                  <a href="http://cinestar.com.vn/rapvagia/8f3a5832-8340-4a43-89bc-6653817162f1">
                    CineStar Quốc Thanh
                  </a>
                </li>
                <li
                  className="current"
                  data-name="e08f986a-1937-419e-b1b1-759b7c74728b"
                >
                  <a href="http://cinestar.com.vn/rapvagia/e08f986a-1937-419e-b1b1-759b7c74728b">
                    CineStar Đà Lạt
                  </a>
                </li>
                <li data-name="667c7727-857e-4aac-8aeb-771a8f86cd14">
                  <a href="http://cinestar.com.vn/rapvagia/667c7727-857e-4aac-8aeb-771a8f86cd14">
                    CineStar Hai Bà Trưng
                  </a>
                </li>
                <li
                  className="current"
                  data-name="cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c"
                >
                  <a href="http://cinestar.com.vn/rapvagia/cf13e1ce-2c1f-4c73-8ce5-7ef65472db3c">
                    CineStar Bình Dương
                  </a>
                </li>
                <li
                  className="current"
                  data-name="f8a60463-5c34-49a9-9ae8-52081e387bb8"
                >
                  <a href="http://cinestar.com.vn/rapvagia/f8a60463-5c34-49a9-9ae8-52081e387bb8">
                    CineStar Huế
                  </a>
                </li>
                <li data-name="8f54df74-3796-42ea-896e-cd638eec1fe3">
                  <a href="http://cinestar.com.vn/rapvagia/8f54df74-3796-42ea-896e-cd638eec1fe3">
                    Cinestar Mỹ Tho
                  </a>
                </li>
              </ul>
            </div>
            <div className="cinestart">
              <h2>CINESTAR</h2>
              <ul>
                <li data-name="212_2">
                  <a href="http://cinestar.com.vn/phimdangchieu">
                    Phim đang chiếu
                  </a>
                </li>
                <li data-name="212_1">
                  <a href="http://cinestar.com.vn/phimsapchieu">
                    Phim sắp chiếu
                  </a>
                </li>
                <li data-name="212_3">
                  <a href="http://cinestar.com.vn/suatchieudacbiet">
                    Suất chiếu đặc biệt
                  </a>
                </li>
                <li data-name={213}>
                  <a href="http://cinestar.com.vn/lichchieu">Lịch chiếu</a>
                </li>
                <li data-name={211}>
                  <a href="http://cinestar.com.vn/khuyenmai">Khuyến mãi</a>
                </li>
              </ul>
            </div>
            <div className="info">
              <h2>Thông tin</h2>
              <ul>
                <li data-name={207}>
                  <a href="http://cinestar.com.vn/gioithieu">Giới thiệu</a>
                </li>
                <li data-name={209}>
                  <a href="http://cinestar.com.vn/tintuc">Tin tức</a>
                </li>
                <li data-name={210}>
                  <a href="http://cinestar.com.vn/hoivadap">Hỏi và đáp</a>
                </li>
                <li data-name={118}>
                  <a href="http://cinestar.com.vn/lienhe">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="info terms_and_condition">
              <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
              <ul>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-name="terms_and_condition_2"
                  >
                    Quy định chung
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-name="terms_and_condition_3"
                  >
                    Điều khoản giao dịch
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-name="terms_and_condition_4"
                  >
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    data-name="terms_and_condition_5"
                  >
                    Thông tin công ty
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-nav-icon">
          <ul>
            <li>
              <a href="javascript:void(0);" data-name={1}>
                <img
                  src="	http://cinestar.com.vn/pictures/moi/8DinhDang/dolby2.png"
                  align="DOBLY ATMOS - CÔNG NGHỆ ÂM THANH MỚI MANG TÍNH ĐỘT PHÁ"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={2}>
                <img
                  src="	http://cinestar.com.vn/pictures/moi/8DinhDang/crhistie.png"
                  align="Máy chiếu CHRISTIE"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={3}>
                <img
                  src="http://cinestar.com.vn/pictures/moi/8DinhDang/2d.jpg"
                  align="Công nghệ chiếu phim 2D Digital"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={4}>
                <img
                  src="http://cinestar.com.vn/pictures/moi/8DinhDang/3d.png"
                  align="Công nghệ chiếu phim 3D Digital"
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0);" data-name={5}>
                <img
                  src="http://cinestar.com.vn/pictures/webimages/Coffee/cinestar-coffee-02.png"
                  align="Cinestar Coffee"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
