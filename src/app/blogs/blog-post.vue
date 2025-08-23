<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { converMdToHTML } from '@/app/utils/useMarkdownConvertor';
import { useRoute } from 'vue-router';
import BlogService from './blog.service';

const content = ref<string>(''); // Holds the HTML content

const route = useRoute();

onMounted(async () => {
  try {
    const title = route.params?.title as string;
    if(!title) return ;
    const data = await BlogService.getBlog(title) ?? '';
    content.value = converMdToHTML(data);
  } catch (error) {
    console.error('Error loading markdown file:', error);
  }
});

watch(content, async (newContent) => {
  if (!newContent) return;
  await nextTick(); // Wait DOM to update
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1); // remove '#'
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth'});
    }
  }
});

</script>

<template>
  <div v-html="content" class="blog_content"></div> <!-- Render HTML safely -->
</template>

<style lang="scss">
/* Optional: Add styling for markdown content */
ul {
  margin-left: 20px;
}

a {
  color: var(--link-color);
}
ul,ol {
  margin-left: 20px;
}
a {
  color: var(--link-color);
}
.blog_content {
  img {
    object-fit: contain !important;
    max-width: 100%;
    max-height: 400px;
  }
}
</style>