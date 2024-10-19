<script setup lang="ts">
import BoxLayoutAuto from '../app/components/BoxLayoutAuto.vue';
import { onMounted } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';

const text = useTextAnimation()


onMounted(() => {
  text.init()
})
</script>

<template>
  <div>
    <section id="project-demo">
      <div class="left-layout">
        <div data-aos="fade-down" data-aos-duration="1500">
          <h2 class="text-typing" data-typing-duration="1000">Welcome to</h2>
          <h3 class="text-typing mt-1" data-typing-duration="1000" data-typing-delay="1000">My Project Showcase!</h3>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2000">
            As a passionate and experienced web developer,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2500">
            I believe in turning ideas into reality through powerful,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3000">
            user-friendly, and scalable solutions.
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3500">
            This page is dedicated to showcasing some of my best work,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4000">
            each project reflecting the unique challenges and solutions
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4500">
            that I’ve developed for clients across various industries.
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="5000">
            Whether it's a custom web app, API integration, or an
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="5500">
            eCommerce platform, my focus is on creating impactful
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="6000">
            digital experiences that drive results.
          </p>
        </div>
        <div class="mt-4 btn-more-wrapper">
          <a href="#project-demo-list">
            <button class="simple-button learn-more" data-aos="fade-down" data-aos-duration="1000">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="right-layout">
        <div data-aos="fade-up" data-aos-duration="1500">
          <img src="/src/app/assets/images/project.svg" alt="dev">
        </div>
      </div>
    </section>
  
    <section id="project-demo-list">
      <h3 data-aos="zoom-in" data-aos-duration="1000" class="mt-2" style="text-align: center;">
        Explore the Innovation Behind Every Project
      </h3>
      <div class="mt-5">
        <!-- chat app -->
        <BoxLayoutAuto title="Chat Web Application" demo-link="https://kh-chat.vercel.app/">
          <template #image>
            <img src="/src/app/assets/images/chat-project.svg" alt="">
          </template>
          <template #descript>
              This project is a feature-rich Real-Time Chat Web Application designed to offer seamless, instant
              communication between users. Built with cutting-edge technology, the application provides an intuitive
              interface where users can send and receive messages instantly without any delay. The app supports multiple
              conversations, group chats, and file sharing, making it perfect for personal, team, or business
              communication.
          </template>
        </BoxLayoutAuto>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <!-- TVKH -->
        <BoxLayoutAuto title="TVKH" demo-link="https://tvkh.vercel.app/">
          <template #image>
            <img src="/src/app/assets/images/movie.svg" alt="">
          </template>
          <template #descript>
              Discover a world of movies at your fingertips! Our platform brings you an extensive collection of films,
              from the latest blockbuster hits to timeless classics. Whether you’re looking for reviews, trailers, or
              recommendations, we’ve got you covered. Explore by genre, release date, or personal preferences, and build
              your watchlist with ease. With real-time updates, ratings, and streaming availability, TVKH makes it easier
              than ever to find your next favorite movie.
          </template>
        </BoxLayoutAuto>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">


</style>
