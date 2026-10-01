<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { converMdToHTML } from '@/app/utils/useMarkdownConvertor';
import { useRoute } from 'vue-router';
import BlogService from './blog.service';
import 'highlight.js/styles/github-dark.min.css';

const content = ref<string>('');
const route = useRoute();

// Keep track of blob URLs so we can free the memory later
const objectUrls: string[] = [];

onMounted(async () => {
  try {
    const title = route.params?.title as string;
    if (!title) return;
    const data = (await BlogService.getBlog(title)) ?? '';
    content.value = converMdToHTML(data);

    await nextTick();
    setupImageLoading();
    setupVideoLoading(); // <-- new
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

const setupVideoLoading = () => {
  const container = document.querySelector('.blog_content');
  if (!container) return;

  container.querySelectorAll('video').forEach(async (video) => {
    const sourceEl = video.querySelector('source');
    const url = video.getAttribute('src') ?? sourceEl?.getAttribute('src');
    if (!url) return;

    const mime = sourceEl?.getAttribute('type') || 'video/mp4';

    // Needed for iOS so it doesn't force fullscreen
    video.setAttribute('playsinline', '');
    video.classList.add('video-loading');

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Read into memory and re-wrap with the correct MIME type
      const buffer = await res.arrayBuffer();
      const blob = new Blob([buffer], { type: mime });
      const objectUrl = URL.createObjectURL(blob);
      objectUrls.push(objectUrl);

      // Remove the original <source> so the browser doesn't use it
      video.querySelectorAll('source').forEach((s) => s.remove());
      video.removeAttribute('src');
      video.src = objectUrl;
      video.load();
    } catch (err) {
      console.error('Failed to load video:', url, err);
    } finally {
      video.classList.remove('video-loading');
    }
  });
};

watch(content, async (newContent) => {
  if (!newContent) return;
  await nextTick();
  const hash = window.location.hash;
  if (hash) {
    const el = document.getElementById(hash.substring(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  }
});

onBeforeUnmount(() => {
  objectUrls.forEach((u) => URL.revokeObjectURL(u));
  objectUrls.length = 0;
});

</script>

<template>
  <div v-html="content" class="blog_content"></div> 
</template>
