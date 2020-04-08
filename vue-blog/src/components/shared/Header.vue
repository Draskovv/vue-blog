<template>
  <nav>
    <div>
      <h1>VueJS Blog</h1>
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
      localStorage.removeItem('username');

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
h1{
  padding-left: 5em;
}
ul{
  font-size: 24px;
  padding-right: 7em;
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
