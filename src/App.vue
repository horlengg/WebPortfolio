<script setup lang="ts">
import AppHeader from "@/app/components/app-header.vue"
import { useBackground } from "./utils/usebackground";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const bg = useBackground()
const route = useRoute()
const topBarRef = ref<HTMLElement>()

onMounted(()=>{
  bg.init();
})

const getButtonFooterTitle = (path:string)=>{
  if(path === "/") return "Home"
  let p = path.slice(1)
  return p[0].toUpperCase() + p.slice(1)
}
const scrollAppToTop = ()=>{
  if (topBarRef.value) {
    topBarRef.value.scrollIntoView({behavior : "instant"})
  }
}

</script>

<template>
  <AppHeader @link="scrollAppToTop"/>
  <!-- for scrolling to top -->
  <div class="topElement" ref="topBarRef"></div>
  <div class="app-container">
    <router-view v-slot="{ Component ,route}">
      <transition name="app"> 
        <component :is="Component" :key="route.name"/>
      </transition>
    </router-view>
  </div>

  <footer class="app-footer" v-if="route.meta.nextPage && route.meta.prevPage">
      <p  data-aos="fade-up" data-aos-duration="500">Did you want to continue to explore more? {{ route.meta.nextPage }}</p>
      <div class="btn-page-wrapper">
        <router-link :to="route.meta.prevPage || '#'" class="page-button prev-page-button" data-aos="fade-right" data-aos-duration="1000" @click="scrollAppToTop">
          <span>{{ getButtonFooterTitle(route.meta.prevPage as string) }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
        </router-link>
        <router-link :to="route.meta.nextPage" class="page-button next-page-button" data-aos="fade-left" data-aos-duration="1000" @click="scrollAppToTop">
          <span>{{ getButtonFooterTitle(route.meta.nextPage as string) }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15"><path fill="currentColor" d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/></svg>
        </router-link>
      </div>
    </footer>
  
</template>

<style lang="scss">
.app-footer {
    padding: 70px 0;
    overflow-x: hidden;
    p {
        text-align: center;
    }
    .btn-page-wrapper {
        margin : 40px 0;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
}
.app-enter-active, 
.app-leave-active {
  transition: opacity 0.3s ease; /* Shortened the duration for better UX */
}

.app-enter-from, 
.app-leave-to {
  opacity: 0;
}

.app-enter-to, 
.app-leave-from {
  opacity: 1;
}

</style>
