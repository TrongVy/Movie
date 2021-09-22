import React, { Component } from 'react'
import movieApi from 'apis/movieApi'
import { connect } from 'react-redux'
import { actFetchMovieDetail } from './module/actions'
import { Link } from 'react-router-dom'
import './movieDetail.scss'
import Loading from 'containers/shared/Loading'
class MovieDetail extends Component {

    render() {
        const { movieDetail, loading } = this.props;
        console.log("movieDetail", movieDetail)
        if (loading) return <Loading />
        return (
            <div className="movieDetail">
                <div className="movie_detail">
                    {/* MovieDetail {this.props.match.params.movieId} */}
                    <div className=" movie_detail__header">
                        <div className=" movie_detail__header__left">
                            <img className="" src={movieDetail.hinhAnh} alt="" />
                            <div className="movie_detail__header__left__trailer">
                                <a href={movieDetail.trailer} target="_blank"
                                    className=""
                                >Trailer</a>
                            </div>
                        </div>

                        <div className=" movie_detail__header__right">
                            <h2 className="font-weight-bold">{movieDetail.tenPhim}</h2>
                            <div className="movie_detail__header__right__A row">

                                <div className="col-4">
                                    <p>Ngày Khởi Chiếu </p>
                                </div>
                                <div className="col-8">
                                    <span> {movieDetail.ngayKhoiChieu}</span>
                                </div>
                            </div>
                            <div className="movie_detail__header__right__B row">

                                <div className="col-3">
                                    <p>Mô Tả</p>
                                </div>
                                <div className="col-8 movie_detail__header__right__B__8">
                                    <p>{movieDetail.moTa.length < 20 ? "Porro voluptatem perspiciatis temporibus aliquam quaerat deserunt in nihil possimus cupiditate ipsum sint rem dolorum repellat! Voluptate maiores officiis ipsum cum ut quis nostrum facilis unde omnis reprehenderit! Doloremque qui ab mollitia enim nobis, suscipit iusto sequi necessitatibus." : movieDetail.moTa.length > 300 ? movieDetail.moTa.slice(0, 300) + "..." : movieDetail.moTa
                                    }</p>

                                </div>
                            </div>
                            <div className="movie_detail__header__right__C mt-3">
                                <p>Đánh Giá : {movieDetail.danhGia}/10 IMDB</p>
                            </div>

                        </div>
                    </div>
                    <h1 className="mt-5 font-italic">Rạp - Cụm Rạp - Lịch Chiếu</h1>
                    {/* navs pills bootstrap */}
                    {movieDetail.heThongRapChieu.length !== 0 ? <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-5">
                                <div className="nav flex-column nav-pills text-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                                    {movieDetail.heThongRapChieu.map((heThongRap, index) => {
                                        return (
                                            <a key={index} className={`nav-link ${index === 0 && 'active'}`} id="v-pills-home-tab" data-toggle="pill"
                                                href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                                <img className="img-fluid mr-2" src={heThongRap.logo} alt="" height={50} width={50} />
                                                <span style={{ textTransform: "uppercase" }}>  {heThongRap.tenHeThongRap}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-8 col-7">
                                <div className="tab-content" id="v-pills-tabContent">

                                    {movieDetail.heThongRapChieu.map((heThongRap, index) => {
                                        return (
                                            <div key={index}

                                                className={`tab-pane fade show ${index === 0 && 'active'}`}
                                                id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                {heThongRap.cumRapChieu.map((cumRap, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <div className="mt-2 text-left ">
                                                                {/* <img src={cumRap.hinhAnh} height={50} width={50} alt="" /> */}
                                                                {/* <h2 className="ml-2">{cumRap.tenCumRap}</h2> */}
                                                                <a className="btn btn-danger" data-toggle="collapse" href={`#${cumRap.maCumRap}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">{cumRap.tenCumRap}</a>
                                                            </div>
                                                            <div className="collapse multi-collapse" id={`${cumRap.maCumRap}`}>
                                                                {cumRap.lichChieuPhim.map((lichChieu, index) => {
                                                                    return (
                                                                        <span key={index}>
                                                                            <Link className="btn btn-info ml-2 mt-2"
                                                                                to={`/seat-plan/${lichChieu.maLichChieu}`}
                                                                            >
                                                                                {new Date(lichChieu.ngayChieuGioChieu).toLocaleString()}
                                                                            </Link>
                                                                        </span>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>
                    </div> : <h4>Chưa Có Lịch Chiếu</h4>}
                </div>
            </div>
        )
    }

    async componentDidMount() {

        try {
            const { movieId } = this.props.match.params;
            const { data } = await movieApi.fetchMovieDetailApi(movieId);
            // console.log("data",data)
            setTimeout(() => {
                this.props.fetchMovieDetail(data.content)
            }, 1200)
            // neu co loi quang ra error
            throw new Error('error ne!')
        } catch (err) {
            console.log(err)
        }

    };
}
const mapStateToProps = (state) => ({
    movieDetail: state.movieDetailReducer.movieDetail,
    loading: state.movieDetailReducer.loading
})
const mapDispatchToProps = (dispatch) => ({
    fetchMovieDetail: (movieDetail) => {
        dispatch(actFetchMovieDetail(movieDetail))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)
