import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeUuDai.scss'
import { Link } from "react-router-dom";

class CustomSlide extends Component {
  render() {
    const { img, ...props } = this.props;
    return (
      <div {...props}>
        <Link to='/khuyenMai'>
        <h3 className='home__uu_dai_bg_img'>{(img)}</h3>
        </Link>
      </div>
    );
  }
}

export default class HomeUuDai extends Component {
  render() {
  const {history} = this.props

    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 4,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
      ]
    };
    return (
      <div className='container home__uu_dai_main'>
        <h3 className='home__text_uu_dai'> <img src="./img-khuyenMai/icon-promotion.png" alt=""/> ƯU ĐÃI</h3>
        <Slider style={{}} {...settings}>
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/c_monday.jpg" alt="" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' src="./img-khuyenMai/big-star.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' src="./img-khuyenMai/c'member.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' src="./img-khuyenMai/hssv.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' src="./img-khuyenMai/c_ten.jpg" />
            }
          />
        </Slider>
      </div>
    );
  }
}
