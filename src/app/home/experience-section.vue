<script setup lang="ts">
import BorderLeftLayout from '../components/border-left-layout.vue';
</script>

<template>
    <section id="experience" class="mt_70">
        <div class="animation_target_el">
            <p class="title_label_bold vt323"> Experience </p>
            <BorderLeftLayout>
                <p class="list_title_highlight highlight_special_text mt_10">Web Developer – APD Bank</p>
                <p class="skill_period_time">June 2023 – April 2025</p>
                <ul class="skill_detail_list">
                    <li>Built responsive and component-based web interfaces using Vue 3 + TypeScript</li>
                    <li>Implemented API integrations and dynamic data rendering using Axios and Vue's reactivity system</li>
                    <li>Created reusable UI components and handled routing with Vue Router</li>
                    <li>Worked with Pinia for state management and Tailwind CSS for consistent styling</li>
                    <li>Collaborated with backend developers to connect RESTful APIs and improve performance</li>
                    <li>Ensured mobile-first design and cross-browser compatibility</li>
                </ul>
            </BorderLeftLayout>
        </div>
        <div class="mt_40 demo_img">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper" style="background-image: url('/images/apd_team.png');"></div>
                <p>
                <!-- description -->
                </p>
            </div>
            <hr class="border_only">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper" style="background-image: url('/images/apd-team-party.jpeg');"></div>
                <p>
                <!-- description -->
                </p>
            </div>
        </div>

        <!-- As a mobile app developer -->

        <BorderLeftLayout class="animation_target_el mt_40">
            <p class="list_title_highlight highlight_special_text mt_10">Mobile Developer – APD Bank</p>
            <p class="skill_period_time">February 2025 – Currently</p>
            <ul class="skill_detail_list">
                <li>Developed and maintained cross-platform mobile apps using Flutter </li>
                <li>Integrated real-time backend services with Firebase (Auth, Firestore, Cloud Functions)</li>
                <li>Collaborated with UI/UX designers to implement pixel-perfect, responsive interfaces</li>
                <li>Wrote clean, modular Dart code following best practices and state management patterns (e.g., Provider) </li>
                <li>Participated in Agile sprints, daily standups, and peer code reviews </li>
                <li>Ensured mobile-first design and cross-browser compatibility </li>
                <li>Develop new feature and maintenance APD Mobile App </li>
            </ul>
        </BorderLeftLayout>
        

        <div class="mt_40 demo_img exp_blog_img_wrapper">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper" style="background-image: url('/images/mobile_team.jpeg');"></div>
                <p>
                <!-- description -->
                </p>
            </div>
            <hr class="border_only">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper" style="background-image: url('/images/s4.jpg');"></div>
                <p>
                <!-- description -->
                </p>
            </div>
        </div>
        
        
        

    </section>
</template>

<style scoped lang="scss">
.skill_period_time {
    font-weight: 600;
}
.skill_detail_list {
    margin-left: 20px;
}
</style>