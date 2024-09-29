<script setup lang="ts">

withDefaults(defineProps<{
    skill : {
        image: string,
        title: string,
        description: string
    }
}>(), {

})

</script>

<template>
    <div class="skill-card" data-aos="fade-up" data-aos-duration="500">
        <div class="skill-card_image">
            <img :src="skill.image" alt="card image">
        </div>
        <div class="skill-card_title mt-1">
            <h5>{{ skill.title }}</h5>
            <p class="mt-2">
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
    }
}

@media screen and (max-width: 768px) {}

</style>
