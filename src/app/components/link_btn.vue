<script setup lang="ts">


defineProps<{
  link: string,
  label: string,
  icon: string
}>();


</script>

<template>
  <a :href="link" target="_blank">
    <button class="contact_button">
      <img :src="icon" alt="icon" class="icon_img" :class="label">
    </button>
  </a>
</template>

<style lang="scss" scoped>

a {
  text-decoration: none;
  .contact_button {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    $border: 1px;
    color: #FFF;
    background-color: rgb(var(--layout-color));
    background-clip: padding-box; /* !importanté */
    border: solid $border transparent; /* !importanté */
    border-radius: 12px;
    transition: background-color .3s ease-out , color .3s ease-out;
    cursor: pointer;
    .icon_img {
      &:not(.facebook) {
        width: 20px;
        height: 20px;
      }
      &.facebook {
        width: 27px;
        height: 27px;
      }
    }
    &:before {
      content: '';
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      z-index: -1;
      margin: -$border; /* !importanté */
      border-radius: inherit; /* !importanté */
      background: linear-gradient(to bottom,#9875d1,rgb(253 224 71));
    }
  }
}

</style>