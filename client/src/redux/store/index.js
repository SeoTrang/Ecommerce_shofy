// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Thay thế 'reducers' bằng đường dẫn tới reducers của bạn
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export default store;