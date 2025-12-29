<script setup lang="ts">
// import BorderLeftLayout from '../components/border-left-layout.vue';
</script>

<template>
    <section id="project" class="mt_70" >
        <p class="title_label_bold vt323 animation_target_el">Projects</p>

        <!-- ABA Home Home Page Clone  -->
        <div class="project_layout_wrapper">
            <div class="project_demo_info animation_target_el">
                <p class="highlight_special_text list_title_highlight mt_40">ABA Home Screen Clone </p>
                <p class="mt_10">
                    This project contains a UI clone of the Home screen ABA Bank mobile application include drag-drop menu, built for learning and practice purposes.
                    The project focuses on recreating the visual design, layout, and navigation flow of the ABA app using iOS technologies.
                </p>
                <p style="margin: 10px 0 20px 10px; color: #be6c65;">
                    This project is not affiliated with, endorsed by, or connected to ABA Bank.
                    All trademarks, logos, and brand names belong to their respective owners.
                </p>
                <p class="mt_10">
                    <b> Technologies Used </b> 
                </p>
                <ul style="margin-left: 20px;list-style-type: disc;">
                    <li>Swift5</li>
                    <li>SwiftUI</li>
                </ul>
                <a href="https://github.com/horlengg/clone_ui_aba" target="_blank" class="project_demo_link mt_20">
                    Repository
                </a>
            </div>
            <div class="project_img_demo_wr animation_target_el">
                <div class="project_img_demo" style="background-image: url('/images/aba_home_screen_clone.png');aspect-ratio:2/1.25;"></div>
                <a href="https://github.com/horlengg/clone_ui_aba" target="_blank" class="project_demo_link mt_20">
                    Repository
                </a>
            </div>
        </div>

        <!-- Movie Web Application  -->
        <div class="project_layout_wrapper">
            <div class="project_demo_info animation_target_el">
                <p class="highlight_special_text list_title_highlight mt_40">Movie Web Application </p>
                <p class="mt_10">
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
            </div>
            <div class="project_img_demo_wr animation_target_el">
                <div class="project_img_demo " style="background-image: url('/images/pktv.png');"></div>
                <a href="https://piphubkun-tv.vercel.app/" target="_blank" class="project_demo_link mt_20">
                    Live Demo
                </a>
            </div>
        </div>

        <!-- Telegram Web UI Clone (Incomplet) -->
        <div class="project_layout_wrapper mt_40">
            <div class="project_demo_info animation_target_el">
                <p class="highlight_special_text list_title_highlight mt_40">Telegram Web UI Clone (Incomplet)</p>
                <p class="mt_10">
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
            </div>
            <div class="project_img_demo_wr animation_target_el">
                <div class="project_img_demo " style="background-image: url('/images/tme.png');"></div>
                <a href="https://web-telegram-clone.vercel.app/" target="_blank" class="project_demo_link mt_20">
                    Live Demo
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

.project_layout_wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    &,
    & * {
        font-style: italic;
    }
    .project_img_demo_wr {
        width: 100%;
        flex: 1;
        .project_img_demo {
            width: 100%;
            background-position: top center;
            background-size: contain;
            background-repeat: no-repeat;
            aspect-ratio: 2 / 1;
            // border-radius: 8.0px;
        }
    }
    .project_demo_info {
        flex: 1;
        .project_demo_link {
            display: none;
        }
    }
}


/* Tablet and up */
@media (min-width: 768px) {
    // .project_layout_wrapper {
    //     flex-direction: row;
    // }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .project_layout_wrapper {
        flex-direction: row;
        .project_img_demo_wr {
            .project_demo_link {
                display: none;
            }
        }
        .project_demo_info {
            .project_demo_link {
                display: inline-block;
            }
        }
    }
}

</style>