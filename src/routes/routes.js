import About from "containers/client/about/About";
import Home from "containers/client/home/Home";
import KhuyenMai from "containers/client/khuyenMai/KhuyenMai";
import MovieDetail from "containers/client/movieDetail/MovieDetail";
import Review from "containers/client/review/Review";
import seatPlant from "containers/client/seatPlant/SeatPlant";
import Theater from "containers/client/theater/Theater";

export const clientRoutes =[
    {
        exact:true,
        path :"/",
        component:Home
    },
    {
        exact:true,
        path :"/khuyenmai",
        component:KhuyenMai
    },
    {
        exact:false,
        path :"/theater",
        component:Theater
    },
    {
        exact:false,
        path :"/about",
        component:About
    },
    {
        exact:false,
        path :"/review",
        component:Review
    },
    {
        exact:false,
        path :"/movie-detail/:movieId",
        component:MovieDetail
    },
    {
        exact:false,
        path :"/seat-plan/:showtimeId",
        component:seatPlant
    },
]