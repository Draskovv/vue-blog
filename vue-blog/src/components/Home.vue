<template>
  <div id="home">
      <div v-if="isAuth">
        Hello to the Page (authenticated)
      </div>
      <div v-else>
        Hello to the Page (not authenticated)
      </div>
      <div class="posts">
        <router-link :to="{name:'details', params: {postId: p.postId, postTitle: p.title, postImgUrl: p.imgUrl, postContent: p.content, postAuthor: p.author, postPublished: p.published}}" class="post" v-for="p in posts" :key="p.postId">
          <h2 class="postTitle">{{p.title}}</h2>
          <img :src="p.imgUrl" />
          <p class="postDate">{{p.published}}</p>
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
    grid-template-columns: repeat(auto-fit , minmax(400px , 1fr));
    grid-auto-rows: auto;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 95%;
    padding: 1em;
    justify-items: center;
}

.post{
  text-align: center;
}

img{
  border: 1px solid black;
}

.postTitle{
  border-bottom: 1px solid black;
}
.postDate{
  padding-top: 0.2em;
  border-top: 1px solid black;
}
a{
  color: black;
  text-decoration: none;
}

a:hover{
  background-color: rgba(100,100,100, 0.3);
}

@media screen and (max-width: 500px) {
  .posts{
    grid-template-columns: repeat(auto-fit , minmax(250px , 1fr));

  }
}
</style>
