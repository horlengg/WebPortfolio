<script setup lang="ts">
import { onMounted } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';
import ServiceCard from '../app/components/service-card.vue';
import WebsiteImage from "@/app/assets/images/website.svg"
import DesignToolImage from "@/app/assets/images/design-tool.svg"
import MobileImage from "@/app/assets/images/mobile.svg"
import VuelaravelImage from "@/app/assets/images/vue-laravel.svg"

const text = useTextAnimation()


onMounted(() => {
  text.init()
})

</script>

<template>
  <div>
    <section id="service">
      <div class="left-layout">
        <div>
          <h2 class="text-typing" data-typing-duration="500">Customer</h2>
          <h3 class="text-typing mt-1" data-typing-duration="500" data-typing-delay="500">Service</h3>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="1000">
            As a dedicated freelance developer,
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="1500">
            I provide tailored, high-quality web
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="2000">
            and software development solutions
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="2500">
            designed to meet your unique needs.
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="3000">
            Whether you're a startup, small business,
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="3500">
            or enterprise, I specialize in crafting
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="4000">
            scalable, efficient,
          </p>
          <p class="text-typing text-sm mt-2 txt-style" data-typing-duration="500" data-typing-delay="4500">
            and robust systems that help drive your success.
          </p>
        </div>
        <div class="mt-5 btn-more-wrapper">
          <a href="#service-doc">
            <button class="simple-button learn-more" data-aos="fade-down" data-aos-duration="1500">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="right-layout">
        <div data-aos="fade-up" data-aos-duration="1500">
          <img src="/src/app/assets/images/service.svg" alt="dev">
        </div>
      </div>
    </section>
  
    <section id="service-doc">
      <h3 data-aos="zoom-in" data-aos-duration="1000" class="mt-2" style="text-align: center;">Feature</h3>
      <h3 data-aos="zoom-in" data-aos-duration="1000" class="mt-2" style="text-align: center;">Our Feature & Service</h3>
      <div class="list-service-card mt-5">
        <ServiceCard 
          title="Build Website" 
          :image="WebsiteImage" 
          description="Create fully tailored websites using HTML, CSS, JavaScript, JAVA, or other relevant languages."
        />
        <ServiceCard 
          title="UI/UX Design" 
          :image="DesignToolImage" 
          description="Design visually appealing and user-friendly interfaces with a focus on the user experience."
        />
        <ServiceCard 
          title="API Services" 
          :image="MobileImage" 
          description="I design and develop RESTful and GraphQL APIs that are secure, scalable, and well-documented."
        />
        <ServiceCard 
          title="API Integration" 
          :image="VuelaravelImage" 
          description="Seamlessly connect your application with external services (like payment gateways, social media platforms, CRMs, etc.) for smooth data flow and functionality."
        />
        
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

.list-service-card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 20px;
}

@media screen and (max-width: 768px) {
  .list-service-card {
    grid-template-columns: 1fr;
  }
}


</style>
