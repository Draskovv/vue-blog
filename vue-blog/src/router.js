import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import CreatePost from '@/components/CreatePost.vue';
import NotFound from '@/components/shared/NotFound.vue';



Vue.use(VueRouter);

function anonymousGuard(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next('/');
    } else {
        next();
    }
}

function anonymousGuard2(to, from, next) {
    if (localStorage.getItem('token') !== null) {
        next();
    } else {  
        next('/');
    }
}



const routes = [
    { path: '/', component: Home },
    {
        path: '/sign-in', component: SignIn, beforeEnter: anonymousGuard
    },
    {
        path: '/sign-up', component: SignUp, beforeEnter: anonymousGuard
    }, 
    {
        path: '/create-post', component: CreatePost,beforeEnter: anonymousGuard2
    },
    {
        path: '*', component: NotFound
    },
    
];

export default new VueRouter({
    mode: 'history',
    routes
});