<template>
  <div class="inner-block">
      <div v-if="!submitted">
        <form>
          <h3>Add Post</h3>
          <div class="form-group">
          <label for="title">Title: </label><br>
          <input type="text" id="title" name="title" class="form-control form-control-lg" v-model="post.title" required><br>
          </div>
          <div class="form-group">
          <label for="description">Description:</label><br>
          <input type="text" id="description" name="description" class="form-control form-control-lg" v-model="post.description" required>
          </div>
          <button type="submit" class="btn btn-dark btn-lg btn-block signing-button" @click="savePost(post)">Add Post</button>
        </form>
      </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newPost">Add</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {reactive, ref} from "vue";

export default {
  name: "add-blog-post",
  setup() {
    const post = reactive({
      id: null,
      title: "",
      description: "",
      published: false
    })
    const submitted = ref(false);


   function savePost(data) {
      axios.post('http://localhost:8080/api/todos', {
        title: data.title,
        description: data.description,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }}).then(response => {console.log(response)})
          .catch(error => {
            console.log(error.response)
          });
    }

    function newPost() {
      submitted.value = false;
      post.value = {};
    }

    return {
      post,
      savePost,
      newPost,
      submitted
    }
  }
};
</script>