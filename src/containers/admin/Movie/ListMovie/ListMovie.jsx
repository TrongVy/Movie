import { actFetchAllMovie } from "containers/client/home/module/action";
import React, { Component } from "react";
import { connect } from "react-redux";
import PutMovie from "../PutMovie/PutMovie";
import actDeleteFilm from "./action";

class ListMovie extends Component {
  state = {
    movie: null,
  };
  hangdleMovie = (movie) => {
    this.setState({ movie: movie });
  };
  render() {
    const { listMovie, token } = this.props;
    // console.log(this.props.listMovie);
    return (
      <div className="row float-left">
        {listMovie.map((movie) => {
          const { hinhAnh, tenPhim, maPhim } = movie;
          return (
            <div key={maPhim} className="col-2 border m-3">
              <div className="card" style={{ width: "100%" }}>
                <img
                  className="card-img-top"
                  width={"100%"}
                  src={hinhAnh}
                  alt
                />
                <div className="card-body">
                  <p
                    className="card-title"
                    style={{
                      overflow: "hidden",
                      height: "56px",
                      fontSize: "20px",
                    }}
                  >
                    {tenPhim}
                  </p>
                  <p className="card-text">{maPhim}</p>
                </div>
              </div>
              <button
                className="btn btn-info"
                data-toggle="modal"
                data-target="#staticBackdrop"
                onClick={() => this.hangdleMovie(movie)}
              >
                Xem
              </button>
              <button
                onClick={() => this.props.fetchDeleteFilm(maPhim, token)}
                className="btn btn-danger"
              >
                Xóa
              </button>
            </div>
          );
        })}
        <PutMovie hangdleMovie={this.state.movie} />
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchAllMovies()
  }
}

const mapStateToProps = (state) => ({
  listMovie: state.movieListReducer.listMovie,
  token: state.authReducer.currentUser.accessToken,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => {
    dispatch(actFetchAllMovie())
  },
  fetchDeleteFilm: (maPhim, token) => {
    dispatch(actDeleteFilm(maPhim, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
