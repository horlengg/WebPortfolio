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
          <h2 class="text-typing" data-typing-duration="500">Customer Service</h2>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="500">
            As a dedicated freelance developer,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1000">
            I provide tailored, high-quality web
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1500">
            and software development solutions
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2000">
            designed to meet your unique needs.
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2500">
            Whether you're a startup, small business,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3000">
            or enterprise, I specialize in crafting
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3500">
            scalable, efficient,
          </p>
          <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4000">
            and robust systems that help drive your success.
          </p>
        </div>
        <div class="mt-5 btn-more-wrapper" data-aos="fade-down" data-aos-duration="500" data-aos-delay="3000">
          <a href="#service-doc">
            <button class="simple-button learn-more" >
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
          title="Mobile App & Website Development Services" 
          :image="WebsiteImage" 
          description="Looking to bring your ideas to life with a high-performing mobile app or a sleek, responsive website? I specialize in custom development solutions tailored to your business needs. Whether you're launching a startup, building a business platform, or upgrading an existing product, I deliver intuitive, scalable, and user-friendly digital experiences."
        />
        <ServiceCard 
          title="UX/UI Design Services" 
          :image="DesignToolImage" 
          description="Crafting Beautiful, User-Centered Digital Experiences I specialize in creating clean, intuitive, and engaging user experiences that not only look great but also deliver real results. Whether you're launching a new app, refreshing a website, or building a digital product from scratch, I design interfaces that users love to interact with."
        />
        <ServiceCard 
          title="API Development Services" 
          :image="MobileImage" 
          description="Build Fast, Secure, and Scalable Backends for Your Apps I provide reliable API development services that power seamless communication between your mobile apps, websites, and third-party platforms. Whether you're building a new system or integrating with existing services, I create custom APIs that are clean, secure, and easy to maintain."
        />
        <ServiceCard 
          title="API Integration Services" 
          :image="VuelaravelImage" 
          description="Connect, Automate, and Expand Your Digital Ecosystem I help businesses streamline operations and enhance functionality by integrating powerful third-party APIs into their apps, websites, or systems. From payment gateways to cloud services, I ensure smooth, secure, and scalable API connections that just work."
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
