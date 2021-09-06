import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeUuDai.scss'
class CustomSlide extends Component {

  render() {
    const { img, ...props } = this.props;
    return (
      <div {...props}>
        <h3 className='home__uu_dai_bg_img'>{(img)}</h3>
      </div>
    );
  }
}

export default class HomeUuDai extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 4,
      arrows: false,
    };
    return (
      <div className='container' style={{height:'18rem',paddingTop: '2rem' }}>
        <h3 className='home__text_uu_dai'> <img src="./img-khuyenMai/icon-promotion.png"/> ƯU ĐÃI</h3>
        <Slider style={{}} {...settings}>
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/c_monday.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/big-star.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/c'member.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/hssv.jpg" />
            }
          />
          <CustomSlide
            img={
              <img className='img__member img-fluid' style={{width: '90%'}}  src="./img-khuyenMai/c_ten.jpg" />
            }
          />
        </Slider>
      </div>
    );
  }
}
