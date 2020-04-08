import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDbUK9mZLLcGkgb0afsh9Ji4eN-YtdEK0Y",
    authDomain: "vue-blog-8baa9.firebaseapp.com",
    databaseURL: "https://vue-blog-8baa9.firebaseio.com",
    projectId: "vue-blog-8baa9",
    storageBucket: "vue-blog-8baa9.appspot.com",
    messagingSenderId: "819875727814",
    appId: "1:819875727814:web:472553885759a79942cac7"
});

export const db = app.database();
export const postsRef = db.ref('posts');