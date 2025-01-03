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
    <header class="app-header">
        <nav id="app-menu" class="app-menu" :class="{'active':isShowMenuApp}" ref="appMenubarRef">
            <ul>
                <li class="app-menu_item" v-for="menu of menuList" :key="menu.label" @click="menuClick">
                    <router-link :to="menu.link">
                        <div class="menu-item_content">
                            <span class="menu_icon">
                                <img :src="menu.icon" alt="icon">
                            </span>
                            <span class="menu_label">
                                {{ menu.label }}
                            </span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </nav>
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
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 60px;
    z-index: 1000;
    background-color: var(--layout-color);
    transition: background-color .5s ease;

    .app-menu {
        margin-right: 200px;
        transition: transform .3s ease-in-out, opacity .3s ease-in-out;
        position: relative;

        h2 {
            display: none;
        }

        ul {
            display: flex;
            align-items: center;
            list-style: none;
            gap: 30px;
            width: 100%;

            .menu-item_content {
                display: flex;
                align-items: center;
                gap: 5px;

                .menu_icon {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        filter: var(--icon-color);
                        transition: filter .3s ease-in-out;
                    }
                }
            }
        }

        .app-menu_item {
            position: relative;
            transition: background-color .3s ease-in-out, color .3s ease-in-out;
            user-select: none;

            a {
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 11px;
                color: inherit;
                width: 100%;
                height: 100%;

                &:hover,
                &.router-link-active {
                    &::after {
                        width: 100%;
                    }

                    color: #29BB19;

                    .menu_icon img {
                        filter: brightness(0) saturate(100%) invert(55%) sepia(24%) saturate(6147%) hue-rotate(79deg) brightness(103%) contrast(86%);
                    }
                }
            }
        }
    }

    .app-menu_overlay {
        position: fixed;
        inset: 0;
        background-color: rgb(3, 95, 158, 15%);
        z-index: 1001;
        pointer-events: none;
        display: none;
    }

    .btn-switch-theme {
        width: 100px;
        height: 35px;
        margin-right: 30px;
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
        border-bottom: 1px solid rgb(191, 210, 210);

        .app-menu {
            padding-top: 0px;
            background-color: var(--layout-color);
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 70px;
            margin-right: 0;
            z-index: 1002;
            border-right: 1px solid rgb(191, 210, 210);
            display: flex;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;

            &:not(.active) {
                transform: translateY(70px);
                opacity: 0;
            }

            &.active {
                opacity: 1;
                transform: translateY(0);
            }

            &::-webkit-scrollbar {
                display: none;
            }

            ul {
                flex-direction: row;
                align-items: flex-start;
                gap: 10px;
                padding: 0;
                width: 100%;
                min-width: 350px;

                .app-menu_item {
                    width: 100%;

                    .menu-item_content {
                        width: 100%;
                        flex-direction: column;
                        height: 50px;
                    }
                }
            }


            &.mobile-active {
                transform: translateX(0);

                &+.app-menu_overlay {
                    display: block;
                    pointer-events: auto;
                }
            }

            .app-menu_item {
                a {
                    min-height: 35px;
                    display: flex;
                    align-items: center;
                    padding: 0;
                }
            }
        }
    }
}
</style>