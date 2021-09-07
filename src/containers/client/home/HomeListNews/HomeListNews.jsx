import React, { Component } from "react";
import {connect} from 'react-redux'
import "./HomeNews.scss";
import HomeItemNews from "./HomeItemNews/HomeItemNews";
import { actFetchAllMovie } from "../module/action";


class HomeListNews extends Component {
  render() {
    const { listMovie} = this.props
    // console.log(this.props)
    return (
      <div className="container text-light text-left mt-5">
        <h3 className='text-center mb-5'>PHIM ĐANG HOT</h3>
        <div className="row">
          {listMovie.map((movie,index) => {
            return <HomeItemNews movie={movie} key={index}/>
          })}
          
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchAllMovies();
}
}

const mapStateToProps = (state) => ({
  listMovie: state.movieListReducer.listMovie,
})
const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => {
    dispatch(actFetchAllMovie())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeListNews)