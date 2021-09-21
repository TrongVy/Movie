import { createStore, combineReducers, applyMiddleware } from "redux";
import movieListReducer from '../containers/client/home/module/reducer';
import movieDetailReducer from '../containers/client/movieDetail/module/reducer';
import movieDetailFilter from '../containers/client/home/filter/module/reducer';
import authReducer from '../containers/shared/Auth/module/authReducer'
import userReducer from '../containers/admin/User/module/userReducer'
//redux thunk
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
//redux persist dung de luu user login xuong localStorage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    movieListReducer,
    movieDetailReducer,
    movieDetailFilter,
    authReducer,
    userReducer,
});

const persistConfig = {
    key: 'currentUser',
    storage,
    // lưu thông tin user login (currentUser ) trên reducer
    whitelist: ['authReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
    // rootReducer,
    persistedReducer,
    composeWithDevTools(applyMiddleware(reduxThunk))
)
const persistor = persistStore(store)
export { store, persistor };