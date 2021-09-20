import movieApi from "apis/movieApi";
import { Fetch_All_Movie_Detail_False, Fetch_All_Movie_Detail_Request, Fetch_All_Movie_Detail_Success } from "./type";

const actFetchMovieDetailRequest = () => ({
    type: Fetch_All_Movie_Detail_Request,
});
const actFetchMovieDetailSuccess = (movieDetail) => ({
    type: Fetch_All_Movie_Detail_Success,
    payload: movieDetail
});
const actFetchMovieDetailFalse = (err) => ({
    type: Fetch_All_Movie_Detail_False,
    payload: err
});

export const actFetchMovieDetailFilter = (movieId) => {
    return (dispatch) => {
        dispatch(actFetchMovieDetailRequest());
        movieApi.fetchMovieDetailApi(movieId)
            .then(res => {
                dispatch(actFetchMovieDetailSuccess(res.data.content))
            })
            .catch(err => {
                actFetchMovieDetailFalse(err);
            })
    }
}