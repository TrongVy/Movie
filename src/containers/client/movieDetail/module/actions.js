import { Fetch_Movie_Detail } from "./types";

export const actFetchMovieDetail = (movieDetail) => ({
    type: Fetch_Movie_Detail,
    payload: movieDetail
})
