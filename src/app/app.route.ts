import Aos from "aos";
import { createRouter,createWebHistory } from "vue-router";


export const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : "/",
            name : "Home",
            component : ()=> import("@/views/Home.vue")
        },
        {
            path : "/service",
            name : "Service",
            component : ()=> import("@/views/Service.vue"),
            meta :{
                nextPage : "/project",
                prevPage : "/"
            }
        },
        {
            path : "/project",
            name : "Project",
            component : ()=> import("@/views/Project.vue"),
            meta :{
                nextPage : "/skill",
                prevPage : "/service"
            }
        },
        {
            path : "/skill",
            name : "Skill",
            component : ()=> import("@/views/Skill.vue"),
            meta :{
                nextPage : "/about",
                prevPage : "/project"
            }
        },
        {
            path : "/about",
            name : "About",
            component : ()=> import("@/views/About.vue"),
            meta :{
                nextPage : "/",
                prevPage : "/skill"
            }
        },
    ]
})

router.beforeEach((to, _, next) => {
    Aos.init({offset : 0}); // Initialize AOS
    document.title = to.name  as string ?? "Leng.js"
    next();
});
 