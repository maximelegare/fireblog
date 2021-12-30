import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        id: "1",
        blogTitle: "Blog Card #1",
        BlogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        id: "2",
        blogTitle: "Blog Card #2",
        BlogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
      },
      {
        id: "3",
        blogTitle: "Blog Card #3",
        BlogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
      {
        id: "4",
        blogTitle: "Blog Card #4",
        BlogCoverPhoto: "stock-4",
        blogDate: "May 1, 2021",
      },
    ],
    editPost:null
  },
  mutations: {
    toggleEditPost(state, payload){
      state.editPost = payload
      console.log(state.editPost)
    }
  },
  actions: {},
  modules: {},
});
