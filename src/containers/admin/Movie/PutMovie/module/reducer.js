import { SET_THONG_TIN_PHIM } from "./type";

const initialState = {
  ThongTinPhim: null,
};

const ThongTinPhim = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THONG_TIN_PHIM:
      return { ...state, ThongTinPhim: payload };
    default:
      return state;
  }
};

export default ThongTinPhim;
