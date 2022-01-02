<template>
  <div class="profile-menu">
    <div class="info">
      <p class="initials">{{ this.$store.state.profileInitials }}</p>
      <div class="right">
        <p>
          {{ this.$store.state.profileFirstName }}
          {{ this.$store.state.profileLastName }}
        </p>
        <p>{{ this.$store.state.profileUserName }}</p>
        <p>{{ this.$store.state.profileEmail }}</p>
      </div>
    </div>
    <div class="options">
      <router-link :to="{name:'profile'}" class="option">
        <userIcon class="icon" />
        <p>Profile</p>
      </router-link>
      <router-link :to="{name:'admin'}" class="option" v-if="admin">
        <adminIcon class="icon" />
        <p>Admin</p>
      </router-link>
      <div @click="signOut" class="option">
        <signOutIcon class="icon" />
        <p>Sign Out</p>
      </div>
    </div>
  </div>
</template>

<script>
import userIcon from "../../assets/Icons/user-alt-light.svg";
import adminIcon from "../../assets/Icons/user-crown-light.svg";
import signOutIcon from "../../assets/Icons/sign-out-alt-regular.svg";
import { auth } from "../../firebase/firebaseInit";

export default {
  name: "nav-dropdown",
  components: {
    userIcon,
    adminIcon,
    signOutIcon,
  },
  methods: {
    signOut() {
      auth.signOut().then(() => {
        this.$emit("close-dropdown");
        if (this.$route.name !== "home") {
          this.$router.push({ name: "home" });
        }
      });
    },
  },
  computed:{
    admin(){
      return this.$store.state.profileAdmin
    }
  },
  emits: ["close-dropdown"],
};
</script>

<style lang="scss" scoped>
.profile-menu {
  position: absolute;
  border-radius: 3px;
  top: 60px;
  right: 0;
  width: 250px;
  background-color: #303030;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .info {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #fff;

    .initials {
      position: initial;
      width: 40px;
      height: 40px;
      background-color: #fff;
      color: #303030;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .right {
      flex: 1;
      margin-left: 24px;
      p {
        color: #fff;
      }
      p:nth-child(1) {
        font-size: 14px;
      }

      p:nth-child(2),
      p:nth-child(3) {
        font-size: 12px;
      }
    }
  }

  .options {
    padding: 15px;
    .option {
      text-decoration: none;
      color: #fff;
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      cursor: pointer;

      .icon {
        width: 18px;
        height: auto;
      }
      p {
        font-size: 14px;
        margin-left: 12px;
      }

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
