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

body {
  --btn-contact-color : rgb(221, 219, 219);
}

a {
  text-decoration: none;
  .contact_button {
    background-color: var(--btn-contact-color); 
    width: 45px;
    height: 45px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    .icon_img {
      &:not(.facebook) {
        width: 25px;
        height: 25px;
      }
      &.facebook {
        width: 32px;
        height: 32px;
      }
    }
  }
}


</style>