<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { quoteList } from '@/app/utils/useLocalData';

const slides = ref<Array<{img: string;quote: string[];}>>([]);

const leftLayoutSlideRef = ref<HTMLElement>();
let maxLeftLayoutHeight = ref(0);
const quoteDOMkey = ref(Date.now().toString());
let animationStartDate = Date.now();
let startPausedAnimationDate = 0;
let pauseAnimationTime = 0

const animationPaused = ref(false);

const currentIndex = ref(0);

const checkLayoutLeftHeight = ()=>{
    const layoutLeftOffsetHeight = leftLayoutSlideRef.value?.offsetHeight ?? 0;
    if(maxLeftLayoutHeight.value < layoutLeftOffsetHeight){
        maxLeftLayoutHeight.value = layoutLeftOffsetHeight;
    }
}

onMounted(()=>{
    slides.value = quoteList;
    checkLayoutLeftHeight();
    console.log("Slide loaded!. ): ");
})


function animationStart(){
    animationStartDate = Date.now();
}

function animationIteration(){
    animationStartDate = Date.now();
    pauseAnimationTime = 0;
    if(currentIndex.value == slides.value.length - 1){
        currentIndex.value = 0;
    } else currentIndex.value++;
    checkLayoutLeftHeight();
}

function onMouseLeave(){
    animationPaused.value = false
    pauseAnimationTime += Date.now() - startPausedAnimationDate;
}

function onMouseOver(){
    if(animationPaused.value) return
    startPausedAnimationDate = Date.now();
    const duration = Date.now() - animationStartDate - pauseAnimationTime
    if(duration > 500 && duration < 4000){
        animationPaused.value = true
    }
}
function onTouchStart(_: TouchEvent) {
    onMouseOver();
}

function onTouchEnd(_: TouchEvent) {
    onMouseLeave();
}

</script>

<template>
    <div class="pf_animation_container mt_70" 
        v-if="slides.length" 
        :key="quoteDOMkey"
        :class="{'animation_paused' : animationPaused}"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <div 
            class="__left" 
            ref="leftLayoutSlideRef" 
            :style="{minHeight : `${maxLeftLayoutHeight}px`,animationPlayState : animationPaused ? 'paused' : 'running'}"
        >
            <p 
                class="paragraph" 
                v-html="slides[currentIndex].quote.join(' ')"
                @animationstart="animationStart"
                @animationiteration="animationIteration"
            ></p>
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
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    .__left {
        flex: 1;
        .paragraph {
            animation: __paragraphAnimatedKeyFrame 5s linear infinite;
            font-size: 16px;
            .inspiration {
                position: relative;
                display: inline-block;
                padding: 5px 15px;
                margin-top: 10px;
                background-color: var(--quote-inspiration-bg);
                transition: background-color .3s ease-out , color .3s ease-out;
                &::before,
                &::after {
                    content: "";
                    display: inline-block;
                    position: absolute;
                    top: 0;
                    width: 4px;
                    height: 100%;
                    background-color: var(--quote-inspiration-bg-bar);
                    z-index: 10;
                    border-radius: 10px;
                    transition: background-color 0.3s ease-out;
                }

                &::before {
                    left: 0;
                }
                &::after {
                    right: 0;
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
            width: var(--slide-img-width);
            height: var(--slide-img-height);
            // background-image: url("/src/app/assets/images/wl.webp");
            background-position: center;
            background-size: cover;
            border-radius: 20px;
            animation: __imgAnimatedKeyFrame 5s linear infinite;
            background-color: rgb(224, 224, 224);
        }
    }
    &.animation_paused {
        .__left .paragraph,
        .__right .img_bl {
            animation-play-state: paused !important;
            -moz-animation-play-state: paused !important;
            -webkit-animation-play-state: paused !important;
        }
    }
    @keyframes __paragraphAnimatedKeyFrame {
        0% {
            opacity: 0;
            transform: translate(calc(-1 * var(--fade-distance, 0)),0);
        }
        5% {
            opacity: 0;
            transform: translate(calc(-1 * var(--fade-distance, 0)),0);
        }
        10% {
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
            opacity: 0;
            transform: translate(var(--fade-distance),0);
        }
        10% {
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

@media (min-width: 768px) {
    .pf_animation_container {
        flex-direction: row;
        .__right {
            .img_bl {
                width: 300px;
                height: 200px;
            }
        }
        @keyframes __paragraphAnimatedKeyFrame {
            0% {
                opacity: 0;
                transform: translate(0,var(--fade-distance));
            }
            5% {
                opacity: 0;
                transform: translate(0,var(--fade-distance));
            }
            10% {
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
                opacity: 0;
                transform: translate(0,calc(-1 * var(--fade-distance, 0)));
            }
            10% {
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


