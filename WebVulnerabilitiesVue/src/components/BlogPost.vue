<template>
  <div class="blogpost">
    <h4>{{post.title}}</h4>
    <p>{{post.description}}</p>
  </div>
</template>
<script>
  export default {
    name: "BlogPosts.vue",
    props: {
      post: {
        type: Object,
      },
    },
  }
</script>

<style>
.blogpost {
  margin-bottom: 3rem;
  border: 1px solid black;
  border-radius: 14px;
  padding: 1rem;
}
</style>