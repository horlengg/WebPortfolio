<script setup lang="ts">
</script>


<template>
    <div class="border_left__lengdev">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.border_left__lengdev {
    position: relative;
    padding-left: 20px;
    &,
    & * {
        font-style: italic;
    }
    &::before {
        content: "";
        position: absolute;
        top: 8px;        /* pin top */
        bottom: 5px;     /* pin bottom -> gives it height */
        left: 8px;
        border-left: 2px dashed var(--primary-text-color, currentColor);
        opacity: .4;
    }
}
</style>