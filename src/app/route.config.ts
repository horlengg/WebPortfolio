import {createRouter,createWebHistory} from "vue-router"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            component : ()=> import("./pages/home.vue")
        },
        {
            path : '/blogs',
            component : ()=> import("./pages/blogs.vue")
        },
    ]
});

export default router
