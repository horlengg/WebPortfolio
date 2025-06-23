<script setup lang="ts">

import { onMounted, ref } from 'vue';
// import Home from './app/pages/home.vue';
import BuildButtonTheme from './app/components/build_button_theme.vue';


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
    <BuildButtonTheme />
    <RouterView />
     <!-- <Home /> -->
  </div>
</template>