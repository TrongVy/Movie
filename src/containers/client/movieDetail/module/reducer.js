import { Fetch_Movie_Detail } from "./types"

const initialState = {
    movieDetail: {},
    loading: true,
}

const movieDetailReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case Fetch_Movie_Detail:
            return { ...state, movieDetail: payload, loading: false}

        default:
            return state
    }
}
export default movieDetailReducer;