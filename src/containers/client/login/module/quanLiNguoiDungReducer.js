const initialState = {
    userLogin: {}
}

const quanLyNguoiDungReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'QuanLyNguoiDung':
            console.log(payload)
            return { ...state,userLogin: payload }

        default:
            return state
    }
}
export default quanLyNguoiDungReducer