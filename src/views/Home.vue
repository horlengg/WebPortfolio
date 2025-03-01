<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';

const text = useTextAnimation()
const keyRandom = ref<string>("")

const handleDownloadCV = ()=>{
  alert("Sorry, File is not available now.")
}

onMounted(()=>{
  text.init()
  setInterval(()=>{
    keyRandom.value = Math.random().toString()
  },10000)
})

</script>

<template>

  <div>
    <section id="home">
      <div class="home_left-layout"  :key="keyRandom">
        <h2 class="text-typing" data-typing-duration="500">Hello there!.</h2>
        <h4 class="text-typing mt-1" data-typing-delay="500" data-typing-duration="500">
          Welcome to my portfolio!
        </h4>
        <div class="mt-2" style="word-break: keep-all">
          <p class="text-typing text-sm description txt-style" data-typing-delay="1000" data-typing-duration="500">
            I'm Ly Horleng, a Frontend Developer
          </p>
          <p class="text-typing mt-1 text-sm description txt-style" data-typing-delay="1500" data-typing-duration="500">
            with a passion for creating visually stunning
          </p>
          <p class="text-typing mt-1 text-sm description txt-style" data-typing-delay="2000" data-typing-duration="500">
            responsive, and user-centric websites. From sleek 
          </p>
          <p class="text-typing mt-1 text-sm description txt-style" data-typing-delay="2500" data-typing-duration="500">
            interfaces to seamless user experiences, I'm 
          </p>
          <p class="text-typing mt-1 text-sm description txt-style" data-typing-delay="3000" data-typing-duration="500">
            dedicated to turning ideas into digital realities.
          </p>
        </div>
  
        <div class="mt-5" style="gap: 10px;align-self: self-start;">
          <p class="text-typing text-sm txt-style" data-typing-duration="500" data-typing-delay="3500">
            If you have any concern,
          </p>
          <p class="text-typing text-sm txt-style" data-typing-duration="500" data-typing-delay="4000">
            Please fell free to contact me!.
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4500">
            Thank you for watching...!
          </p>
        </div>
  
        <div class="social-media mt-3">
          <a href="tel:+885964083197" style="text-decoration: none" data-aos="fade-down" data-aos-duration="500">
            <button class="social-media_btn call">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98" />
                </svg>
              </span>
              <span class="title">Call</span>
            </button>
          </a>
          <a href="https://web.facebook.com/horlengg" target="_blank" style="text-decoration: none" data-aos="fade-down"
            data-aos-duration="500" data-aos-delay="500">
            <button class="social-media_btn facebook">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
                </svg>
              </span>
              <span class="title">Facebook</span>
            </button>
          </a>
          <a href="https://t.me/lengzhunzhe" target="_blank" style="text-decoration: none" data-aos="fade-down"
            data-aos-duration="500" data-aos-delay="1000">
            <button class="social-media_btn telegram">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434" />
                </svg>
              </span>
              <span class="title">Telegram</span>
            </button>
          </a>
          <div data-aos="fade-down" data-aos-duration="500" data-aos-delay="1500">
            <button class="social-media_btn telegram" @click="handleDownloadCV">
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" viewBox="0 0 20 20">
                  <path fill="currentColor" d="M6.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-.166h.334a1.167 1.167 0 0 0 0-2.334zm.834 1.334H7V12h.333a.167.167 0 0 1 0 .334M12 11.499a.5.5 0 0 1 .5-.499h.999a.5.5 0 0 1 0 1H13v.335h.5a.5.5 0 1 1 0 1H13l.001.164a.5.5 0 0 1-1 .002L12 12.834zM9.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h.502a1.5 1.5 0 0 0 0-3zm.5 2v-1h.002a.5.5 0 0 1 0 1zM4.001 4a2 2 0 0 1 2-2h4.585a1.5 1.5 0 0 1 1.061.44l3.914 3.914a1.5 1.5 0 0 1 .44 1.06v1.668a1.5 1.5 0 0 1 .998 1.414v4.003a1.5 1.5 0 0 1-.998 1.414V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-.087A1.5 1.5 0 0 1 3 14.5v-4.003a1.5 1.5 0 0 1 1-1.414zm11 4h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v4.996h10zM5 15.999A1 1 0 0 0 6 17h8a1 1 0 0 0 1-1.001zm6-12.792V6.5a.5.5 0 0 0 .5.5h3.292zM4.502 9.996a.5.5 0 0 0-.5.5v4.003a.5.5 0 0 0 .5.5h10.997a.5.5 0 0 0 .5-.5v-4.003a.5.5 0 0 0-.5-.5z"/>
                </svg>
              </span>
              <span class="title">Download CV</span>
            </button>
          </div>
        </div>
  
      </div>
      <div class="right">
        <div class="profile-image-wrapper" data-aos="fade-up" data-aos-duration="3000">
          <div class="profile-image"></div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped lang="scss">
</style>
