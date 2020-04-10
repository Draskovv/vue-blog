<template>
  <nav>
    <div>
      <router-link class="h1" to="/">VueJS Blog</router-link>
    </div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="isAuth">
        <router-link to="/my-posts">My Posts</router-link>
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
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>

nav{
  background-color: rgb(69, 90, 100);
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
.h1{
  color: white;
  padding-left: 5em;
}
ul{
  background-color: rgb(69, 90, 100);

  font-size: 24px;
  padding-right: 7em;
}


li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover{
   background-color: lightskyblue;
   color: black;
}

li > a.router-link-exact-active {
  background-color: lightskyblue;
}

.logout {
    cursor: pointer;
}

img{
  padding-left: 3em ;
  width: 70px;
  height: 70px;
}

 .h1{
      padding-left: 6em;
      font-size: 30px;
    }

@media screen and (max-width: 1100px) {
   
   .h1{
     padding-left: 3em;
     font-size: 26px;
   }
   
   ul{
     padding-right: 3em;
   }

   a{
     font-size: 18px;
   }
    
  }
  @media screen and (max-width: 600px) {
    
    .h1{
      padding-left: 0;
      font-size: 20px;
    }
   
   ul{
     padding-right: 0;
   }

   a{
     font-size: 14px;
   }
  
  }
</style>
