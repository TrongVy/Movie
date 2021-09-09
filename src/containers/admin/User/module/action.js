import { GET_All_USER_FAIL, GET_All_USER_REQUEST, GET_All_USER_SUCCESS } from "./types"
import userApi from 'apis/userApi';

const actGetAllUserRequest = () => ({
    type: GET_All_USER_REQUEST
})
const actGetAllUserSuccess = (user) => ({
    type: GET_All_USER_SUCCESS,
    payload: user
})
const actGetAllUserFail = (error) => ({
    type: GET_All_USER_FAIL,
    payload: error
})

export const actGetAllUser = () => {
    return dispatch => {
        dispatch(actGetAllUserRequest());
        userApi.getAllUsersApi()
            .then(res => {
                // console.log("res user",res.data.content)
                dispatch(actGetAllUserSuccess(res.data.content));
            })
            .catch(error => {
                dispatch(actGetAllUserFail(error));
            })
    }
}
