import axios from 'axios';

export default {
    data: function() {
        return { 
            posts: []
         }
    },
    methods: {
        async getAllPosts() {
            try {
                const instance = axios.create({
                    baseURL: 'https://vue-blog-8baa9.firebaseio.com/',
                    headers: { 'Content-Type': 'application/json' }
                });
                
                instance.interceptors.request.use(config => {
                    // header -> Authorization (Basic/Kinvey)
                    config.url = `${config.url}`;
                
                    return config; 
                });

                const res = await instance.get(`posts.json`);
                const allPostsRes = res.data;
                for (const postId in allPostsRes) {
                  this.posts.push({
                    postId,
                    ...allPostsRes[postId]
                  });
                }
            } catch(err) {
                console.log(err);
            }
        } ,
        async CreatePost(){   
            try{
                if (this.checkForm())
                {
                    const instance = axios.create({
                    baseURL: 'https://vue-blog-8baa9.firebaseio.com/',
                    headers: { 'Content-Type': 'application/json' }
                    });
            
                    instance.interceptors.request.use(config => {
                        config.url = `${config.url}`;
            
                        return config; 
                    });
                    instance.post("https://vue-blog-8baa9.firebaseio.com/posts.json", {title: this.title, content: this.content, imgUrl: this.imgUrl, published: this.published, author: this.author})

                    this.$router.push("/");
                }
            }
            catch(err)
            {
                console.log(err);
            }
        },
        async checkForm() {
            if (this.title && this.imgUrl && this.content) {
                return true;
            }

            this.errors = [];

            if (!this.title) {
              this.errors.push('Title required.');
            }
            if (!this.imgUrl) {
              this.errors.push('Image url required.');
            }
            if (!this.content) {
                this.errors.push('Content required.');
            }

        }
        
        
    }
}