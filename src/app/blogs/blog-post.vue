<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { converMdToHTML } from '@/app/utils/useMarkdownConvertor';
import { useRoute } from 'vue-router';
import BlogService from './blog.service';
import 'highlight.js/styles/github-dark.min.css';

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
  const blogContainer = document.querySelector(".blog_content")
  if(!blogContainer) return ;
  const images = blogContainer.querySelectorAll('img');

  images.forEach((img) => {
    const imgElement = img as HTMLImageElement;
    const parent = imgElement.parentElement;
    const isWrappedByPtag = parent?.tagName === 'P';

    // Create wrapper and skeleton
    const wrapper = document.createElement('div');
    wrapper.className = 'img-skeleton-wrapper ' + (img.alt.includes("humnail") ? "blog-thumbnail" : "");
    const skeleton = document.createElement('div');
    skeleton.className = 'img-skeleton';

    wrapper.appendChild(skeleton);
    wrapper.appendChild(imgElement); // moves imgElement out of its current spot

    if (isWrappedByPtag && parent) {
      // Insert wrapper as a sibling right after the <p>, then clean up
      parent.insertAdjacentElement('afterend', wrapper);

      // Remove the <p> if it's now empty (no other content besides the image)
      if (parent.childNodes.length === 0) {
        parent.remove();
      }
    } else {
      // Original behavior: wrap in place
      imgElement.parentNode?.insertBefore(wrapper, imgElement);
      wrapper.appendChild(imgElement);
    }

    imgElement.classList.add('img-loading');

    imgElement.addEventListener('load', () => {
      skeleton.remove();
      imgElement.classList.remove('img-loading');
      wrapper.classList.remove('img-skeleton-wrapper');
    });

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
