/**
 * Created by reddy on 2017/4/17.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    str: ' '
  },
  // 通过mutations改变state的值
  mutations: {
    increment (state) {
      state.count++;
    },
    // 带载荷的mutations
    update(state, payload) {
      state.str += payload.str;
    }
  },
  // vuex 的计算属性
  getters: {
    halfCount(state) {
      return state.count / 2;
    }
  },
  // 可以执行异步的mutations.
  actions: {
    // 通过结构函数可以方便的获取到commit;
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000)
    }
  }
})