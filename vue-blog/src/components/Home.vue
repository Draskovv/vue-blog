<template>
  <div id="home">
      <div v-if="isAuth">
        Hello to the Page (authenticated)
      </div>
      <div v-else>
        Hello to the Page (not authenticated)
      </div>
      <div class="posts">
        <router-link :to="{name:'details', params: {postId: p.postId, postTitle: p.title, postImgUrl: p.imgUrl, postContent: p.content, author: p.author, published: p.published}}" class="post" v-for="p in posts" :key="p.postId">
          <img :src="p.imgUrl" />
          <p>{{p.title}}</p>
        </router-link>
      </div>
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
    }
  },
  name: 'Home',
  beforeCreate() {
    this.$emit('onAuth', localStorage.getItem('token') !== null);
  },
  created() {
    this.getAllPosts();
  },
  mixins: [postsMixin]
}
</script>

<style>
.posts{
  display: grid;
    grid-template-columns: repeat(auto-fit , minmax(300px , 1fr));
    grid-auto-rows: auto;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 95%;
    padding: 1em;
    justify-items: center;
}
.post > img{
  width: 300px;
  height: 300px;
}
</style>
