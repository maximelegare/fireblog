import Vue from "vue";
import Vuex from "vuex";
import { auth } from "../firebase/firebaseInit";
import { firestore } from "../firebase/firebaseInit";

import { capitalizeString as capitalize } from "../_utilities/utilities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postsLoaded: null,
    blogHTML: "Write your blog here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileUrl: null,
    blogPhotoPreview: false,
    editPost: null,
    user: null,
    profileAdmin: null,
    profileId: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileInitials: null,
  },
  getters:{
    blogPostsFeed(state){
      return state.blogPosts.slice(0, 2)
    },
    blogPostsCards(state){
      return state.blogPosts.slice(2, 6)
    }
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileUrl(state, payload) {
      state.blogPhotoFileUrl = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    setProfileInfo(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileFirstName = capitalize(payload.data().firstName);
      state.profileLastName = capitalize(payload.data().lastName);
      state.profileUserName = capitalize(payload.data().userName);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
    setProfileInitials(state) {
      const initials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
      state.profileInitials = initials.toUpperCase();
    },
    setBlogPosts(state, payload) {
      state.blogPosts.push(payload)
    },
    setPostLoaded(state, payload){
      state.postsLoaded = payload
    }
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const currentUser = auth.currentUser.uid;
      const dataBase = await firestore.collection("users").doc(currentUser);
      const dbResults = await dataBase.get();

      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async getPosts({ commit, state }) {
      const database = firestore
        .collection("blogPosts")
        .orderBy("date", "desc");
      const results = await database.get();

      results.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogId === doc.id)) {
          const data = {
            blogId: doc.data().blogId,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
          };
          commit("setBlogPosts", data);
        }
      });
      commit("setPostLoaded", true)
      console.log(state.blogPosts)
    },
    async updateUserProfile({ commit, state }) {
      const dataBase = await firestore.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });

      commit("setProfileInitials");
    },
  },
  modules: {},
});
