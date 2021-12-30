<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost v-for="post in sampleBlogPost" :key="post.id" :post="post" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More recent Blogs</h3>
        <div class="blog-cards">
          <BlogCards v-for="post in sampleBlogCard" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  <HomePageRegister/> 
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import BlogCards from "../components/BlogCards.vue";
import HomePageRegister from "../components/HomePageRegister.vue"
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCards,
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
      sampleBlogCard: [
        {
          id: "1",
          blogTitle: "Blog Card #1",
          BlogCoverPhoto: "stock-1",
          blogDate: "May 1, 2021",
        },
        {
          id: "2",
          blogTitle: "Blog Card #2",
          BlogCoverPhoto: "stock-2",
          blogDate: "May 1, 2021",
        },
        {
          id: "3",
          blogTitle: "Blog Card #3",
          BlogCoverPhoto: "stock-3",
          blogDate: "May 1, 2021",
        },
        {
          id: "4",
          blogTitle: "Blog Card #4",
          BlogCoverPhoto: "stock-4",
          blogDate: "May 1, 2021",
        },
      ],
    };
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
