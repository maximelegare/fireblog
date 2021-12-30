<template>
  <div class="reset-password">
    <Modal v-if="modalActive" @close-modal="closeModal"/>
    <div class="form-wrap">
      <form class="reset">
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
        <button>reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Modal from '../components/Core/Modal.vue';
export default {
  name: "forgotPassword",
  components: {
    email,
    Modal,
  },
  data() {
    return {
      email: null,
      modalActive:false,
      modalMessage:""
    };
  },
  methods:{
    closeModal(){
      this.modalActive = false
      this.email = ""
    }
  }
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
