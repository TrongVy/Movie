import {
    Fetch_All_Movie_False,
    Fetch_All_Movie_Request,
    Fetch_All_Movie_Success
} from "./types"

const initialState = {
    listMovie: [],
    loading: false,
    err: '',
}

const movieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Fetch_All_Movie_Request: {
            return { ...state, loading: true }
        }
        case Fetch_All_Movie_Success: {
            // console.log('movie',payload)
            return { ...state, listMovie: payload, loading: false }
        }
        case Fetch_All_Movie_False: {
            return { ...state, err: payload,loading: false }
        }
        default:
            return state
    }
}
export default movieListReducer;