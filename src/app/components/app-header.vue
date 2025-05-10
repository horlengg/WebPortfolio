<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTheme } from '../../utils/usetheme';
import Home from '/icons/home.svg';
import Service from '/icons/service.svg';
import About from '/icons/about.svg';
import Skill from '/icons/skill.svg';
import Project from '/icons/project.svg';

const menuList = [
    { link: "/", label: "Home", icon: Home },
    { link: "/service", label: "Service", icon: Service },
    { link: "/project", label: "Project", icon: Project },
    { link: "/skill", label: "Skill", icon: Skill },
    { link: "/about", label: "About", icon: About },
]

const themeModeSwitchListRef = ref<HTMLElement>()
const appMenubarRef = ref<HTMLElement>()
let lastScrollTop = 0;
const isShowMenuApp = ref(false)
const emit = defineEmits<{
    (e: "link"): () => void
}>()
const menuClick = () => {
    emit("link");
}
const handleScrollApp = () => {
    if(innerWidth > 768) return
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollDown = scrollTop > lastScrollTop
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    if (!isScrollDown) {
        isShowMenuApp.value = true
    } else {
        isShowMenuApp.value = false
    }
}

onMounted(() => {
    const theme = useTheme(themeModeSwitchListRef.value!)
    theme.init()
    window.addEventListener("scroll", handleScrollApp)
})


</script>

<template>
    <header class="app-header layout_responsive">
        <button class="btn-switch-theme" id="btn-change-them">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m15 3.086l7.414 7.414H2v-2h15.586l-4-4zM22 13.5v2H6.414l4 4L9 20.914L1.586 13.5z" />
            </svg>
            <div class="theme-mode-wrapper">
                <span id="theme-mode-list" class="theme-mode-list text-sm txt-style" ref="themeModeSwitchListRef">
                    <span class="dark">Dark</span>
                    <span class="light">Light</span>
                </span>
            </div>
        </button>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    z-index: 1000;
    background-color: transparent;
    transition: background-color .5s ease;

    .btn-switch-theme {
        width: 100px;
        height: 35px;
        // margin-right: 30px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background-color: transparent;
        color: var(--text-color);
        .theme-mode-wrapper {
            height: 20px;
            overflow-y: hidden;
            &::-webkit-scrollbar {
                display: none;
            }

            span.theme-mode-list {
                display: flex;
                flex-direction: column;
                transition: transform 0.5s ease;
                letter-spacing: 2px;

                &.dark-mode {
                    transform: translateY(0px);
                }

                &:not(.dark-mode) {
                    transform: translateY(-22px);
                }

                span.dark,
                span.light {
                    padding: 5px 0;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .app-header {
        
    }
}
</style>