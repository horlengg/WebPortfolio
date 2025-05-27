<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation'; 
import { Skill } from '@/types/index.type';
import SkillDemoAnimate from '@/app/components/skill-demo-animate.vue';



const text = useTextAnimation()
const skillListMapped = ref<Array<Skill[]>>([])
const responseSkillList = ref<Skill[]>([])

const fetchSkills = async()=>{
  const res = await fetch("/db/skill.json")
  if(res.ok){
    const data = await res.json() as Skill[]
    responseSkillList.value = data;
    skillListMapped.value = data.reduce((acc, curr) => {
        // Example: Summing up percentages
        if(acc[curr.group - 1]){
          acc[curr.group - 1].push(curr)
        }else {
          acc[curr.group - 1] = [ curr ]
        }
        return acc;
      }, [] as Array<Skill[]>)
    
  }
}


onMounted(() => {
  text.init()
  fetchSkills()
})

</script>

<template>
  
  <div class="layout_responsive">
    <section id="skill_animate">
      <SkillDemoAnimate :skill-list="responseSkillList"/>
    </section>
    <section id="skill_demo">
      <!-- <h2 class="title" data-aos="zoom-in" data-aos-duration="500">Skills</h2> -->
      <div class="skill_demo_card_wrapper mt-10">
        <div 
          class="skill-demo-list" 
          v-for="(skills,_) of skillListMapped" 
          data-aos="fade-up"
        >
        <div v-for="skill of skills" class="skill_card_demo">
          <div class="skill_logo">
            <img :src="`/images/${skill.logoName}.svg`" />
          </div>
          <div class="skill_detail">
            <p class="skill_title" :style="{color : skill.color}"> {{ skill.title }}</p>
            <div class="percentag_rang">
            <div class="percentag_rang_active" :style="{backgroundColor : skill.color,width : skill.percentag + '%'}">
              {{ skill.percentag }}
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped lang="scss">
#skill_animate {
  margin-top: 150px;
}
#skill_demo {
  padding-bottom: 50px;
  .skill_demo_card_wrapper {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
    width: 100%;
  }
  .skill-demo-list {
    transition: background-color 0.5s ease , transform 0.5s ease, opacity 0.5s ease;
    background-color: var(--skill-card-bg);
    color: rgb(63, 185, 51);
    border-radius: 20px;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .skill_card_demo {
      margin: 10px 0;
      display: flex;
      align-items:  flex-end;
      gap: 15px;
      .skill_title {
        font-weight: 600;
      }
      .skill_detail {
        width: 100%;
      }
      .skill_logo {
        width: 35px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .percentag_rang {
          width: 100%;
          background-color: rgb(226, 225, 225);
          height: 12px;
          border-radius: 20px;
          .percentag_rang_active {
            height: 100%;
            background-color: green;
            border-radius: 20px;
            color: #FFF;
            font-size: 10px;
            display: flex;
            justify-content: center;
          }
        }
    }
    
    
  }
}
.programmer-image {
  width: 60% !important;
}
@media only screen and (max-width:1020px){
  .skill_demo_card_wrapper {
    grid-template-columns: 1fr 1fr !important;
  }
}
@media only screen and (max-width:768px){
  .programmer-image {
    width: 90% !important;
  }
  .skill_demo_card_wrapper {
    grid-template-columns: 1fr !important;
  }
}

@media screen and (max-width: 500px){
  
}

</style>
