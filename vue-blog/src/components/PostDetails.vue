<template>
  <div id="details">
      <div class="detailsPost" v-if="!editing">
        <div>
          <img :src="this.postImgUrl">
          <h2>{{this.postTitle}}</h2>
        </div>
        <div>
          <p>{{this.postContent}}</p>
        </div>
        <p>posted by {{this.author}} &bull; {{this.published}}</p>
        
        <div v-if="authorOn">
          <button @click="editing = true">Edit</button>
        </div>
      </div>
      <form @submit.prevent="UpdatePost($data)" v-if="editing">
      <fieldset id="editPost">
        <h1>Update Post</h1>
        <p class="field1">
          <label for="title">Title:</label>
          <input v-model="postTitle" type="text" name="title" id="title" placeholder="Title" />
        </p>
        <p class="field1">
          <label for="imgUrl">Image url:</label>
          <input v-model="postImgUrl" type="text" name="title" id="imgUrl" placeholder="imgUrl" />
        </p>
        <p class="field1">
          <label for="content">Content:</label>
          <textarea v-model="postContent" type="text" name="content" id="content" placeholder="Content"></textarea>
        </p>
        <p class="createPost">
          <button @click="editing = false">Back</button>
          <button>Update Post</button>
        </p>
      </fieldset>
    </form>
  </div>
  
</template>

<script>
//import postsMixin from '@/mixins/posts-mixin';

export default {
  props: {
    isAuth: Boolean,
    postId: String,
    postTitle: String,
    postImgUrl: String,
    postContent: String,
    author: String,
    published: String

  },
  data: function() {
    return {
      authorOn: localStorage.getItem('username') == this.author,
      editing: false
    }
  },
  name: 'PostDetails',
  
}
</script>

<style>
#details{
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(300px , 1fr));
    grid-auto-rows: auto;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 95%;
    padding: 1em;
    justify-items: center;
    padding-top: 5em;
}

.detailsPost{
    width: 60%;
    border: 1px solid black;
   border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
    text-align: center;
}
img{
  width: 70%;
  height: 50%;
}
</style>
