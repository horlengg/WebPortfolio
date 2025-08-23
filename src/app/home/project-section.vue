<script setup lang="ts">
import BorderLeftLayout from '../components/border-left-layout.vue';
</script>

<template>
    <section id="project" class="mt_70" >
        <p class="title_label_bold vt323 animation_target_el">Projects</p>
        <!-- Movie Web Application  -->
        <div class="animation_target_el">
            <p class="highlight_special_text list_title_highlight mt_40">Movie Web Application </p>
            <BorderLeftLayout class="mt_10">
                <p>
                    Piphubkun TV is a dedicated streaming platform for fans of Donghua, with a special focus on 3D Chinese animation. The website delivers an immersive experience by curating a wide range of series and movies, paired with rich content such as synopses, character profiles, and behind-the-scenes details.
                </p>
                <p class="mt_10">
                    <b> Technologies Used </b> 
                </p>
                <ul style="margin-left: 20px;list-style-type: disc;">
                    <li>Vue 3</li>
                    <li>Typescript</li>
                    <li>Nest.js(API) </li>
                    <li>MongoDB</li>
                    <li>Cloudinary(Storage)</li>
                </ul>
                <a href="https://piphubkun-tv.vercel.app/" target="_blank" class="project_demo_link mt_20">
                    Live Demo
                </a>
            </BorderLeftLayout>
        </div>

        <!-- Telegram Web UI Clone (Incomplet) -->
        <div class="animation_target_el">
            <p class="highlight_special_text list_title_highlight mt_40">Telegram Web UI Clone (Incomplet)</p>
            <BorderLeftLayout>
                <p>
                    This is a front-end-only clone of the Telegram Web interface, built as a personal project to practice layout structuring, component styling, and UI design replication using modern web technologies. 
                    <br>
                    Currently optimized for desktop view only — mobile responsiveness is not yet implemented.
                    <br>
                    This project helped me strengthen my skills in component-based UI development and CSS structuring. Mobile responsiveness and interactivity will be added in the next development phase.
                </p>
                <p class="mt_10">
                    <b> Technologies Used </b> 
                </p>
                <ul style="margin-left: 20px;list-style-type: disc;">
                    <li>Vue</li>
                    <li>Typescript</li>
                    <li>SASS</li>
                </ul>
                <a href="https://web-telegram-clone.vercel.app/" target="_blank" class="project_demo_link mt_20">
                    Live Demo
                </a>
            </BorderLeftLayout>
        </div>
    </section>
</template>

<style scoped lang="scss">

.project_demo_layout__lengdev {
    .project_demo_title__lengdev {
        color: rgb(253 224 71);
    }
    .project_usage_technologies_list {
        margin-left: 30px;
    }
}

/* Tablet and up */
// @media (min-width: 768px) {
//     .project_demo_layout__lengdev {
       
//     }
// }

/* Desktop and up */
// @media (min-width: 1024px) {
//     .project_demo_layout__lengdev {
//     }
// }

</style>