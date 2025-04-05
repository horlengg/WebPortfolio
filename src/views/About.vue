<script setup lang="ts">
import { onMounted } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';
import BoxLayoutAuto from '../app/components/BoxLayoutAuto.vue';

const text = useTextAnimation()


onMounted(() => {
  text.init()
})

</script>

<template>

  <div>
    <section id="about">
      <div class="mt-5">
        <BoxLayoutAuto title="Ly Horleng" demo-link="#education" linkCurrentPage linkButtonTitle="More">
          <template #image>
            <div>
              <div class="profile-image-wrapper" style="margin: auto;">
                <div class="profile-image"></div>
              </div>
            </div>
          </template>
          <template #descript>
            Hi, I’m Ly Horleng, a passionate and dedicated Web Developer with a strong background in creating dynamic,
            user-friendly, and efficient web applications. With a focus on both front-end and back-end development,
            I specialize in building websites and web apps that are not only visually appealing but also highly
            functional and scalable.
            I love turning complex ideas into simple, engaging digital solutions.
          </template>
        </BoxLayoutAuto>
  
      </div>
  
    </section>
  
    <section id="education">
      <!-- Education -->
      <h2 data-aos="fade-up" data-aos-duration="1000">Education</h2>
      <div class="box-layout-auto mt-10 education-demo">
        <div class="image-warpper" data-aos="fade-up" data-aos-duration="1000">
          <img src="/src/app/assets/images/education.svg" alt="">
        </div>
        <div>
          <div class="date-edu">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M18.435 4.955h-1.94v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-7v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-1.93a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h12.87a2.5 2.5 0 0 0 2.5-2.5v-11a2.5 2.5 0 0 0-2.5-2.5m1.5 13.5c0 .83-.67 1.5-1.5 1.5H5.565c-.83 0-1.5-.67-1.5-1.5v-8.42h15.87zm0-9.42H4.065v-1.58c0-.83.67-1.5 1.5-1.5h1.93v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h7v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h1.94c.83 0 1.5.67 1.5 1.5z" />
              <path fill="currentColor"
                d="M11.492 17.173v-3.46a.075.075 0 0 0-.114-.064l-.638.392a.15.15 0 0 1-.228-.128v-.651c0-.105.055-.203.146-.257l.764-.457a.3.3 0 0 1 .154-.043h.626a.3.3 0 0 1 .3.3v4.367a.3.3 0 0 1-.3.3h-.409a.3.3 0 0 1-.301-.299" />
            </svg>
            <span>
              2011 - Current
            </span>
          </div>
          <p class="mt-4 text-sm txt-style">
            I am currently pursuing a degree in Computer Science at the Royal University of Phnom Penh,
            where I began my studies in 2022. This program is providing me with a solid foundation in various aspects of
            computer science, including programming,
            data structures, algorithms, and software engineering. I am actively engaging in both theoretical and
            practical coursework, which is preparing me for a career in the technology sector.
            Prior to my university education, I attended Mesang High School from 2019 to 2021. During my time there, I
            developed a strong interest in science and mathematics, which ultimately guided my decision to pursue a degree
            in computer science.
            I was also involved in various extracurricular activities that helped me develop critical thinking and
            problem-solving skills. Before high school,
            I studied at Serey Udom Secondary School from 2017 to 2019. My years in secondary school were formative, as I
            built a strong academic foundation and began exploring my interest in technology and computer science through
            various projects and activities.
            My educational journey began at Rokar Primary School, where I studied from 2011 to 2017. These early years
            were crucial in shaping my academic interests and work ethic, setting the stage for my future educational
            pursuits.
            Throughout my educational journey, I have consistently sought to challenge myself academically and to grow
            both personally and professionally. I am committed to continuing this path of learning and development as I
            advance through my studies and into my future career.
          </p>
        </div>
      </div>
    </section>
  
    <!-- work experience -->
    <section id="w-experience" class="mt-10">
  
      <h2 data-aos="fade-up" data-aos-duration="1000">My Journey</h2>
      <div class="box-layout-auto mt-10 education-demo">
        <div class="image-warpper" data-aos="fade-up" data-aos-duration="500">
          <img src="/src/app/assets/images/journey.svg" alt="">
        </div>
        <div>
          <div class="date-edu" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M18.435 4.955h-1.94v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-7v-1.41c0-.26-.23-.51-.5-.5s-.5.22-.5.5v1.41h-1.93a2.5 2.5 0 0 0-2.5 2.5v11a2.5 2.5 0 0 0 2.5 2.5h12.87a2.5 2.5 0 0 0 2.5-2.5v-11a2.5 2.5 0 0 0-2.5-2.5m1.5 13.5c0 .83-.67 1.5-1.5 1.5H5.565c-.83 0-1.5-.67-1.5-1.5v-8.42h15.87zm0-9.42H4.065v-1.58c0-.83.67-1.5 1.5-1.5h1.93v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h7v.59c0 .26.23.51.5.5s.5-.22.5-.5v-.59h1.94c.83 0 1.5.67 1.5 1.5z" />
              <path fill="currentColor"
                d="M11.492 17.173v-3.46a.075.075 0 0 0-.114-.064l-.638.392a.15.15 0 0 1-.228-.128v-.651c0-.105.055-.203.146-.257l.764-.457a.3.3 0 0 1 .154-.043h.626a.3.3 0 0 1 .3.3v4.367a.3.3 0 0 1-.3.3h-.409a.3.3 0 0 1-.301-.299" />
            </svg>
            <span>
              June 2023 - Current
            </span>
          </div>
          <p class="mt-4 text-sm txt-style" data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000">
            Since June 2023, I have been a dedicated Front End Developer at APD Bank,
            where I leverage my expertise to create seamless and engaging user interfaces for our financial products.
            My role involves collaborating closely with cross-functional teams, including back-end developers,
            UX/UI designers, and product managers,
            to ensure our digital solutions meet the highest standards of performance and usability. At APD Bank,
            I have successfully implemented a variety of projects,
            ranging from responsive web applications to interactive dashboards.
            Utilizing my proficiency in HTML, CSS, and JavaScript, along with frameworks like React and Angular,
            I have significantly contributed to enhancing the user experience and overall functionality of our platforms.
            One of my notable achievements includes the redesign of our online banking portal,
            which resulted in a 30% increase in user engagement and a 20% improvement in customer satisfaction scores.
            I also take pride in my ability to stay abreast of the latest industry trends and technologies,
            continuously integrating innovative solutions to keep APD Bank at the forefront of digital banking.
            My journey at APD Bank has not only honed my technical skills but also developed my problem-solving
            capabilities and attention to detail.
            I am passionate about creating intuitive and visually appealing web interfaces that provide a smooth and
            enjoyable experience for our users,
            thereby contributing to APD Bank’s mission of delivering exceptional digital banking services.
          </p>
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped lang="scss">

.date-edu {
    display: flex;
    align-items: center;
    gap: 20px;
    color: #2A81A7;
    svg {
        font-size: 25px;
    }
    span {
        font-size: 18px;
    }
    .current {
        background-color: #2A81A7;
        color: #FFf;
        padding: 2px 10px;
        border-radius: 8px;
    }
}

</style>
