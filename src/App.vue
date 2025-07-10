<script setup lang="ts">

import { onMounted, ref } from 'vue';
// import Home from './app/pages/home.vue';
import FixLayoutBuilder from './app/components/fix.layout.vue';


const appRef = ref<HTMLElement>();


document.documentElement.addEventListener('resize',()=>{
  const w = appRef.value?.offsetWidth;
  if(!w) return ;
  document.documentElement.style.setProperty("--layout-width",`${w}px`);
})

onMounted(()=>{
  const w = appRef.value?.offsetWidth;
  document.documentElement.style.setProperty("--layout-width",`${w}px`);
})

</script>

<template>
  
  <div class="app_container app_layout_fixed zilla-slab-regular" ref="appRef">
    <FixLayoutBuilder />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <RouterView /> -->
     <!-- <Home /> -->
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