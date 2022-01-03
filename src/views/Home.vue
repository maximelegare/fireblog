<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost v-for="post in blogPostsFeed" :key="post.id" :post="post" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="post in blogPostsCards"
            :key="post.id"
            :post="post"
          />
        </div>
      </div>
    </div>
    <HomePageRegister v-if="!user"/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import HomePageRegister from "../components/HomePageRegister.vue";
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    HomePageRegister,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "This is a post",
        welcomeScreen: true,
        photo: "coding",
      },
    };
  },
  computed: {
    blogPostsCards() {
      
      return this.$store.getters.blogPostsCards;
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
</style>
