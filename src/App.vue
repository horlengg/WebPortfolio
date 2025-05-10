<script setup lang="ts">
import AppHeader from "@/app/components/app-header.vue"
import { useBorderBackground } from "./utils/useborderbackground";
import { onMounted, ref } from "vue";
import V2Layout from "./app/v2-layout.vue";

const background = useBorderBackground()
const topBarRef = ref<HTMLElement>()

onMounted(()=>{
  background.init({row : 50,column:50});
})
const scrollAppToTop = ()=>{
  if (topBarRef.value) {
    topBarRef.value.scrollIntoView({behavior : "instant"})
  }
}

</script>

<template>
  <AppHeader @link="scrollAppToTop"/>
  <V2Layout />
  
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
