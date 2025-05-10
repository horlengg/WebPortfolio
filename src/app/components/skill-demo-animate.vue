<script setup lang="ts">
import { Skill } from '@/types/index.type';

defineProps<{
    skillList : Array<Skill>
}>()
</script>

<template>
    <div class="skill-demo_wrapper">
        <div class="skill-track">
            <div class="skill-card"
                v-for="(item, index) in skillList.concat(skillList)" :key="index">
                <img :src="`/src/app/assets/images/${item.logoName}.svg`"/>
            </div>
        </div>
    </div>
</template>


<style scoped>
.skill-demo_wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin-top: 50px;
}

.skill-demo_wrapper::before,
.skill-demo_wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    z-index: 2;
    pointer-events: none;
}

.skill-demo_wrapper::before {
    transition: background 0.5s ease;
    left: 0;
    background: linear-gradient(to right, var(--layout-color) 0%, transparent 100%);
}

.skill-demo_wrapper::after {
    transition: background 0.5s ease;
    right: 0;
    background: linear-gradient(to left, var(--layout-color) 0%, transparent 100%);
}


.skill-track {
    display: flex;
    width: max-content;
    animation: scrollLeft 20s linear infinite;
}

.skill-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #FFF;
    margin-right: 30px;
    background-color: var(--skill-card-bg);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: background-color 0.5s ease;
}

.skill-card img {
    width: 50%;
}

/* Animation */
@keyframes scrollLeft {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>