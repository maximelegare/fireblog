<template>
  <div class="blog-card-wrap">
    <div class="container">
      <ToggleButton @handle-change="handleChange" />
      <div class="blog-cards">
        <BlogCard v-for="post in sampleBlogCards" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import ToggleButton from "../components/Core/ToggleButton.vue";
export default {
  name: "blogs",
  components: {
    BlogCard,
    ToggleButton,
  },
  methods: {
    handleChange() {
    },
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
</script>

<style></style>
