import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import ForgotPassword from "../views/ForgotPassword.vue"
import Admin from "../views/Admin.vue"
import Profile from "../views/Profile.vue"
import CreatePost from "../views/CreatePost.vue"
import BlogPreview from "../views/BlogPreview.vue"
import ViewBlog from "../views/ViewBlog.vue"
import EditBlog from "../views/EditBlog.vue"

import {auth} from "../firebase/firebaseInit"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      title:"Home",
      requiresAuth:false
    }
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
    meta:{
      title:"Blogs",
      requiresAuth:false
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      title:"Login",
      requiresAuth:false
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{
      title:"Register",
      requiresAuth:false
    }
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    meta:{
      title:"Forgot Password",
      requiresAuth:false
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta:{
      title:"Admin",
      requiresAuth:true,
      requireAdmin:true
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{
      title:"Profile",
      requiresAuth:true
    }
  },
  {
    path: "/create-post",
    name: "createPost",
    component: CreatePost,
    meta:{
      title:"Create Post",
      requiresAuth:true,
      requireAdmin:true
    }
  },
  {
    path: "/create-preview",
    name: "blogPreview",
    component: BlogPreview,
    meta:{
      title:"Preview Blog Post",
      requiresAuth:true,
      requireAdmin:true
    }
  },
  {
    path: "/view-blog/:blogid",
    name: "viewBlog",
    component: ViewBlog,
    meta:{
      title:"View Blog",
      
    }
  },
  {
    path: "/edit-blog/:blogid",
    name: "editBlog",
    component: EditBlog,
    meta:{
      title:"Edit Blog",
      requiresAuth:true,
      requireAdmin:true
    }
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | FireBlog`;
  next()
})

router.beforeEach(async (to, from, next) => {
  let user = auth.currentUser
  let admin = null;
  if(user){
    let token = await user.getIdTokenResult()
    admin = token.claims.admin;
  }
  if(to.matched.some((res) => res.meta.requiresAuth)){
    if(user){
      if(to.matched.some((res) => res.meta.requiresAdmin)){
        if(admin){
          return next()
        }
        return next({name:"home"})
      }
      return next()
    }
    return next({name:"home"})
  }
  return next()
})

export default router;
