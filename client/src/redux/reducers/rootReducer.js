//rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  cart: cartReducer,
  loading: loadingReducer,
  user: userReducer
});

export default rootReducer;