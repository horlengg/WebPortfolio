<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
// import Home from './app/pages/home.vue';
import FixLayoutBuilder from './app/components/fix.layout.vue';
import { useRoute } from 'vue-router';
import sendClientViewWebsite from './app/api/api';
// import { Analytics } from '@vercel/analytics/vue';


const appRef = ref<HTMLElement>();
const route = useRoute()
const clientRouteTrackingList:Array<string> = [];

window.addEventListener('resize',()=>{
  const layoutSize = (appRef.value?.offsetWidth ?? 0) - ((window.innerWidth > 600 && window.innerWidth < 768) ? 100 : 40);
  document.documentElement.style.setProperty("--slide-img-width",`${layoutSize}px`);
  document.documentElement.style.setProperty("--slide-img-height",`${(layoutSize * .8)}px`);
})

onMounted(()=>{
  const layoutSize = (appRef.value?.offsetWidth ?? 0) - ((window.innerWidth > 600 && window.innerWidth < 768) ? 100 : 40);
  document.documentElement.style.setProperty("--slide-img-width",`${layoutSize}px`);
  document.documentElement.style.setProperty("--slide-img-height",`${(layoutSize * .8)}px`);
  setTimeout(()=>{
    sendClientViewWebsite(location.href)
  },3000)
  window.addEventListener("beforeunload", () => {
    sendClientViewWebsite(clientRouteTrackingList.join(" \n "),true)
  })
})

watch(
  () => route.fullPath,
  (newPath) => {
    if (!clientRouteTrackingList.includes(newPath)) {
      clientRouteTrackingList.push(newPath);
    }
  },
  { immediate: true }
);
</script>

<template>
  
  <div id="app_root" class="app_container app_layout_fixed zilla-slab-regular" ref="appRef">
    <FixLayoutBuilder />
    <transition name="fade" mode="out-in">
      <div class="transition_item"  :key="$route.fullPath">
        <router-view />
      </div>
    </transition>
    <!-- <RouterView /> -->
     <!-- <Home /> -->
    <!-- <Analytics /> -->
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>