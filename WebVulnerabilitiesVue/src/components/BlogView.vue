<template>
  <div class="content">
      <AddBlogPost class="mb-3"></AddBlogPost>
      <BlogPosts></BlogPosts>
  </div>
</template>
<script>
import AddBlogPost from "@/components/AddBlogPost";
import BlogPosts from "@/components/BlogPosts";

export default {
  components: {BlogPosts, AddBlogPost}
}
</script>
<style>
.content {
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}
</style>