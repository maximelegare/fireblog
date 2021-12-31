<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      @close-modal="closeModal"
    />
    <Loading v-if="isLoading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>
          Forgot your password?<br />
          Enter your email to reset it.
        </p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon"></email>
          </div>
        </div>
        <button @click.prevent="resetPassword">reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Loading from "../components/Core/Loading.vue";
import Modal from "../components/Core/Modal.vue";
import { auth } from "../firebase/firebaseInit";
export default {
  name: "forgotPassword",
  components: {
    email,
    Modal,
    Loading,
  },
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      isLoading: false,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = false;
      this.email = "";
    },
    resetPassword() {
      this.isLoading = true;
      auth
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If your account exists, you will receive an email";
          this.isLoading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.isLoading = false;
          this.modalActive = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
