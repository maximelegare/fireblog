<template>
  <div class="updates">
    <div class="container">
      <h2>Never miss a post. Register for your free account today!</h2>
      <router-link class="router-button" to="#">
        Register for FireBlog <Arrow class="arrow arrow-light" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  components: {
    Arrow,
  },
};
</script>

<style lang="scss" scoped>
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width:800px){
          text-align: initial;
          font-size:40px;
      }
    }
  }
}
</style>
