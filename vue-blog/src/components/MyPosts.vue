<template>
  <div id="home">
      <div v-if="isAuth">
        Hello to the Page (authenticated)
      </div>
      <div v-else>
        Hello to the Page (not authenticated)
      </div>
      
      <div v-if="noPosts" class="posts">
        <router-link :to="{name:'details', params: {postId: p.postId, postTitle: p.title, postImgUrl: p.imgUrl, postContent: p.content, postAuthor: p.author, postPublished: p.published}}" class="post" v-for="p in posts" :key="p.postId">
          <h2 class="postTitle">{{p.title}}</h2>
          <img :src="p.imgUrl" class="myPostImg" />
          <p class="postDate">{{p.published}}</p>
        </router-link>
      </div>
      <div class="noPostContainer" v-else>
          <img class="noPosts" src="https://www.dailydot.com/wp-content/uploads/e52/31/87610fa1a0ae891d.png" alt="">
          <h2>Create post <router-link to="/create-post" class="linkCreate">here</router-link></h2>
      </div>
  </div>
</template>

<script>
import postsMixin from '@/mixins/posts-mixin';

export default {
  props: {
    isAuth: Boolean,
    havePosts: Boolean
  },
  data: function() {
    return {
    }
  },
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
    this.getMyPosts();
  },
  mixins: [postsMixin]
}
</script>

<style>
.myPostImg{
    height: 260px;
}

.noPostContainer{
    text-align: center;
}
.linkCreate{
    color: blue;
    text-decoration: underline;
}

.noPosts{
    border: none;
}
</style>
