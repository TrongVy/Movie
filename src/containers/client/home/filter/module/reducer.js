import {
    Fetch_All_Movie_Detail_False, Fetch_All_Movie_Detail_Request, Fetch_All_Movie_Detail_Success
} from "./type";
const initialState = {
    movieDetail: '',
    loading: false,
    err: ''
}

const movieDetailFilter = (state = initialState, { type, payload }) => {
    switch (type) {

        case Fetch_All_Movie_Detail_Request:
            return { ...state, loading: true }
        case Fetch_All_Movie_Detail_Success: {
            return { ...state, movieDetail: payload, loading: false }
        }
        case Fetch_All_Movie_Detail_False:
            return { ...state, loading: false, err: payload }

        default:
            return state
    }
}
export default movieDetailFilter;