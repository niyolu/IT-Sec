<template>
    <div class="blog-posts">
      <h3>Blog Posts</h3>
      <div v-for="post in posts" :key="post.id">
        <BlogPost :post="post"></BlogPost>
      </div>
    </div>
</template>

<script>
import BlogPost from "./BlogPost";
import { ref, onBeforeMount } from "vue";
import TodoDataService from "../services/TodoDataService";

export default {
  name: "BlogPosts.vue",
  components: {
    BlogPost
  },
  setup(){
    const posts = ref({});

    onBeforeMount(() => {
      TodoDataService.getAll().then(response => {
        posts.value = response.data;
      });
    })
    return {
      posts
    }
  }
}
</script>

<style scoped>
.blog-posts {
  background-color: white;
  width: 90%;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}
</style>