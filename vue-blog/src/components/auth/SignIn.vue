<template>
  <div id="sign-in">
    <form @submit.prevent="onLogin">
      <fieldset>
        <h1>Login</h1>
        <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
  </p>
        <p class="field field-icon">
          <label for="email">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </label>
          <input v-model="email" type="text" name="email" id="email" placeholder="Email" required/>
        </p>
        <p class="field field-icon">
          <label for="password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input v-model="password" type="password" name="password" id="password" placeholder="Password" required/>
        </p>
        <p class="loginBtn">
          <button>Login</button>
        </p>

        <p class="text-center">
          Dont' have an account?
          <router-link to="/sign-up">Sign Up</router-link>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import authAxios from "@/axios-auth";

export default {
  name: "SignIn",
  data: function() {
    return {
      email: "",
      password: "",
      errors:[]
    };
  },
  methods: {
    onLogin() {
      const payload = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };

      if(this.userCheck())
      {
      authAxios
        .post(
          '/accounts:signInWithPassword',
          payload
        )
        .then(res => {
          const { idToken, localId, email} = res.data;

          localStorage.setItem("token", idToken);
          localStorage.setItem("userId", localId);
          localStorage.setItem('username', email);
          
          this.$router.push("/");
        })
        .catch(err => {
          console.error(err);
        });
      }
    },
    userCheck() {
            if (this.email && this.password) {
                return true;
            }

            this.errors = [];

            if (!this.email) {
              this.errors.push('Email required.');
            }
            if (!this.password) {
                this.errors.push('Password required.');
            }

            console.log(this.errors);

        }
  }
};
</script>

<style scoped>

#sign-in{
  padding-top: 5em;
}
h1 {
  text-align: center;
}
form {
  margin-top: 20px;
  margin: 20px auto;
  width: 40%;
}

fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

button {
  background-color: rgb(69, 90, 100);
  color:white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 30%;
  cursor: pointer;
  border: 1px solid black
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

a {
  color: #007bff;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

form .field {
  display: flex;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}

.loginBtn{
  text-align: center;
}

.text-center{
  text-align: center;
}

@media screen and (max-width: 600px) {
  form{
    margin: 0;
    padding-left: 2em
  }
  .loginBtn{
    width: 16em;
  }

 
}
</style>

