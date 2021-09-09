import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgKhuyenMaiStyle from "./TheThanhVien.module.scss";
import "./TheThanhVien.scss";
import Popup from "./Poppup/Popup";
class CustomSlide extends Component {
  render() {
    const { img, ...props } = this.props;
    return (
      <div {...props}>
        <h3>{img}</h3>
        <a
          data-toggle="modal"
          data-target="#staticBackdrop"
          className="active-member"
        >
          XEM CHI TIẾT
        </a>
      </div>
    );
  }
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className= {[className], imgKhuyenMaiStyle['slick-next']}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={[className], imgKhuyenMaiStyle['slick-prev'] }
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

export default class TheThanhVien extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    };
    return (
      <div>
        <h3 style={{ color: "white", fontWeight: "revert", padding: "40px 0" }}>
          THÀNH VIÊN
        </h3>
        <Slider className={imgKhuyenMaiStyle["slick-list"]} {...settings}>
          <CustomSlide
            data-toggle="modal"
            data-target="#staticBackdrop"
            img={
              <img
                className={imgKhuyenMaiStyle["img__member"]}
                src="./img-khuyenMai/friend.png"
              />
            }
          />
          <CustomSlide
            data-toggle="modal"
            data-target="#staticBackdrop"
            img={
              <img
                className={imgKhuyenMaiStyle["img__member"]}
                src="./img-khuyenMai/vip.png"
              />
            }
          />
          <CustomSlide
            data-toggle="modal"
            data-target="#staticBackdrop"
            img={
              <img
                className={imgKhuyenMaiStyle["img__member"]}
                src="./img-khuyenMai/the-dsv-web.jpg"
              />
            }
          />
        </Slider>
        <Popup />
      </div>
    );
  }
}
