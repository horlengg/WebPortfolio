<script setup lang="ts">
import { Skill } from '@/types/index.type';


defineProps<{
    skill : Skill
}>()
const getLogoUrl = (logoName: string): string => {
  return new URL(`../assets/images/${logoName}.svg`, import.meta.url).href;
};

</script>

<template>
    <div class="skill-card" data-aos="fade-up" data-aos-duration="500">
        <div class="skill-card_image">
            <img :src="getLogoUrl(skill.logoName)" alt="card image">
        </div>
        <div class="skill-card_title mt-1">
            <h5>{{ skill.title }}</h5>
            <p class="mt-2 text-sm txt-style">
                {{ skill.description }}
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.skill-card {
    overflow: hidden;
    padding: 20px;

    .skill-card_image {
        display: flex;
        justify-content: center;

        img {
            height: 100px;
        }
    }

    .skill-card_title {
        h5 {
            text-align: center;
            margin-top: 20px;
        }
        p {
            line-height: 1.8;
        }
    }
}

@media screen and (max-width: 768px) {}

</style>
