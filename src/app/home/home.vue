<script setup lang="ts">
// import { onMounted } from "vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import QuoteSlider from "../components/quote_slider.vue";
import ServiceSection from "./service-section.vue";
import { useRoute } from "vue-router";
import SkillSection from "./skill-section.vue";
import ProjectSection from "./project-section.vue";
import ExperienceSection from "./experience-section.vue";
import EducationSection from "./education-section.vue";
import ContactSection from "./contact-section.vue";
import { useScrollAnimation } from "@/app/utils/useScrollAnimation";

const route = useRoute();
const slideKey = ref(Date.now.toString())
const animation = useScrollAnimation();

document.addEventListener("visibilitychange",()=>{
  console.log(`Client Status :::: ${document.visibilityState}`);
  if(document.visibilityState == "visible"){
      slideKey.value = Date.now().toString();
  }
})

onMounted(()=>{
  
  const targets = Array.from(document.querySelectorAll('.animation_target_el')).map(e => e as HTMLElement) ?? []
  animation.init(targets);
  
  setTimeout(()=>{
    if(route.hash == '#contact_me'){
      const contactSectionElement = document.getElementById('contact_me');
      contactSectionElement?.scrollIntoView({ behavior: "smooth" });
    }
  },1000)

})

onBeforeUnmount(()=>{
  animation.dispose();
})

</script>

<template>
  <!-- <AppHeader /> -->
  <!-- Home Session -->
  <section id="Home"  class="mt_70">
    <!-- slider -->
    <QuoteSlider :key="slideKey"/>
    <div class="animation_target_el">
      <p class="title_label_bold vt323 mt_70"> Welcome to my portfolio!.</p>
      <p class="title_label_bold vt323"> Mobile & Web Developer </p>
      <p class="mt_10" style="font-style: italic;">
        Hi, I’m Ly Horleng — a mobile and web developer who enjoys turning ideas into simple, practical, and user-friendly digital products. I care about building things that not only work well, but also feel intuitive and enjoyable to use.
        I’m detail-oriented, enjoy solving real-world problems, and value clean, maintainable work. I’m always learning, exploring new ideas, and looking for better ways to build meaningful digital experiences.
      </p>
    </div>
  </section>
  
  <!-- Skill Session -->
  <skill-section />

  <!-- Projects -->
  <project-section />

  <!-- Education Session -->
  <education-section />

  <!-- Experience Session -->
  <experience-section />
  
  <!-- service section -->
  <service-section />

  <!-- Contact Session -->
  <contact-section />

  

  <p class="footer_content vt323 animation_target_el">
    © 2025 Ly Horleng
  </p>

  
</template>

<style lang="scss">

.title_label_bold {
  font-size: 30px;
  color: var(--highlight-color);
}

.list_title_highlight {
  font-size: 18px;
  font-weight: 600;
}
</style>
