<template>
  <div id="createPost">
    <form @submit.prevent="CreatePost($data)">
      <fieldset id="createPost">
        <h1>Create Post</h1>
        <p class="field1">
          <label for="title">Title:</label>
          <input v-model="title" type="text" name="title" id="title" placeholder="Title" />
        </p>
        <p class="field1">
          <label for="imgUrl">Image url:</label>
          <input v-model="imgUrl" type="text" name="title" id="imgUrl" placeholder="imgUrl" />
        </p>
        <p class="field1">
          <label for="content">Content:</label>
          <textarea v-model="content" type="text" name="content" id="content" placeholder="Content"></textarea>
        </p>
        <p class="createPost">
          <button>Create Post</button>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import postsMixin from '@/mixins/posts-mixin';

export default {
    props: {
        isAuth: Boolean
    },
     data: function() {
    return {
        errors: [],
        title: null,
        content: null,
        imgUrl: null,
        published: new Date(),
        author: localStorage.getItem('username')

    };
    },
    name: 'CreatePost',
    mixins: [postsMixin]
 
    
  
}
</script>

<style>
h1 {
  text-align: center;
}
form {
  padding-top: 5em;
  margin-top: 20px;
  margin: 20px auto;
  width: 40%;
}

#createPost {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 70%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

textarea{
    flex: 0 1 70%;
    height: 25em;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px; 
}

button {
  background-color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 30%;
  cursor: pointer;
  border: 1px solid black
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form .field1 {
  display: flex;
  justify-content: space-between;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}

.createPost{
  text-align: right;
}

</style>
