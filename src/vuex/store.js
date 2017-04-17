/**
 * Created by reddy on 2017/4/17.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 通过mutations改变state的值
  mutations: {
    increment (state) {
      state.count++;
    }
  }
})