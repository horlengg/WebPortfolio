<script setup lang="ts">
import { useTheme } from '@/app/utils/usetheme';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { KHQR_LINK } from '../app.config';


const btnRef = ref<HTMLElement>()
const btnWrapperRef = ref<HTMLElement>()
const theme = useTheme();
const route = useRoute();
const router = useRouter();

const setBtnDistancefromRight = ()=>{
    if(!btnWrapperRef.value) return;
    const offsetWidth = (document.querySelector(".app_container") as HTMLElement)?.offsetWidth
    let distanceFromRight = ((innerWidth - offsetWidth) / 2) - 100
    btnWrapperRef.value.style.right = `${innerWidth >= 1024 ? distanceFromRight : 20}px`
}

const handleClickButtonNavigator = ()=>{
    if(route.path == '/') return router.push('/blogs');
    if(route.path.includes('/blogs/')){
        router.push('/blogs');
    }else {
        router.push('/');
    }
}

const handlePayCoffee = () => {
    window.open(
        KHQR_LINK,
        "_blank",
        "noopener,noreferrer"
    );
};


onMounted(()=>{
    theme.init(btnRef.value!);
    setBtnDistancefromRight()
    window.addEventListener("resize",()=>{
        setBtnDistancefromRight()
    })
})

</script>


<template>
    <div class="btn_theme_wrapper" ref="btnWrapperRef">
        <!-- <h1 class="app_title vt323">_buildHeader()...</h1> -->
        <div class="btn_wrapper">
            <button @click="handlePayCoffee">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="#fff" d="M144 32S94.11 69.4 96 96c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48m80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48m80 0s-49.89 37.4-48 64c1.604 22.57 44.375 25.665 48 48c1.91 11.772-16 32-16 32s48-25.373 48-48s-42.8-25.978-48-48c-3.875-16.414 16-48 16-48M73.293 201c1.43 63.948 18.943 179.432 74.707 238h152c55.764-58.568 73.278-174.052 74.707-238zm319.598.445c-.186 9.152-.652 19.252-1.472 30.057C419.312 235.162 441 259.142 441 288c0 31.374-25.626 57-57 57a56.7 56.7 0 0 1-12.764-1.465c-2.912 9.62-6.176 19.165-9.84 28.51A87.5 87.5 0 0 0 384 375c48.155 0 87-38.845 87-87c0-45.153-34.153-82.12-78.11-86.555zM42.763 457c1.507 5.193 3.854 11.2 6.955 16.37c2.637 4.394 5.69 8.207 8.428 10.58C60.882 486.32 63 487 64 487h320c1 0 3.118-.678 5.855-3.05c2.738-2.373 5.79-6.186 8.428-10.58c3.1-5.17 5.448-11.177 6.955-16.37z"/>
                </svg>
            </button>
            <button @click="handleClickButtonNavigator">
                <div class="btn_navigator" :class="{'is_home':route.path == '/'}">
                    <img 
                        src="/images/blog.png" 
                        alt="logo" 
                        width="28"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" color="#FFF">
                        <path fill="currentColor" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/>
                    </svg>
                </div>
            </button>
            <button @click="theme.toggleTheme">
                <div class="btn_icon_content" ref="btnRef">
                    <span class="btn_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M12.741 20.917a9.4 9.4 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.18 1.18 0 0 1 1.21.281a1.27 1.27 0 0 1 .325 1.293a8.1 8.1 0 0 0-.353 2.68a8.27 8.27 0 0 0 4.366 6.857a7.6 7.6 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.15 9.15 0 0 1-7.393 3.738M10.261 4.05a.2.2 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.22.22 0 0 0 .013-.235a.23.23 0 0 0-.206-.136a8.6 8.6 0 0 1-4.188-1.116a9.27 9.27 0 0 1-4.883-7.7a9.1 9.1 0 0 1 .4-3.008a.29.29 0 0 0-.069-.285a.18.18 0 0 0-.133-.057"/></svg>
                    </span>
                    <span class="btn_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M277.333 405.333v85.333h-42.667v-85.333zm99.346-58.824l60.34 60.34l-30.17 30.17l-60.34-60.34zm-241.359 0l30.17 30.17l-60.34 60.34l-30.17-30.17zM256 139.353c64.422 0 116.647 52.224 116.647 116.647c0 64.422-52.225 116.647-116.647 116.647A116.427 116.427 0 0 1 139.352 256c0-64.423 52.225-116.647 116.648-116.647m0 42.666c-40.859 0-73.981 33.123-73.981 74.062a73.76 73.76 0 0 0 21.603 52.296c13.867 13.867 32.685 21.64 52.378 21.603zm234.666 52.647v42.667h-85.333v-42.667zm-384 0v42.667H21.333v-42.667zM105.15 74.98l60.34 60.34l-30.17 30.17l-60.34-60.34zm301.7 0l30.169 30.17l-60.34 60.34l-30.17-30.17zM277.332 21.333v85.333h-42.667V21.333z"/></svg>
                    </span>
                    <span class="btn_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"/></svg>
                    </span>
                </div>
            </button>
        </div>
    </div>
</template>


<style scoped lang="scss">

.btn_theme_wrapper {
    position: fixed;
    bottom: 20px;
    z-index: 10;
    .app_title {
        font-size: 35px;
        color: var(--highlight-color);
    }
    .btn_wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        button {
            height: 45px;
            width: 45px;
            border-radius: 12px;
            cursor: pointer;
            overflow: hidden;
            background-color: var(--highlight-color);
            border: none;
            .btn_icon_content {
                display: flex;
                align-items: center;
                width: 100px;
                justify-content: space-between;
                transition: transform .3s ease-out;
                .btn_icon {
                    color: #FFFFFF;
                }
                &.dark_mode {
                    transform: translateX(10px);
                }
                &.light_mode{
                    transform: translateX(-27px);
                }
                &.device_mode{
                    transform: translateX(-64px);
                }
            }
            .btn_navigator {
                width: 65px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                transition: transform .3s ease-out;
                &.is_home {
                    transform: translateX(10px);
                }
                &:not(.is_home){
                    transform: translateX(-30px);
                }
            }
        }
    }
}

@media (min-width: 768px){
    .btn_theme_wrapper {
        bottom: 40px;
        .btn_wrapper {
            gap: 20px;
            button {
                box-shadow: 2px 8px 60px var(--highlight-color);
            }
        }
        .app_title {
            display: none;
        }
    }
}
</style>