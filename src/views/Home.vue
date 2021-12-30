<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="post in sampleBlogPost" :key="post.id" :post="post" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More recent Blogs</h3>
        <div class="blog-cards">
          <BlogCard v-for="post in sampleBlogCards" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  <HomePageRegister/> 
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import HomePageRegister from "../components/HomePageRegister.vue"
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    HomePageRegister
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost: "This is a post",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          id: "1",
          blogTitle: "this is a filler",
          blogHTML:
            "this is a filler hjhfas hsfjhkh sfkjsahfkh  afskjhkh f sfkjhf kjshf safhjkn",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          id: "2",
          blogTitle: "this is a filler",
          blogHTML: "this is a filler",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
  computed:{
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards
    }
  }
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
