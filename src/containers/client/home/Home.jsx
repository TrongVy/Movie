
import React, { Component } from 'react'
import Banner from './banner/Banner'
import Filter from './filter/Filter'
import MovieList from './movieList/MovieList'
import Slider from './slider/Slider'
import './home.scss'
export default class Home extends Component {
    render() {
        return (
            <div className="">
                <Banner />
                <Slider />
                <Filter />
              
                <div className="slider" >
                <MovieList />
                {/* <MultipleRows/> */}
                </div>
            </div>
        )
    }
}
