import { actFetchAllMovie } from "containers/client/home/module/action";
import React, { Component } from "react";
import { connect } from "react-redux";
import PutMovie from "../PutMovie/PutMovie";
import actDeleteFilm from "./module/action";
import ReactPaginate from "react-paginate";
import "./scss/ListMovieAdmin.scss";

class ListMovieAdmin extends Component {
  state = {
    movie: null,
    pageNumber: 0,
    search: null,
  };

  hangdleMovie = (movie) => {
    this.setState({ movie });
  };

  onSearch = (e) => {
    return this.setState({ search: e.target.value });
  };

  render() {
    // paginnation
    const moviePerPage = 10;
    const pagesVisited = this.state.pageNumber * moviePerPage;
    const pageCount = Math.ceil(this.props.listMovie.length / moviePerPage);
    const onPageChange = ({ selected }) => {
      this.setState({
        pageNumber: selected,
      });
    };

    // search
    const { search } = this.state;
    const filteredMovie = this.props.listMovie.filter((movie) => {
      if (search) {
        return movie.tenPhim.toLowerCase().indexOf(search.toLowerCase()) != -1;
      } else {
        return this.props.listMovie;
      }
    });

    return (
      <>
        <form className="form-inline my-2 my-lg-4 float-right">
          <input
            className="form-control mr-sm-2"
            placeholder="Tên phim"
            type="search"
            aria-label="Search"
            onChange={this.onSearch}
          />
        </form>
        <div className="row float-left align-items-lg-end justify-content-center">
          {filteredMovie
            .slice(pagesVisited, pagesVisited + moviePerPage)
            .map((movie) => {
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
                    onClick={() =>
                      this.props.fetchDeleteFilm(maPhim, this.props.token)
                    }
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                </div>
              );
            })}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttns"}
            nextLinkClassName={"nextBttns"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
          <PutMovie hangdleMovie={this.state.movie} />
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.fetchAllMovies();
  }
}

const mapStateToProps = (state) => ({
  listMovie: state.movieListReducer.listMovie,
  token: state.authReducer.currentUser.accessToken,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllMovies: () => {
    dispatch(actFetchAllMovie());
  },
  fetchDeleteFilm: (maPhim, token) => {
    dispatch(actDeleteFilm(maPhim, token));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListMovieAdmin);
