<script setup lang="ts">


defineProps<{
  link: string,
  label: string,
  icon: string
}>();


</script>

<template>
  <a :href="link" target="_blank">
    <img :src="icon" alt="icon" height="20" width="20">
    <span>
      {{ label }}
    </span>
  </a>
</template>

<style lang="scss" scoped>

a {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 10px;
  border: 1px solid var(--highlight-color);
  transition: color .3s ease;
  &:hover {
    color: var(--highlight-color);
  }
}


</style>