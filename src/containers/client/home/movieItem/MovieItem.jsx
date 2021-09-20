import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './movieItem.scss'
export default class MovieItem extends Component {
    render() {
        const { movie } = this.props;
        // console.log("movie item", movie);
        return (
            <div className="card ml-1 mr-1 movie_item " style={{ height: "350px" }}>
                <div className="movie_item__detail">
                    <p>
                        {movie.moTa.length < 20 ?"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quod itaque aut possimus voluptatem, aliquam facilis adipisci obcaecati laborum corrupti culpa quam cum tempore dicta, aspernatur aliquid porro minus ratione"
                            : movie.moTa.length < 50 ? movie.moTa : movie.moTa.slice(0, 220) + "..."}
                    </p>

                    <Link className="movie_item__detail__btn font-weight-bold"
                        to={`movie-detail/${movie.maPhim}`}
                    >Chi Tiết Phim</Link>
                    <div className="movie_item__detail__bottom">
                        <a className="
                        movie_item__detail__btn 
                        movie_item__detail__bottom__btn
                        movie_item__detail__bottom__btn__trailer
                        "
                            href={movie.trailer}
                            target="_blank"
                        >TraiLer</a>
                        {/* <button
                         className="
                         movie_item__detail__btn 
                         movie_item__detail__bottom__btn
                         movie_item__detail__bottom__btn__buy
                         ">Mua Ve</button> */}
                    </div>
                </div>
                {/* video 38 phut 19 hinh loi ? */}
                <img className="w-auto" height={300} width={200} src={movie.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title text-light">{movie.tenPhim.length < 20 ? movie.tenPhim : movie.tenPhim.slice(0, 10) + '...'}</h4>
                </div>
            </div>
        )
    }
}