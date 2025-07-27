<script setup lang="ts">


defineProps<{
  link: string,
  label: string,
  icon: string
}>();


</script>

<template>
  <a :href="link" target="_blank">
    <img :src="icon" alt="icon" :height="icon.includes('fb') ? 25 : 20" :width="icon.includes('fb') ? 25 : 20">
    <span>
      {{ label }}
    </span>
  </a>
</template>

<style lang="scss" scoped>

a {
  text-decoration: none;
  color: #FFF;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 10px;
  border: 1px solid var(--highlight-color);
  transition: color .3s ease;
  background-color: var(--highlight-color);
  border-radius: 8.0px;
}


</style>