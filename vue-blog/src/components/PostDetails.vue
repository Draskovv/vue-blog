<template>
  <div id="details">
      <div class="detailsPost">
        <div>
          <img :src="this.postImgUrl">
          <h2>{{this.postTitle}}</h2>
        </div>
        <div>
          <p>{{this.postContent}}</p>
        </div>
        <p>posted by {{this.author}} &bull; {{this.published}}</p>
      </div>
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
