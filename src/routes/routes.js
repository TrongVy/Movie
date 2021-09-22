import Movie from "containers/admin/Movie/Movie";
import User from "containers/admin/User/User";
import Home from "containers/client/home/Home";
import KhuyenMai from "containers/client/khuyenMai/KhuyenMai";
import MovieDetail from "containers/client/movieDetail/MovieDetail";
import LichSuDatVe from "containers/client/seatPlant/LichSuDatVe";
import seatPlant from "containers/client/seatPlant/SeatPlant";
// import Register from "containers/shared/Auth/Register/Register";

export const clientRoutes = [
  {
    exact: true,
    path: "/",
    component: Home,
    isPrivate: false,
  },
  {
    exact: true,
    path: "/khuyenmai",
    component: KhuyenMai,
    isPrivate: false,
  },
  {
    exact: false,
    path: "/movie-detail/:movieId",
    component: MovieDetail,
  },
  {
    exact: false,
    path: "/seat-plan/:showtimeId",
    component: seatPlant,
    isPrivate: true,
  },
  {
    exact: false,
    path: "/thongTinNguoiDung",
    component: LichSuDatVe,
    isPrivate: true,
  },
];
export const adminRoutes = [
  {
    exact: false,
    path: "/admin",
    component: Movie,
    isPrivate: true,
  },
  {
    exact: false,
    path: "/admin/user",
    component: User,
    isPrivate: true,
  },
];
