<template>
  <div id="createPost">
    <form id="createForm" @submit.prevent="CreatePost($data)">
      <fieldset id="create">
        <h1>Create Post</h1>
        <p class="field1">
          <label for="title">Title:</label>
          <input v-model="title" type="text" name="title" id="title" placeholder="Title" />
        </p>
        <p class="field1">
          <label for="imgUrl">Image url:</label>
          <!-- <input v-model="imgUrl" type="text" name="title" id="imgUrl" placeholder="imgUrl" /> -->
          <input type="file" @change="onPickFile" ref="fileInput" accept="image/*">
        </p>
        <p v-if="imgUrl" class="field1">
          <label for="imgUrl">Preview:</label>
          <img :src="imgUrl" id="postImg">
        </p>
        <p class="field1">
          <label for="content">Content:</label>
          <textarea v-model="content" type="text" name="content" id="content" placeholder="Content"></textarea>
        </p>
        <p class="createPost">
          <button>Create Post</button>
        </p>
      </fieldset>
    </form>
        
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
        errors: [],
        title: null,
        content: null,
        imgUrl: null,
        published: new Date().toUTCString(),
        author: localStorage.getItem('username')

    };
    },
    name: 'CreatePost',
    mixins: [postsMixin],
    methods:{
      onPickFile(event){
        const files = event.target.files;
        let fileName = files[0].name;

        if(fileName.lastIndexOf('.') <= 0 ){
          return alert("Please add a valid file!");
        }

        const fileReader = new FileReader();
        fileReader.addEventListener('load' , ()=>{
          this.imgUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0]);

      }
    }
 
    
  
}
</script>

<style>
#createPost{
    display: grid;
    grid-template-columns: repeat(auto-fit , minmax(600px , 1fr));
    grid-auto-rows: auto;
    grid-gap: 10px;
    margin: 0 auto;
    max-width: 95%;
    padding: 1em;
    justify-items: center;
    
}

h1 {
  text-align: center;
}
form {
  background-color: lightblue;
  width: 40%;
}

#create {
  padding: 20px;
}

input {
  flex: 0 1 70%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

textarea{
  flex: 0 1 70%;
  height: 10em;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px; 
}

button {
  background-color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 30%;
  cursor: pointer;
  border: 1px solid black
}

form .field1 {
  display: flex;
  justify-content: space-between;
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

.createPost{
  text-align: right;
}

@media screen and (max-width: 1100px) {
    #createPost{
      grid-template-columns: repeat(auto-fit , minmax(600px , 1fr));
    }
    form .field1 {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 600px) {
    #createPost{
      display:flex;
    }

    form {
       background-color: transparent;
 
    }
    
  }

</style>
