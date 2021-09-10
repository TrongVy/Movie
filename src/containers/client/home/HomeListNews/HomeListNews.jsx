import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeNews.scss";
import HomeItemNews from "./HomeItemNews/HomeItemNews";
import { actFetchAllMovie } from "../module/action";

class HomeListNews extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  genderItem = () => {
    if (this.state.isOpen) {
      return this.props.listMovie;
    }
    return this.props.listMovie.slice(0, 20);
  };

  render() {
    const { listMovie} = this.props
    // console.log(this.props)
    return (
      <div className="container text-light text-left mt-5">
        <h3 className='text-center mb-5'>PHIM ĐANG HOT</h3>
        <div className="row justify-content-center">
          {listMovie.map((movie,index) => {
            return <HomeItemNews movie={movie} key={index}/>
          })}
          <button className='btn btn-danger' onClick={this.toggle}>
            {this.state.isOpen ? "Thu lại" : "Xem thêm"}
          </button>
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
});
const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => {
    dispatch(actFetchAllMovie());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeListNews);
