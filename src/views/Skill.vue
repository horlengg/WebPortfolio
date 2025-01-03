<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';
import SkillCard from '../app/components/skill-card.vue';
import { Skill } from '@/types/index.type';



const text = useTextAnimation()
const skillList = ref<Skill[]>([])

const fetchSkills = async()=>{
  const res = await fetch("/db/skill.json")
  if(res.ok){
    const data = await res.json()
    skillList.value = data
  }
}


onMounted(() => {
  text.init()
  fetchSkills()
})

</script>

<template>
  
  <div>
    <section id="skill">
      <div class="left">
        <h2 class="text-typing" data-typing-duration="500">Welcome to</h2>
        <h3 class="text-typing mt-1" data-typing-duration="500" data-typing-delay="500">My Skills Showcase!</h3>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1000">
          As a dedicated frontend developer,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1500">
          I specialize in transforming ideas into engaging,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2000">
          interactive, and efficient web applications.
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2500">
          With expertise in HTML, CSS, JavaScript,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3000">
          and modern frameworks like React and Vue,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3500">
          I create clean, maintainable code that brings 
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4000">
          innovative designs to life. 
        </p>
        <div class="mt-5 skill-demo-btn" data-aos="fade-down" data-aos-duration="1500">
          <a href="#skillDemo">
            <button class="simple-button learn-more">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="right" data-aos="fade-up" data-aos-duration="1500">
        <img src="../app/assets/images/programmer.svg" alt="">
      </div>
  
    </section>
    <section id="skillDemo">
      <h2 class="title" data-aos="zoom-in" data-aos-duration="500">Skills</h2>
      <div class="skill-demo-list mt-10">
        <SkillCard v-for="skill of skillList" :key="skill.title" :skill="skill"/>
      </div>
    </section>
  </div>
  
</template>

<style scoped lang="scss"></style>
