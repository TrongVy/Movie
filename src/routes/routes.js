import DemoHook from "components/DemoHook/DemoHook";
import About from "containers/client/about/About";
import Home from "containers/client/home/Home";
import Login from "containers/client/login/Login";
import MovieDetail from "containers/client/movieDetail/MovieDetail";
import Register from "containers/client/register/Register";
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
        path :"/login",
        component:Login
    },
    {
        exact:false,
        path :"/register",
        component:Register
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
    {
        exact:false,
        path :"/demohook",
        component:DemoHook
    },
]