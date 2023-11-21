// store.js

import { createStore } from 'vuex';
// import productModule from './modules/productModule';
import categoryModule from './modules/categoryModule';

const store = createStore({
    state: {
        loading: false, // Trạng thái loading mặc định là false
      },
      mutations: {
        setLoading(state, value) {
          state.loading = value;
        },
      },
      actions: {
        startLoading({ commit }) {
            // console.log("hello start loading");
          commit('setLoading', true);
        },
        stopLoading({ commit }) {
          commit('setLoading', false);
        },
      },
    
  modules: {
    category: categoryModule
    // Thêm các modules khác nếu cần
  },
});

export default store;