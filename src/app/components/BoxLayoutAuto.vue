<script setup lang="ts">

withDefaults(defineProps<{
    demoLink: string,
    title : string,
    linkCurrentPage? : boolean,
    linkButtonTitle? : string,
}>(), {

})

</script>

<template>
    <div class="box-layout-auto">
        <div class="image-warpper" data-aos="fade-up" data-aos-duration="500">
            <slot name="image" />
        </div>
        <div class="detail">
            <h4 data-aos="fade-up" data-aos-duration="500"> {{ title }} </h4>
            <p class="mt-4 text-sm txt-style" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                <slot name="descript" />
            </p>
            <div class="mt-5 view-demo-project" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                <a :href="demoLink" :target="linkCurrentPage ?'':'_blank'" class="page-button">
                    <span>{{linkButtonTitle || "Demo"}}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                        <path fill="currentColor"
                            d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.box-layout-auto {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    &:not(.education-demo) {
        margin-top: 150px;
    }
    div {
        flex: 1;
        img {
            width: 60%;
        }
        p {
            line-height: 30px;
        }
        &.image-warpper {
            display: flex;
            align-items: center;
        }
    }
    &.about-demo {
        .name {
            color: orange;
            letter-spacing: 2px;
        }
    }
}
@media screen and (max-width: 768px) {
    .box-layout-auto {
        flex-direction: column;
        gap: 100px;
        .image-warpper {
            justify-content: center;
        }
        .detail {
            h4 {
                text-align: center;
            }
            p {
                text-indent: 40px;
            }
        }
        .view-demo-project {
            display: flex;
            justify-content: center;
        }
        .profile-image-wrapper {
            margin: 0 auto;
        }
            
    }

}

</style>
