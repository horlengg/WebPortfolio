<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { converMdToHTML } from '@/app/utils/useMarkdownConvertor';
import { useRoute } from 'vue-router';
import BlogService from './blog.service';

const content = ref<string>(''); // Holds the HTML content

const route = useRoute();

// onMounted(async () => {
//   try {
//     const title = route.params?.title as string;
//     if(!title) return ;
//     const data = await BlogService.getBlog(title) ?? '';
//     content.value = converMdToHTML(data);
//   } catch (error) {
//     console.error('Error loading markdown file:', error);
//   }
// });
onMounted(async () => {
  try {
    const title = route.params?.title as string;
    if(!title) return;
    const data = await BlogService.getBlog(title) ?? '';
    content.value = converMdToHTML(data);
    
    await nextTick(); // Wait for DOM
    setupImageLoading(); // Add this
  } catch (error) {
    console.error('Error loading markdown file:', error);
  }
});
const setupImageLoading = () => {
  const images = document.querySelectorAll('.blog_content img');
  
  images.forEach((img) => {
    const imgElement = img as HTMLImageElement; // Type assertion here
    
    // Create wrapper and skeleton
    const wrapper = document.createElement('div');
    wrapper.className = 'img-skeleton-wrapper';
    
    const skeleton = document.createElement('div');
    skeleton.className = 'img-skeleton';
    
    // Wrap image
    imgElement.parentNode?.insertBefore(wrapper, imgElement);
    wrapper.appendChild(skeleton);
    wrapper.appendChild(imgElement);
    
    // Add loading class initially
    imgElement.classList.add('img-loading');
    
    // Remove skeleton when loaded
    imgElement.addEventListener('load', () => {
      skeleton.remove();
      imgElement.classList.remove('img-loading');
    });
    
    // Handle errors
    imgElement.addEventListener('error', () => {
      skeleton.className = 'img-skeleton-error';
      skeleton.textContent = '⚠ Failed to load image';
    });
  });
};

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
.blog_content {
  .img-skeleton-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    min-height: 300px;
    background: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .img-skeleton {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #f0f0f0 0%,
      #e0e0e0 20%,
      #f0f0f0 40%,
      #f0f0f0 100%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  .img-skeleton-error {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fee;
    color: #c33;
    font-size: 14px;
  }
  
  img {
    &.img-loading {
      opacity: 0;
    }
    
    transition: opacity 0.3s ease;
    object-fit: contain !important;
    max-width: 100%;
    max-height: 400px;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

</style>