
import React, { Component } from 'react'
import Banner from './banner/Banner'
import Filter from './filter/Filter'
import MovieList from './movieList/MovieList'
import Slider from './slider/Slider'
import './home.scss'
import HomeListNews from './HomeHotMovie/HomeHotMovie'
import HomeUuDai from './HomeUuDai/HomeUuDai'
import ScrollToTop from "react-scroll-to-top";

export default class Home extends Component {
    render() {
        return (
            <div className="" style={{backgroundImage: 'url(./img-KhuyenMai/bg-body.png)'}}>
                <ScrollToTop smooth color="#6f00ff" />
                <Banner />
                <Slider />
                <Filter />
              
                <div className="slider" >
                <MovieList />
                {/* <MultipleRows/> */}
                </div>
                <HomeUuDai />
                <HomeListNews />
            </div>
        )
    }
}
