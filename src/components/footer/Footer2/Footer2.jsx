import React, { Component } from "react";
import './footer2.scss'

export default class Footer2 extends Component {
  render() {
    return (
      <div className="footer">
        <div className="payment">
          <h2>Chấp nhận thanh toán</h2>
          <ul>
            <li>
              <a>
                <img
                  src="http://cinestar.com.vn/pictures/cache/webimages/9Rest/1Logo/napas-40.png"
                  alt="Thẻ thanh toán nội địa"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="http://cinestar.com.vn/pictures/moi/ThanhToan/payment-visa.png"
                  alt="Visa"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="http://cinestar.com.vn/pictures/moi/ThanhToan/payment-mastercard.png"
                  alt="mastercard"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="	http://cinestar.com.vn/pictures/webimages/9Rest/1Logo/zalopay.png"
                  alt="ZaloPay"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="	http://cinestar.com.vn/pictures/webimages/momo.jpg"
                  alt="Ví MoMo"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>
            <a
              href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=51406"
              target="_blank"
            >
              <img
                width="150px"
                src="http://cinestar.com.vn/catalog/view/theme/default/images/dathongbao.png"
                alt=" đã được duyệt"
              />
            </a>{" "}
          </p>
          <p>
            CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI SAO
            <br />
            Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM
            <br />
            Giấy CNĐKDN số: 0312742744, đăng ký lần đầu ngày 18/04/2014, đăng ký
            thay đổi lần thứ 2 ngày 15/09/2014, cấp bởi Sở KH&amp;ĐT TP.HCM
            <br />
            <br />
            2015 © <strong>CINESTAR</strong>. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}
