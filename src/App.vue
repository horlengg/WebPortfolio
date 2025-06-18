<script setup lang="ts">

// import AppHeader from "./app/app_header.vue";
import LinkButton from "./app/components/link_btn.vue"

</script>

<template>
  <div class="app_layout_fixed zilla-slab-regular">

    <!-- <AppHeader /> -->


    <!-- Home Session -->

    <section id="Home"  class="mt_70">
      <p class="title_label_bold vt323"> Hi, I'm Ly Horleng </p>
      <p class="title_label_bold vt323"> Mobile & Web Developer </p>
      <p class="mt_10">
        Crafting modern, responsive, and performant apps for mobile and web platforms.
      </p>
      <p class="mt_10">
        I'm Ly Horleng, a passionate Mobile and Web Developer with a strong focus on creating fast, scalable, and user-friendly digital experiences. I specialize in building full-stack applications using technologies like Flutter, Vue , React and Node.js.
        <br>
        With a detail-oriented mindset and a love for clean code, I enjoy solving real-world problems through design-driven development and always strive to stay updated with the latest tech trends.
      </p>
    </section>
    
    <!-- Skill Session -->

    <section id="Skills" class="mt_70">

      <p class="title_label_bold vt323">🛠️ Skills & Tech Stack </p>
      <!-- Frontend Dev -->
      <p class="list_title_highlight mt_20"> Frontend Development </p>
      <p>
        Typescript • Javascript • Vue • React • CSS • HTML • Tailwind CSS • SASS • Electron
      </p>

      <!-- Mobile Dev-->
      <p class="list_title_highlight mt_10"> Mobile Development </p>
      <p> Flutter </p>

      <!-- Backend & Database -->
      <p class="list_title_highlight mt_10">
        Backend & Database
      </p>
      <p>
        Node.js • Express.js • Nest.js • MongoDB • PostgresSql • Java • Spring Boot • Python • Flask & Django(basic)
      </p>

      <!-- Dev Tools & Others -->
      <p class="list_title_highlight mt_10">
        Dev Tools & Others
      </p>
      <p>
        Git • GitHub • VSCode • Postman • Figma • Docker(basic)
      </p>

    </section>


    <!-- Projects -->
    <section id="Project" class="mt_70">
      <p class="title_label_bold vt323">🚀 Projects</p>
      <!-- Frontend Dev -->
      <p class="list_title_highlight mt_20"> 🎬 Movie Web Application </p>
      <p class="mt_10">
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

      <hr class="mt_20 border_only" >

      <!-- Mobile Dev-->
      <p class="list_title_highlight mt_30"> 💬 Telegram Web UI Clone (In Progress) </p>
      <p class="mt_10">
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

    </section>

    <!-- Experience Session -->

    <section id="Experience" class="mt_70">
      
      <p class="title_label_bold vt323"> 🧑‍💻 Experience </p>
      <!-- As a web developer -->
      <p class="list_title_highlight mt_10">Web Developer – APD Bank</p>
      <i>June 2023 – April 2025</i>
      <ol class="experience_list mt_10">
        <li>Built responsive and component-based web interfaces using Vue 3 + TypeScript</li>
        <li>Implemented API integrations and dynamic data rendering using Axios and Vue's reactivity system</li>
        <li>Created reusable UI components and handled routing with Vue Router</li>
        <li>Worked with Pinia for state management and Tailwind CSS for consistent styling</li>
        <li>Collaborated with backend developers to connect RESTful APIs and improve performance</li>
        <li>Ensured mobile-first design and cross-browser compatibility</li>
      </ol>
      
      <!-- As a mobile app developer -->
      <p class="list_title_highlight mt_40">Mobile Developer – APD Bank</p>
      <i>April 2025 – Currently</i>
      <ol class="experience_list mt_10">
        <li>Developed and maintained cross-platform mobile apps using Flutter</li>
        <li>Integrated real-time backend services with Firebase (Auth, Firestore, Cloud Functions)</li>
        <li>Collaborated with UI/UX designers to implement pixel-perfect, responsive interfaces</li>
        <li>Wrote clean, modular Dart code following best practices and state management patterns (e.g., Provider)</li>
        <li>Participated in Agile sprints, daily standups, and peer code reviews</li>
        <li>Ensured mobile-first design and cross-browser compatibility</li>
        <li>Develop new feature and maintenance APD Mobile App</li>
      </ol>
      

    </section>

    <!-- Education Session -->

    <section id="Education" class="mt_70">
      
      <p class="title_label_bold vt323"> 🎓 Education & Trainning </p>
      <!-- As a web developer -->
      <p class="list_title_highlight mt_10">Royal University of Phnom Penh</p>
      <p>
        <i>Bachelor of Science in Computer Science</i>
      </p>
      <p>
        <i>March 2022 – May 2025</i>
      </p>
      <ol class="experience_list mt_10">
        <li>Focused on software development, data structures, and web technologies</li>
        <li>Web Development (HTML, CSS, JavaScript, React.js PHP ...)</li>
        <li>Database Systems (MySQL, Sql Server...)</li>
        <li>Software Engineering & Project Management</li>
        <li>Participated in coding challenges and collaborative assignments to strengthen problem-solving and teamwork skills</li>
      </ol>
      
      <!-- APD Bank Trainning -->
      <p class="list_title_highlight mt_40">Cybersecurity Awareness Training – APD Bank</p>
      <ol class="experience_list mt_10">
        <li>Participated in a professional training program focused on IT security practices in the banking and finance sector</li>
        <li>Gained practical knowledge of risk management, network security basics, and compliance standards relevant to financial institutions</li>
        <li>Developed a stronger understanding of how to protect both internal systems and customer data from digital threats</li>
      </ol>
      
      

    </section>

    <!-- Contact Session -->

    <section id="Contact" class="mt_70">
      
      <p class="title_label_bold vt323">
        📬 Contact Me
      </p>
      <p>
        Let's work together or talk tech!
      </p>
      <p>
        Whether you have a project in mind, want to collaborate on something creative, or just have a question about mobile and web development — I'd love to hear from you.
        Feel free to reach out via email or connect with me on LinkedIn. I'm open to freelance opportunities, full-time roles, or even just a friendly chat about tech trends and tools.
  
        Your message is always welcome — let's build something great together!
      </p>
  
      <div class="contact_list mt_40">
        <LinkButton icon="/icons/linkin.svg" label="LinkedIn" link="www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ly-horleng-47b05932b"/>
        <LinkButton icon="/icons/mail-ios.svg" label="Email" link="mailto:horleng123@gmail.com"/>
        <LinkButton icon="/icons/telegram.svg" label="Telegram" link="https://t.me/lengzhunzhe"/>
        <LinkButton icon="/icons/fb.svg" label="Facebook" link="https://web.facebook.com/horlengg"/>
      </div>

    </section>

    

    <p class="footer_content vt323">
      © 2025 Ly Horleng
    </p>


  </div>

  
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
