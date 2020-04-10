<template>
  <div id="details">
      <div class="detailsPost" v-if="!editing">
        <div>
          <h2 id="postTitle">{{this.title}}</h2>
          <img id="postImg" :src="this.imgUrl">
        </div>
        <div id="postContent">
          <p>{{this.content}}</p>
        </div>
        <p class="publishedByOn">posted by {{this.author}}</p>
        <p class="publishedByOn">On {{this.published}}</p>
        
        <div class="buttonz" v-if="authorOn">
          <button class="btn" @click="editing = true">Edit</button>
          <button class="btn" @click="DeletePost(id)">Delete</button>
        </div>
      </div>
      <form @submit.prevent="UpdatePost($data)" v-if="editing">
      <fieldset id="editPost">
        <h1>Update Post</h1>
        <p class="field1">
          <label for="title">Title:</label>
          <input v-model="title" type="text" name="title" id="title" placeholder="Title" />
        </p>
        <!-- <p class="field1">
          <label for="imgUrl">Image url:</label>
          <input v-model="imgUrl" type="text" name="title" id="imgUrl" placeholder="imgUrl" />
        </p> -->
        <p class="field1">
          <label for="content">Content:</label>
          <textarea v-model="content" type="text" name="content" id="content" placeholder="Content"></textarea>
        </p>
        <p class="createPost">
          <button class="btn" @click="editing = false">Back</button>
          <button class="btn">Update Post</button>
        </p>
      </fieldset>
    </form>
  </div>
  
</template>

<script>
import postsMixin from '@/mixins/posts-mixin';

export default {
  props: {
    isAuth: Boolean,
    postId: String,
    postTitle: String,
    postImgUrl: String,
    postContent: String,
    postAuthor: String,
    postPublished: String

  },
  data: function() {
    return {
      id: this.postId,
      title: this.postTitle,
      imgUrl: this.postImgUrl,
      content: this.postContent,
      author: this.postAuthor,
      published: this.postPublished,
      authorOn: localStorage.getItem('username') == this.postAuthor,
      editing: false
    }
  },
  name: 'PostDetails',
  mixins: [postsMixin]
  
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
    padding-top: 3em;
}

.detailsPost{
    width: 60%;
    text-align: center;
    padding-bottom: 1.5em;
    background-color: lightblue;
}
img{
  width: 50%;
  height: 30%;
}

.btn{
  margin-left: 1em;
 width: 10em;
}

#postTitle{
    border-bottom: 1px solid black;
    padding-bottom: 0.3em;
  }

  #postContent{
    border-bottom: 1px solid black;
  }

  
@media screen and (max-width: 1100px) {
  
  .btn{
    margin-top: 1em;
  }
}


@media screen and (max-width: 500px) {
  
  .detailsPost{
    width: 100%;
  }

  #postTitle{
    border-bottom: 1px solid black;
    padding-bottom: 0.3em;
  }
  
  #postImg{
    width: 200px;
    height: 200px;
  }

  #postContent{
    border-bottom: 1px solid black;
  }
  .publishedByOn{
    
    font-size: 12px;
  }

.btn{
  margin-top: 1em;
  width: 10em;
}
 
 #details{
   display: flex; 
   padding-left: 1em;
 }
  
}



</style>
