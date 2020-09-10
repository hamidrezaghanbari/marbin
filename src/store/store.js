import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/User.js';
import SpecialCatalogs from './modules/SpecialCatalogs.js';
import Catalogs from './modules/Catalogs.js';
import SingleProduct from './modules/SingleProduct.js';
import Order from './modules/Order.js';
import Orders from './modules/Orders.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLoad: false
  },
  getters: {
    getIsLoad(state) {
      return state.isLoad;
    }
  },
  mutations: {
    setIsLoad(state, isLoad) {
      state.isLoad = isLoad;
    }
  },
  modules: {
    User,
    SpecialCatalogs,
    Catalogs,
    SingleProduct,
    Order,
    Orders
  }
});