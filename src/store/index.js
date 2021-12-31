import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../firebase/firebaseInit";
import { firestore } from "../firebase/firebaseInit";

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
    editPost: null,
    user: null,
    profileId: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setProfileInfo(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileFirstName = payload.data().firstName;
      state.profileLastName = payload.data().lastName;
      state.profileUserName = payload.data().userName;
    },
    updateUser(state, payload){
      state.user = payload;
    },

    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
  },
  actions: {
    async getCurrentUser({commit}) {
      const currentUser = auth.currentUser.uid;
      const dataBase = await firestore.collection("users").doc(currentUser);
      const dbResults = await dataBase.get();
      
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
    },
  },
  modules: {},
});
