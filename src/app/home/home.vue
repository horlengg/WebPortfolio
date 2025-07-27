<script setup lang="ts">
// import { onMounted } from "vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import LinkButton from "../components/link_btn.vue"
import QuoteSlider from "../components/quote_slider.vue";
import { useScrollAnimation } from "@horleng/scroll-animation.js";
import DevService from "../components/dev.service.vue";

const images = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });

const slideKey = ref(Date.now.toString())
const animated = useScrollAnimation({
    rootViewMargin : 150,
    elementActiveClassNamed : 'is_activated'
})

const getImageUrl = (fileName: string) => {
  const match = Object.entries(images).find(([path]) => path.endsWith(fileName));
  return match?.[1] ?? '';
};
document.addEventListener("visibilitychange",()=>{
  console.log(`Client Status :::: ${document.visibilityState}`);
  if(document.visibilityState == "visible"){
      slideKey.value = Date.now().toString();
  }
})

onMounted(()=>{
  const root  = document.querySelector('#app_root') as HTMLElement
  const targets = Array.from(document.querySelectorAll('.animation_target_el')).map(e => e as HTMLElement) ?? []
  animated.init({
    root : root,
    targets : targets
  });
})

onBeforeUnmount(()=>{
  animated.dispose();
})

</script>

<template>
  <!-- <AppHeader /> -->
  <!-- Home Session -->
  <section id="Home"  class="mt_70">
    <!-- slider -->
    <QuoteSlider :key="slideKey"/>
    <div class="animation_target_el">
      <p class="title_label_bold vt323 mt_70"> Welcome to my portfolio!.</p>
      <p class="title_label_bold vt323"> Mobile & Web Developer </p>
      <p class="mt_10">
        Crafting modern, responsive, and performant apps for mobile and web platforms.
      </p>
      <p class="mt_10">
        I'm Ly Horleng, a passionate Mobile and Web Developer with a strong focus on creating fast, scalable, and user-friendly digital experiences. I specialize in building full-stack applications using technologies like Flutter, Vue , React and Node.js.
        <br>
        With a detail-oriented mindset and a love for clean code, I enjoy solving real-world problems through design-driven development and always strive to stay updated with the latest tech trends.
      </p>
    </div>
  </section>

  

  
  <!-- Skill Session -->

  <section id="Skills" class="mt_70">

    <p class="title_label_bold vt323 animation_target_el">🛠️ Skills & Tech Stack </p>
    <!-- Frontend Dev -->
    <div class="animation_target_el">
      <p class="list_title_highlight mt_20"> Frontend Development </p>
      <p class="">
        Typescript • Javascript • Vue • React • CSS • HTML • Tailwind CSS • SASS • Electron
      </p>
    </div>
    <!-- Mobile Dev-->
    <div class="animation_target_el">
      <p class="list_title_highlight mt_10 "> Mobile Development </p>
      <p class=""> Flutter </p>
    </div>
    <div class="animation_target_el">
      <!-- Backend & Database -->
      <p class="list_title_highlight mt_10 ">
        Backend & Database
      </p>
      <p class="">
        Node.js • Express.js • Nest.js • MongoDB • PostgresSql • Java • Spring Boot • Python • Flask & Django(basic)
      </p>
    </div> 

    <!-- Dev Tools & Others -->
    <div class="animation_target_el">
      <p class="list_title_highlight mt_10">
        Dev Tools & Others
      </p>
      <p class="">
        Git • GitHub • VSCode • Postman • Figma • Docker(basic)
      </p>
    </div>

  </section>

  <!-- service section -->
  <dev-service />


  <!-- Projects -->
  <section id="Project" class="mt_70" >
    <p class="title_label_bold vt323 animation_target_el">🚀 Projects</p>
    <!-- Frontend Dev -->
    <div class="animation_target_el">
      <p class="list_title_highlight mt_20"> 🎬 Movie Web Application </p>
      <div class="mt_40 demo_img">
        <div class="demo_img_item">
          <div 
            class="img_wrapper single_img_mode" 
            :style="{ backgroundImage: `url(${getImageUrl('pktv_s1.png')})` }"
          ></div>
        </div>
      </div>
      <p class="mt_20">
        This project naming as <b>Piphubkun TV</b>
        is a dedicated platform for fans of Donghua, specifically focusing on 3D Chinese animation. The website provides an immersive and engaging experience, offering a curated collection of Donghua series and movies. With a sleek, modern design, users can easily explore popular titles, discover hidden gems, and dive into rich content details, including synopses, character profiles, and behind-the-scenes information. The platform features personalized recommendations powered by smart algorithms, helping fans find their next favorite show or movie. Robust search and filtering options make it simple to browse by genre, theme, or studio, while interactive community features like reviews, ratings, and comments foster a vibrant space for Donghua enthusiasts. Built with cutting-edge technologies, Piphubkun TV is fully responsive, ensuring a seamless experience across devices and showcasing my passion for web development and love for Donghua. This project is a testament to my skills in creating engaging, scalable, and user-focused digital platforms.
        <br>
        This project gave me hands-on experience with API integration, responsive design best practices, and state management in a single-page application.
      </p>
      <p class="mt_10">
        <b>Technologies Used</b> <br> 
        Vue • Typescript • SASS • Nest.js(API) • MongoDB • Cloudinary(Storage)
      </p>
      <a href="https://piphubkun-tv.vercel.app/" target="_blank" class="project_demo_link mt_10">
        Live Demo
      </a>
    </div>
    <hr class="mt_20 border_only" >
    <!-- Mobile Dev-->
    <div class="animation_target_el">
      <p class="list_title_highlight mt_30 animation_target_el"> 💬 Telegram Web UI Clone (In Progress) </p>
      <!-- tme_clone_02 -->
      <div class="mt_40 demo_img">
        <div class="demo_img_item animation_target_el">
          <div 
            class="img_wrapper single_img_mode"
            :style="{ backgroundImage: `url(${getImageUrl('tme_clone_02.png')})` }"
          ></div>
        </div>
      </div>
  
      <p class="mt_20">
        This is a front-end-only clone of the Telegram Web interface, built as a personal project to practice layout structuring, component styling, and UI design replication using modern web technologies. 
        <br>
        Currently optimized for desktop view only — mobile responsiveness is not yet implemented.
        <br>
        This project helped me strengthen my skills in component-based UI development and CSS structuring. Mobile responsiveness and interactivity will be added in the next development phase.
      </p>
      <p class="mt_10">
        <b>Technologies Used</b> <br>
        Vue • Typescript • SASS 
      </p>
      <a href="https://web-telegram-clone.vercel.app/" target="_blank" class="project_demo_link mt_10">
        Live Demo
      </a>
    </div>

  </section>

  <!-- Experience Session -->

  <section id="Experience" class="mt_70">
    <div class="animation_target_el">
      <p class="title_label_bold vt323"> 🧑‍💻 Experience </p>
  
      <!-- As a web developer -->
      <p class="list_title_highlight mt_10">Web Developer – APD Bank</p>
      <p class="">
        <i>June 2023 – April 2025</i>
      </p>
    </div>
    <ol class="experience_list mt_10 animation_target_el">
      <li>Built responsive and component-based web interfaces using Vue 3 + TypeScript</li>
      <li>Implemented API integrations and dynamic data rendering using Axios and Vue's reactivity system</li>
      <li>Created reusable UI components and handled routing with Vue Router</li>
      <li>Worked with Pinia for state management and Tailwind CSS for consistent styling</li>
      <li>Collaborated with backend developers to connect RESTful APIs and improve performance</li>
      <li>Ensured mobile-first design and cross-browser compatibility</li>
    </ol>

    <div class="mt_40 demo_img">
      <div class="demo_img_item animation_target_el">
        <div 
          class="img_wrapper" 
          :style="{ backgroundImage: `url(${getImageUrl('apd_team.png')})` }"
        ></div>
        <p>
          <!-- description -->
        </p>
      </div>
      <hr class="border_only">
      <div class="demo_img_item animation_target_el">
        <div 
          class="img_wrapper" 
          :style="{ backgroundImage: `url(${getImageUrl('fontend_unit.jpeg')})` }"
        ></div>
        <p>
          <!-- description -->
        </p>
      </div>
    </div>
    
    <!-- As a mobile app developer -->
     <div class="animation_target_el">
       <p class="list_title_highlight mt_60">Mobile Developer – APD Bank</p>
       <p>
         <i>April 2025 – Currently</i>
       </p>
     </div>
    <ol class="experience_list mt_10 animation_target_el">
      <li>Developed and maintained cross-platform mobile apps using Flutter</li>
      <li>Integrated real-time backend services with Firebase (Auth, Firestore, Cloud Functions)</li>
      <li>Collaborated with UI/UX designers to implement pixel-perfect, responsive interfaces</li>
      <li>Wrote clean, modular Dart code following best practices and state management patterns (e.g., Provider)</li>
      <li>Participated in Agile sprints, daily standups, and peer code reviews</li>
      <li>Ensured mobile-first design and cross-browser compatibility</li>
      <li>Develop new feature and maintenance APD Mobile App</li>
    </ol>
    <div class="mt_40 demo_img">
      <div class="demo_img_item animation_target_el">
        <div 
          class="img_wrapper" 
          :style="{ backgroundImage: `url(${getImageUrl('mobile_team.jpeg')})` }"
        ></div>
        <p>
          <!-- description -->
        </p>
      </div>
      <hr class="border_only">
      <div class="demo_img_item animation_target_el">
        <div 
          class="img_wrapper" 
          :style="{ backgroundImage: `url(${getImageUrl('s4.jpg')})` }"
        > </div>
        <p>
          <!-- description -->
        </p>
      </div>
    </div>
    

  </section>

  <!-- Education Session -->

  <section id="Education" class="mt_70">
    <div class="animation_target_el">
      <p class="title_label_bold vt323"> 🎓 Education & Training </p>
      <!-- As a web developer -->
      <p class="list_title_highlight mt_10">Royal University of Phnom Penh</p>
      <p class="">
        <i>Bachelor of Science in Computer Science</i>
      </p>
      <p class="">
        <i>March 2022 – May 2025</i>
      </p>
    </div>
    <ol class="experience_list mt_10 animation_target_el">
      <li>Focused on software development, data structures, and web technologies</li>
      <li>Web Development (HTML, CSS, JavaScript, React.js PHP ...)</li>
      <li>Database Systems (MySQL, Sql Server...)</li>
      <li>Software Engineering & Project Management</li>
      <li>Participated in coding challenges and collaborative assignments to strengthen problem-solving and teamwork skills</li>
    </ol>
    <!--  -->
    <div class="mt_50 demo_img">
      <div class="demo_img_item animation_target_el">
        <div 
          class="img_wrapper single_img_mode" 
          :style="{ backgroundImage: `url(${getImageUrl('classmate_rupp.jpeg')})` }"
        ></div>
      </div>
      <hr class="border_only">
      
    </div>
    
    <!-- APD Bank Trainning -->
     <div class="animation_target_el">
       <p class="list_title_highlight mt_70">Development Training – APD Bank</p>
       <p>
         This training wasn’t just about becoming a better developer — it was about becoming a better version of myself. I'm truly grateful for this experience, and I carry forward not only the skills I’ve gained but also the happiness and motivation it has given me.
         <br>
         Every day brought new challenges, but also new lessons and achievements. I learned how to:
       </p>
     </div>
    <ol class="experience_list mt_10 animation_target_el">
      <li>Collaborate with team members in a structured, respectful way</li>
      <li>Write cleaner, more maintainable code</li>
      <li>Manage my time and tasks with greater responsibility</li>
      <li>Communicate better in a professional environment</li>
    </ol>
    
    <div class="mt_40 demo_img">
      <div class="demo_img_item">
        <div 
          class="img_wrapper animation_target_el" 
          :style="{ backgroundImage: `url(${getImageUrl('application_team_06.png')})` }"
        ></div>
        <p class="mt_20 animation_target_el">
          <b>As Trainee at APD Bank</b>
          <br>
          Joining APD Bank as a trainee has been one of the most meaningful and joyful chapters of my professional journey. Over the course of my training, I’ve experienced tremendous growth — not just in technical skills, but also in mindset, teamwork, and confidence.
          Under the guidance of experienced mentors like Bong <b>Chea Rasmey</b> and Bong <b>Lim Ravy</b> (Frontend Team Leader), I had the opportunity to learn essential development practices such as Git workflow, coding standards, and collaboration techniques. 
          <br>
          These lessons were more than just technical rules — they were the foundation of how real, effective software teams work together.
        </p>
      </div>
      <hr class="border_only">
      <div class="demo_img_item">
        <div 
          class="img_wrapper animation_target_el" 
          :style="{ backgroundImage: `url(${getImageUrl('application_team_02.png')})` }"
        ></div>
        <p class="mt_20 animation_target_el">
          I recently participated in a technical training session at APD Bank led by Bong <b>Chea Rasmey</b>, our Frontend Team Leader. The main focus of the session was on essential development rules and best practices, with a particular emphasis on Git usage and team collaboration standards.
          <br>
          <br>
          This session helped reinforce the importance of maintaining a clean and professional codebase and highlighted how consistency and collaboration contribute to higher development quality and productivity.

          I'm grateful to Bong <b>Chea Rasmey</b> for sharing his knowledge and providing practical insights that will benefit our daily work and team dynamics.
        </p>
      </div>
      
    </div>

  </section>

  <!-- Contact Session -->

  <section id="Contact" class="mt_70">
    <div class="animation_target_el">
      <p class="title_label_bold vt323">
        📬 Contact Me
      </p>
      <p class="">
        Let's work together or talk tech!
      </p>
      <p class="">
        Whether you have a project in mind, want to collaborate on something creative, or just have a question about mobile and web development — I'd love to hear from you.
        Feel free to reach out via email or connect with me on LinkedIn. I'm open to freelance opportunities, full-time roles, or even just a friendly chat about tech trends and tools.
  
        Your message is always welcome — let's build something great together!
      </p>
    </div>

    <div class="contact_list mt_70 animation_target_el">
      <LinkButton icon="/icons/linkin.svg" label="LinkedIn" link="https://www.linkedin.com/in/ly-horleng-47b05932b"/>
      <LinkButton icon="/icons/mail-ios.svg" label="Email" link="mailto:horleng123@gmail.com"/>
      <LinkButton icon="/icons/telegram.svg" label="Telegram" link="https://t.me/lengzunzhe"/>
      <LinkButton icon="/icons/fb.svg" label="Facebook" link="https://web.facebook.com/horlengg"/>
    </div>

  </section>

  

  <p class="footer_content vt323 animation_target_el">
    © 2025 Ly Horleng
  </p>

  
</template>

<style lang="scss">

.title_label_bold {
  font-size: 30px;
  color: var(--highlight-color);
}

.list_title_highlight {
  font-size: 18px;
  font-weight: 600;
}
</style>
