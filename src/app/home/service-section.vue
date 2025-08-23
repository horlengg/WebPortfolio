<script setup lang="ts">

import { serviceList } from '../utils/useLocalData';

</script>

<template>
    <section class="mt_70">
        <p class="title_label_bold vt323 animation_target_el">Services</p>
        <div class="service_wrapper mt_40">
            <div class="service_item animation_target_el" v-for="serviceItem of serviceList">
                <div class="service_item_photo">
                    <div 
                        class="virtual_img" 
                        :style="{backgroundImage : `url('${serviceItem.thumnail}')`}"
                    >
                    </div>
                </div>
                <div class="service_item_info">
                    <h3 style="font-style: italic;">{{ serviceItem.title }}</h3>
                    <p style="font-style: italic;">{{ serviceItem.description }}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss">
.service_wrapper {
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 40px;
    .service_item {
        height: 500px;
        background-color: var(--quote-inspiration-bg);
        border-radius: 8.0px;
        overflow: hidden;
        &:hover {
            .service_item_photo .virtual_img{
                transform: scale(1.2);
            }
        }
        .service_item_photo {
            height: 50%;
            clip-path: polygon(100% 0, 100% 100%, 0 75%, 0 0);
            .virtual_img {
                height: 100%;
                background-position: top center;
                background-repeat: no-repeat;
                background-size: cover;
                transition: transform .3s ease-out;
            }
        }
        .service_item_info {
            padding: 20px;
            font-size: 14px;
        }
    }
}

/* Tablet and up */
@media (min-width: 768px) {
    .service_wrapper {
        grid-template-columns: repeat(2,1fr);
        .service_item {
            height: 420px;
        }
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .service_wrapper {
        grid-template-columns: repeat(3,1fr);
    }
}

</style>