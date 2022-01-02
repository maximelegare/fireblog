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


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      title:"Home"
    }
  },
  {
    path: "/blogs",
    name: "blogs",
    component: Blogs,
    meta:{
      title:"Blogs"
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      title:"Login"
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta:{
      title:"Register"
    }
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
    meta:{
      title:"Forgot Password"
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    meta:{
      title:"Admin"
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta:{
      title:"Profile"
    }
  },
  {
    path: "/create-post",
    name: "createPost",
    component: CreatePost,
    meta:{
      title:"Create Post"
    }
  },
  {
    path: "/create-preview",
    name: "blogPreview",
    component: BlogPreview,
    meta:{
      title:"Preview Blog Post"
    }
  },
  {
    path: "/view-blog",
    name: "viewBlog",
    component: ViewBlog,
    meta:{
      title:"View Blog"
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

export default router;
