import movieApi from "apis/movieApi";
import { Fetch_All_Movie_False, Fetch_All_Movie_Request, Fetch_All_Movie_Success } from "./types";

const actFetchAllMovieRequest = () => ({
    type: Fetch_All_Movie_Request,
});
const actFetchAllMovieSuccess = (listMovie) => ({
    type: Fetch_All_Movie_Success,
    payload: listMovie
});
const actFetchAllMovieFalse = (err) => ({
    type: Fetch_All_Movie_False,
    payload: err
});

export const actFetchAllMovie = () => {
    return (dispatch) => {
        dispatch(actFetchAllMovieRequest());
        movieApi.fetchAllMovies()
            .then(res => {
                // console.log("data",res.data)
                dispatch(actFetchAllMovieSuccess(res.data.content))
            })
            .catch(err => {
                actFetchAllMovieFalse(err);
            })
    }
}