<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'home' }"
          >FireBlog</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
          <router-link class="link" v-if="admin" :to="{name:'createPost'}">Create Post</router-link>
          <router-link v-if="!user" class="link" :to="{ name: 'login' }"
            >Login/Register</router-link
          >
        </ul>
        <div v-if="user">
          <div @click="toggleNavDropdown" class="profile-logo">
            {{ this.$store.state.profileInitials }}
          </div>
          <NavDropdown
            @close-dropdown="toggleNavDropdown"
            v-show="navDropdownVisibility"
          />
        </div>
      </div>
    </nav>
    <menuIcon class="menu-icon" v-show="mobile" @click="toggleMobileNav" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
        <router-link class="link" :to="{name:'createPost'}" v-if="admin">Create Post</router-link>
        <router-link class="link" :to="{ name: 'login' }" v-if="!user"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import NavDropdown from "./Core/NavDropdown.vue";

export default {
  name: "navigation",
  components: {
    menuIcon,
    NavDropdown,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      navDropdownVisibility: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleNavDropdown() {
      console.log("clicked");
      this.navDropdownVisibility = !this.navDropdownVisibility;
    },
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin(){
      return this.$store.state.profileAdmin
    }
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: var(--light-box-shadow);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3 color ease;

    &:hover {
      color: #1eb8b8;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }
    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;

      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
    .profile-logo {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #303030;
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: white;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.6s cubic-bezier(0.39, 0.03, 0.27, 1.04);
  }
  .mobile-nav-enter {
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to {
    transform: translateX(0);
  }
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
