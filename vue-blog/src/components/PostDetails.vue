<template>
  <div id="details">
      <div class="detailsPost">
        <div>
          <p>{{this.postTitle}}</p>
          <img :src="this.postImgUrl">
        </div>
        <div>
          <p>{{this.postContent}}</p>
        </div>
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
    postContent: String

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
    display: flex;
    justify-content: center;
    padding-top:10em ;
    text-align: center;
}

.detailsPost{
    width: 60%;
    
    border: 1px solid black;
   border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
img{
  width: 400px;
  height: 400px;
}
</style>
