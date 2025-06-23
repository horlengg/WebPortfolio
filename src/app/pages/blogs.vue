<script setup lang="ts">
import useIntersectionObserver from '@horleng/scroll-animation.js';
import { onMounted } from 'vue';


const observer = useIntersectionObserver({
    rootMargin : '-50px',
    threshold : 0.5 //50%
})


onMounted(()=>{
    observer.init({
        container : document.querySelector(".app_container")!,
        targets : Array.from(document.querySelectorAll(".item")).map(e => e as HTMLElement)
    })
})
</script>

<template>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
    <div class="item" build-active-class="element_in_viewport"></div>
</template>

<style lang="scss">
.item {
    height: 150px;
    width: 300px;
    background-color: rgb(198, 194, 68);
    margin-top: 30px;
    opacity: 0;
    transform: translateX(-80px);
    transition: transform .3s ease,opacity .3s ease;
}
.item.element_in_viewport {
    opacity: 1;
    transform: translateX(0);
}
</style>