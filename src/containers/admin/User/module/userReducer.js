import { GET_All_USER_FAIL, GET_All_USER_REQUEST, GET_All_USER_SUCCESS } from "./types"

const initialState = {
    user: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_All_USER_REQUEST:
            return { ...state, loading: true };

        case GET_All_USER_SUCCESS:
            return { ...state, loading: false, user: payload };

        case GET_All_USER_FAIL:
            return { ...state, loading: false, error: payload };

        default:
            return state
    }
}
export default userReducer