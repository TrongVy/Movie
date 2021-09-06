
import React, { Component } from 'react'
import Banner from './banner/Banner'
import Filter from './filter/Filter'
import MovieList from './movieList/MovieList'
import Slider from './slider/Slider'
import './home.scss'
import HomeListNews from './HomeListNews/HomeListNews'
import HomeUuDai from './HomeUuDai/HomeUuDai'
export default class Home extends Component {
    render() {
        return (
            <div className="" style={{backgroundImage: 'url(./img-KhuyenMai/bg-body.png)'}}>
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
