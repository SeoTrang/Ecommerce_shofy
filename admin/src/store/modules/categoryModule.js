// modules/categoryModule.js

import axios from 'axios';

const categoryModule = {
    
    state : {
        categories: ['123'],
    },
  
  mutations : {
    setCategories(state, data) {
      state.categories = data;
    },
  },
  
  actions : {
    async fetchCategories({ commit }) {
      try {
      //   const response = await axios.get('http://localhost:5000/api/categories');
      //   const data = response.data;
      console.log("hello get categories");
        commit('setCategories', "hello world");
      } catch (error) {
        console.error(error);
      }
    },
  }
}

export default categoryModule;
