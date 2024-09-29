<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTheme } from '../../utils/usetheme';

const menuList = [
    {link : "/",label : "Home"},
    {link : "/service",label : "Service"},
    {link : "/project",label : "Project"},
    {link : "/skill",label : "Skill"},
    {link : "/about",label : "About"},
]

const themeModeSwitchListRef = ref<HTMLElement>()
const buttonToggleLayoutRef = ref<HTMLElement>()
const menuOverlayRef = ref<HTMLElement>()
const menuElementRef = ref<HTMLElement>()
const emit = defineEmits<{
    (e:"link") : () => void
}>()

const toogleMenu = ()=>{
    if(!menuElementRef.value) throw new Error("menuElementRef can't be undefined")
    if(menuElementRef.value.classList.contains("mobile-active")) 
        menuElementRef.value.classList.remove("mobile-active")
    else 
        menuElementRef.value.classList.add("mobile-active")
}

const menuClick = ()=>{
    toogleMenu()
    emit("link");
}

onMounted(()=>{
    const theme = useTheme(themeModeSwitchListRef.value!)
    theme.init()
    if(buttonToggleLayoutRef.value && menuOverlayRef.value){
        buttonToggleLayoutRef.value.addEventListener("click",toogleMenu)
        menuOverlayRef.value.addEventListener("click",toogleMenu)
    }
})

</script>

<template>
    <header class="app-header">
        <div>
            <button class="btn-bugar" id="btn-toogle-menu" ref="buttonToggleLayoutRef">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" />
                </svg>
            </button>
        </div>
        <div id="app-menu" class="app-menu" ref="menuElementRef">
            <h2>Ly Houleng</h2>
            <ul>
                <li class="app-menu_item" v-for="menu of menuList" :key="menu.label" @click="menuClick">
                    <router-link :to="menu.link">
                        {{ menu.label }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="app-menu_overlay" id="menu-overlay" ref="menuOverlayRef"></div>
        <button class="btn-switch-theme" id="btn-change-them">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m15 3.086l7.414 7.414H2v-2h15.586l-4-4zM22 13.5v2H6.414l4 4L9 20.914L1.586 13.5z" />
            </svg>
            <div class="theme-mode-wrapper">
                <span id="theme-mode-list" class="theme-mode-list" ref="themeModeSwitchListRef">
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
    .btn-bugar {
        display: none;
    }
    .app-menu {
        margin-right: 200px;
        transition: transform .3s ease;
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
        }
        .app-menu_item {
            position: relative;
            transition: background-color .3s ease,color .3s ease;
            &::before {
                content: "";
                width: 12px;
                height: 12px;
                background-color: #29BB19;
                position: absolute;
                left: -15px;
                top: 50%;
                transform: translateY(-50%);
                clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            }
            a {
                text-decoration: none;
                color: inherit;
                width: 100%;
                height: 100%;
                &::after {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    width: 0;
                    border-bottom: 1.5px solid #29BB19;
                    left: 0;
                    background-color: #29BB19;
                    transition: width .3s ease-in-out;
                }
                &:hover ,
                &.router-link-active {
                    &::after {
                        width: 100%;
                    }
                    color: #29BB19;
                }
            }
        }
    }
    .app-menu_overlay {
        position: fixed;       
        inset: 0;
        background-color: rgb(3, 95, 158,15%);
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
                &.dark-mode {
                    transform: translateY(-4px);
                }
                &:not(.dark-mode) {
                    transform: translateY(-30px);
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
      justify-content: space-between;
      border-bottom: 1px solid rgb(191, 210, 210);
      .btn-bugar {
          display: flex;
          width: 40px;
          height: 40px;
          margin-left: 15px;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          background-color: transparent;
          transition: background-color .3s ease;
          color: var(--text-color);
      }
      .app-menu {
          padding-top: 50px;
          background-color: var(--layout-color);
          position: fixed;
          top: 0;
          left: 0;
          width: 70vw;
          height: 100vh;
          border-radius: 5px;
          transform: translateX(-110%);
          margin-right: 0;
          z-index: 1002;
          border-right: 1px solid rgb(191, 210, 210);
          h2 {
              display: inline-block;
              width: 100%;
              padding-left: 20px;
              position: relative;
              color: orange;
              letter-spacing: 0.165em;
              font-size: 25px;
              font-weight: 800;
              text-transform: uppercase;
          }
          ul {
              margin-top: 40px;
              flex-direction: column;
              align-items: flex-start;
              gap: 10px;
              padding: 20px 0;
              width: 100%;
              overflow: hidden;
          }
          .app-menu_item  {
              width: 100%;
          }
          &.mobile-active {
              transform: translateX(0);
              & + .app-menu_overlay {
                  display: block;
                  pointer-events: auto;
              }
          }
          .app-menu_item {
              a {
                min-height: 35px;
                display: flex;
                align-items: center;
                padding: 0 20px;
              }
          }
      }
  }
}

</style>