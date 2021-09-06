import { createStore, combineReducers,applyMiddleware } from "redux";
import movieListReducer from '../containers/client/home/module/reducer';
import movieDetailReducer from '../containers/client/movieDetail/module/reducer';
import quanLyNguoiDungReducer from '../containers/client/login/module/quanLiNguoiDungReducer'
import movieDetailFilter from '../containers/client/home/filter/module/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    movieListReducer,
    movieDetailReducer,
    quanLyNguoiDungReducer,
    movieDetailFilter
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
)
export default store;