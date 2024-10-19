<script setup lang="ts">

withDefaults(defineProps<{
    image : string,
    title : string,
    description : string
}>(),{

})

</script>

<template>
    <div class="s-card" data-aos="fade-up" data-aos-duration="1500">
        <div class="s-card_image">
            <img :src="image" alt="card-image">
        </div>
        <h5 class="s-card_title">
            {{ title }}
        </h5>
        <p class="s-card_des text-sm txt-style">
            {{ description }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.s-card {
    width: 300px;
    border-radius: 8px;
    border: 1px solid rgb(167, 197, 203);
    padding: 20px;

    .s-card_image {
        height: 120px;
        display: flex;
        justify-content: center;

        img {
            height: 100%;
        }
    }

    .s-card_title {
        margin-top: 20px;
        text-align: center;
    }

    .s-card_des {
        margin-top: 10px;
        text-indent: 20px;
        word-break: keep-all;
        line-height: 2;
    }
}

@media screen and (max-width: 768px) {
    .s-card {
        width: 80%;
        margin: 0 auto;
    }
}
</style>
