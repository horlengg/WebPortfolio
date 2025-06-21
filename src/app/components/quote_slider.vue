<script setup lang="ts">
import { onMounted, ref } from 'vue';

const slides = ref<Array<{
    img : string,
    quote : string[]
}>>([]);

const loadQuoteList = async()=>{
    const resp = await fetch("/db/quotes.json");
    const data = await resp.json();
    slides.value = data.data ?? []
}

const currentIndex = ref(0);
const setEventChangeImage = ()=>{
    setInterval(()=>{
        if(currentIndex.value == slides.value.length - 1){
            currentIndex.value = 0;
        }else {
            currentIndex.value++;
        }
    },5000)
}

setEventChangeImage();

onMounted(()=>{
    loadQuoteList();
})

</script>

<template>
    <div class="pf_animation_container mt_70" v-if="slides.length">
        <div class="__left">
            <p class="paragraph" v-html="slides[currentIndex].quote.join(' ')"></p>
        </div>
        <div class="__right">
            <div class="img_bl" :style="{backgroundImage : `url('${slides[currentIndex].img}')`}"></div>
        </div>
    </div>
</template>

<style lang="scss">

:root {
    --img-w : 300px;
    --fade-distance : 100px;
}


.pf_animation_container {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column-reverse;
    justify-content: center top;
    .__left {
        flex: 1;
        .paragraph {
            animation: __paragraphAnimatedKeyFrame 5s linear infinite;
            .inspiration {
                position: relative;
                display: inline-block;
                padding: 5px 15px;
                margin-top: 10px;
                background-color: rgb(244, 241, 241);
                &::before {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background-color: rgb(179, 178, 178);
                    z-index: 10;
                    border-radius: 10px;
                }
                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background-color: rgb(179, 178, 178);
                    z-index: 10;
                    border-radius: 10px;
                }
            }
            .author {
                color: var(--highlight-color);
            }
        }
    }
    .__right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .img_bl {
            width: var(--layout-width);
            height: 200px;
            // background-image: url("/src/app/assets/images/wl.webp");
            background-position: center;
            background-size: cover;
            border-radius: 10px;
            animation: __imgAnimatedKeyFrame 5s linear infinite;
            background-color: rgb(224, 224, 224);
        }
    }
    @keyframes __paragraphAnimatedKeyFrame {
        0% {
            opacity: 0;
            transform: translate(calc(-1 * var(--fade-distance, 0)),0);
        }
        5% {
            opacity: 1;
            transform: translate(0,0);
        }
        85% {
            opacity: 1;
            transform: translate(0,0);
        }
        90% {
            opacity: 0;
            transform: translate(var(--fade-distance),0);
        }
        100% {
            opacity: 0;
            transform: translate(var(--fade-distance),0);
        }
    }

    @keyframes __imgAnimatedKeyFrame {
        0% {
            opacity: 0;
            transform: translate(var(--fade-distance),0);
        }
        5% {
            opacity: 1;
            transform: translate(0,0);
        }
        85% {
            opacity: 1;
            transform: translate(0,0);
        }
        90% {
            opacity: 0;
            transform: translate(calc(-1 * var(--fade-distance, 0)),0);
        }
        100% {
            opacity: 0;
            transform: translate(calc(-1 * var(--fade-distance, 0)),0);
        }
    }

}
/* Phone Large Screen */
@media (min-width: 450px) {
    .pf_animation_container {
        .__right {
            .img_bl {
                height: 300px;
            }
        }
    }
}



/* Tablet and up */
@media (min-width: 768px) {
    .pf_animation_container {
        flex-direction: row;
        .__right {
            .img_bl {
                width: 300px;
                height: 250px;
                border-radius: 20px;
            }
        }
        @keyframes __paragraphAnimatedKeyFrame {
            0% {
                opacity: 0;
                transform: translate(0,var(--fade-distance));
            }
            5% {
                opacity: 1;
                transform: translate(0,0);
            }
            85% {
                opacity: 1;
                transform: translate(0,0);
            }
            90% {
                opacity: 0;
                transform: translate(calc(-1 * var(--fade-distance, 0)),0);
            }
            100% {
                opacity: 0;
                transform: translate(calc(-1 * var(--fade-distance, 0)),0);
            }
        }

        @keyframes __imgAnimatedKeyFrame {
            0% {
                opacity: 0;
                transform: translate(0,calc(-1 * var(--fade-distance, 0)));
            }
            5% {
                opacity: 1;
                transform: translate(0,0);
            }
            85% {
                opacity: 1;
                transform: translate(0,0);
            }
            90% {
                opacity: 0;
                transform: translate(var(--fade-distance),0);
            }
            100% {
                opacity: 0;
                transform: translate(var(--fade-distance),0);
            }
        }
    }

}

/* Desktop and up */
@media (min-width: 1024px) {
    .app_layout_fixed {
        width: 1024px;
        .__right {
            .img_bl {
                width: 350px;
                height: 250px;
                border-radius: 30px;
            }
        }
    }
    .experience_list {
        padding-left: 30px;
    }
}



</style>


