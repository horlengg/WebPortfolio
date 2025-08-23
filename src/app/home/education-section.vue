<script setup lang="ts">
import BorderLeftLayout from '../components/border-left-layout.vue';

</script>

<template>
    <section id="Education" class="mt_70">
        <p class="title_label_bold vt323 animation_target_el">Education & Training </p>
        <!-- Royal University of Phnom Penh -->
        <BorderLeftLayout class="animation_target_el">
            <p class="list_title_highlight mt_10 highlight_special_text">Royal University of Phnom Penh</p>
            <p class="">Bachelor of Science in Computer Science</p>
            <p class="">
                <i>March 2022 – May 2025</i>
            </p>
            <ol class="mt_10 animation_target_el" style="margin-left: 20px;list-style-type: disc;">
                <li>Focused on software development, data structures, and web technologies</li>
                <li>Web Development (HTML, CSS, JavaScript, React.js PHP ...)</li>
                <li>Database Systems (MySQL, Sql Server...)</li>
                <li>Software Engineering & Project Management</li>
                <li>Participated in coding challenges and collaborative assignments to strengthen problem-solving and teamwork skills</li>
            </ol>
            
        </BorderLeftLayout>
        <!-- Photo -->
        <div class="mt_50 demo_img">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper single_img_mode" style="background-image: url('/images/classmate_rupp.jpeg');"></div>
            </div>
            <hr class="border_only">
        </div>
        
        <!-- At APD BANK -->
        <BorderLeftLayout class="animation_target_el">
            <p class="list_title_highlight mt_70 highlight_special_text">Development Training – APD Bank</p>
            <p>
                This training wasn’t just about becoming a better developer — it was about becoming a better version of myself. I'm truly grateful for this experience, and I carry forward not only the skills I’ve gained but also the happiness and motivation it has given me.
                <br>
                Every day brought new challenges, but also new lessons and achievements. I learned how to:
            </p>
            <ol class="mt_10 animation_target_el" style="margin-left: 20px;list-style-type: disc;">
                <li>Collaborate with team members in a structured, respectful way</li>
                <li>Write cleaner, more maintainable code</li>
                <li>Manage my time and tasks with greater responsibility</li>
                <li>Communicate better in a professional environment</li>
            </ol>
        </BorderLeftLayout>
        <!-- Photo -->
        <div class="mt_50 demo_img">
            <div class="demo_img_item animation_target_el">
                <div class="img_wrapper single_img_mode" style="background-image: url('/images/application_team_06.png');"></div>
            </div>
            <hr class="border_only">
        </div>

    </section>
</template>