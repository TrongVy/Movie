import movieApi from 'apis/movieApi'
import { SET_THONG_TIN_PHIM } from './type'

// export const actUpdateMovie = formData => {
//     return (
//         movieApi.upDateMovie(formData)
//         .then( res => {
//             console.log(res)
//         })
//         .catch( err => {
//             console.log(err.response?.data)
//         })
//     )
// }


export const laythongTinPhim = maPhim => {
    return async(dispatch) => {
        try {
            const result = await movieApi.layThongTinPhim(maPhim)
            dispatch({
                type: SET_THONG_TIN_PHIM,
                payload: result.data.content
            })
            // console.log(result.data.content)
        }
        catch(err)  {
            console.log(err)
        }
    }
}