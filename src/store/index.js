import axios from "axios";
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  posts: []
}

//to handle state
const getters = {
  posts:state =>{
    return state.posts
  }
}

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get('https://digikala.utily.ir/posts')
        .then(response => {
          commit('SET_POSTS', JSON.parse(response.data))
          console.log('response', JSON.parse(response.data))
        })
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})