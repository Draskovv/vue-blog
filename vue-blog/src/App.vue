<template>
  <div id="app">
    <Header @onAuth="isAuth = $event" :isAuth="isAuth" />
      <router-view @onAuth="isAuth = $event" :isAuth="isAuth"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export default {
  name: 'App',
  data: function() {
    return {
      isAuth: localStorage.getItem('token') !== null
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body{
  background: rgba(#ffffff,0.3);
    background-image: url("https://images.wallpaperscraft.com/image/dog_cat_kitten_puppy_drawing_heart_96341_1920x1080.jpg");
    background-size: cover;   
}
</style>
