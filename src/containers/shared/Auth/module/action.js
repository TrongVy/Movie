import userApi from "apis/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./type";

const actLoginRequest = () => ({
    type: LOGIN_REQUEST
})
const actLoginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})
const actLoginFail = (error) => ({
    type: LOGIN_FAIL,
    payload: error
})

export const actLogin = (user,history) => {
    return async (dispatch) => {
        dispatch(actLoginRequest())
        try {
            const result = await userApi.loginApi(user);
            // console.log("thongTinDangNhap", result);
            if (result.data.statusCode === 200) {
                alert("Login success!")
                dispatch(actLoginSuccess(result.data.content));
                // navigate to home page
                history.push('./')
            }
        } catch (errors) {
            alert("Login false!")
            dispatch(actLoginFail(errors))
        }
    }
}

export const actLogout  = ()=>({
    type : LOGOUT,
    payload : null
})