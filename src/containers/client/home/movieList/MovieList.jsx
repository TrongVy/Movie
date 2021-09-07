import React, { Component } from 'react'
import './movieList.scss'
import MovieItem from '../movieItem/MovieItem'
import { connect } from 'react-redux'
import { actFetchAllMovie } from '../module/action'
import Slider from "react-slick";
import Loading from 'containers/shared/Loading'

class MovieList extends Component {

  renderList = () => {
    return this.props.listMovie.map((movie, index) => {
      return (

        <MovieItem movie={movie} key={index} />

      )
    })
  }

  render() {
    // console.log("movie",this.props.listMovie)
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      slidesPerRow: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };
    if (this.props.loading) return <Loading />
    return (
      <div className="mt-1">
        <Slider {...settings}>
          {this.renderList()}
        </Slider>
      </div>
    )
  }
  componentDidMount() {
      this.props.fetchAllMovies();
  }
}

const mapStateToProps = (state) => ({
  listMovie: state.movieListReducer.listMovie,
  loading: state.movieListReducer.loading
})
const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => {
    dispatch(actFetchAllMovie())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)