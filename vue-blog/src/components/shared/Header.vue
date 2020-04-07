<template>
  <nav>
    <div>
      <img src="https://lh3.googleusercontent.com/proxy/tzvh-d4GJT3qW4kEvndWUe-RYwwnZ78JJ712Nw0M-LxmqAUhazJ8L5uJ9o0nqMTHZJzxzA_8-neDz5JKiupE7iduF4CulpSuVKNt90mbBsmPnxiyBbY"/>
    </div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/create-post">Create Post</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/sign-in">Login</router-link>
      </li>
      <li v-if="!isAuth">
        <router-link to="/sign-up">Sign Up</router-link>
      </li>
      <li v-if="isAuth">
        <a @click="onLogout" class="logout">Logout</a>
      </li>
    </ul>
  </nav>
  
</template>

<script>
export default {
  props: {
    isAuth: Boolean
  },
  name: "Header",
  methods: {
    onLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');

      this.$emit('onAuth', false);
    }
  }
};
</script>

<style scoped>

nav{
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
}

ul{
  font-size: 24px;
  padding-right: 10em;
}


li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
   background-color: lightgray;
}

.logout {
    cursor: pointer;
}

img{
  padding-left: 3em ;
  width: 70px;
  height: 70px;
}
</style>
