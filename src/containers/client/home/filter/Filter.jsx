import movieApi from 'apis/movieApi'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import './filter.scss'
import { actFetchMovieDetailFilter } from './module/action'
import callApi from 'utils/callApi'
import { Link } from 'react-router-dom'

class Filter extends Component {
    state = {
        // movieList: '',
        // movieDetail: "",
        index: '',
        maLichChieu: "",
        chonRap: false,
        chonXuatChieu: false,
        idFilm: "",
    }

    handleChangeFilm = (e) => {
        const select = e.target;
        const id = select.children[select.selectedIndex].id;
        //call api film detail sau khi chon phim
        this.props.fetchMovieDetailFilter(id);
        this.setState({ idFilm: id })
    }

    handleChangeRap = (e) => {
        const select = e.target;
        const id = select.children[select.selectedIndex].id;

        this.setState({
            ...this.state,
            index: id
        })
    }

    handleChangeLichChieu = (e) => {
        const select = e.target;
        const id = select.children[select.selectedIndex].id;
        this.setState({
            ...this.state,
            maLichChieu: id
        })
    }

    handleClickRap = () => {
        if (this.state.idFilm === "") {
            this.setState({
                ...this.state,
                chonRap: !this.state.chonRap,
                chonXuatChieu: false
            })
        } else {
            this.setState({
                ...this.state,
                chonRap: false,
                chonXuatChieu: false
            })
        }
    }

    handleClickFilm = () => {
        this.setState({
            ...this.state,
            chonRap: false
        })
    }

    handleClickXuatChieu = () => {
        if (this.state.index === "") {
            this.setState({
                ...this.setState,
                chonXuatChieu: !this.state.chonXuatChieu
            })
        }
    }

    render() {
        const { movieDetail } = this.props;
        // console.log("phim detail", movieDetail)
        return (
            <div className=" filter">
                <div className="filter__content row">
                    {/* danh sach phim*/}
                    <div className="col-3">
                        <h4>Chọn Phim</h4>
                        <select name="film"
                            onChange={this.handleChangeFilm}
                            onClick={this.handleClickFilm}
                        >
                            <option value="" id="">Chọn Phim </option>
                            {this.props.listMovie.map((film, index) => {
                                return (
                                    <option key={index} value={film.tenPhim} id={film.maPhim}>
                                        {film.tenPhim.length > 20 ? film.tenPhim.slice(0, 20) : film.tenPhim}  </option>
                                )
                            })}
                        </select>

                    </div>
                    {/* he thong rap*/}
                    <div className="col-3 filter__col2">
                        <h4  >Chọn Rạp</h4>
                        <select className="filter_list_film" name="rap" onChange={this.handleChangeRap}
                            onClick={this.handleClickRap}
                        >
                            <option value="" id=""> Chọn Rạp Chiếu </option>
                            {(movieDetail !== '' && this.state.chonRap !== "") ? movieDetail.heThongRapChieu.map((rap, index) => {
                                return (
                                    <option key={index} id={index} >{rap.tenHeThongRap}</option>
                                )
                            }) : ""}
                        </select>
                        <p className={!this.state.chonRap ? "chon_rap" : " mt-4"}>*Vui Lòng Chọn Phim*</p>
                    </div>
                    {/* ngay chieu gio chieu */}
                    <div className="col-4">
                        <h4 >Chọn Xuất Chiếu </h4>
                        <select className="" name="lichChieu"
                            onChange={this.handleChangeLichChieu}
                            onClick={this.handleClickXuatChieu}
                        >
                            <option>Ngày Chiếu Giờ Chiếu</option>
                            {this.state.index !== '' ? movieDetail.heThongRapChieu[this.state.index].cumRapChieu[0].lichChieuPhim.map((lichChieu, index) => {
                                return (
                                    <option key={index} id={lichChieu.maLichChieu}> {new Date(lichChieu.ngayChieuGioChieu).toLocaleString()}</option>
                                )
                            }) : ""
                            }
                        </select>
                        <p className={this.state.chonXuatChieu ? "mt-4" : "chon_rap"}>*Vui Lòng Chọn Rạp*</p>
                    </div>
                    <div className="col-2">
                        <Link to={`seat-plan/${this.state.maLichChieu}`}
                            className={this.state.maLichChieu === "" ?
                                "btn btn-default ml-2 filter__btn " :
                                "btn btn-warning ml-2 font-weight-bold "}
                        >Đặt Vé</Link>
                    </div>
                </div>
            </div>
        )
    }
    // componentDidMount() {
    // }
}
const mapStateToProps = (state) => ({
    listMovie: state.movieListReducer.listMovie,
    loading: state.movieListReducer.loading,
    movieDetail: state.movieDetailFilter.movieDetail
})
const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetailFilter: (movieId) => {
        dispatch(actFetchMovieDetailFilter(movieId))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter)