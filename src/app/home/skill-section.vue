<script setup lang="ts">
import BorderLeftLayout from '../components/border-left-layout.vue';
</script>

<template>
    <section id="skills" class="mt_70">

        <p class="title_label_bold vt323 animation_target_el">Skills & Tech Stack </p>
        <!-- Frontend Dev -->
        <div class="animation_target_el">
            <p class="list_title_highlight mt_40 skill_category_type"> Frontend Development </p>
            <BorderLeftLayout class="mt_10">
                I specialize in building responsive, scalable, 
                and user-friendly interfaces using modern frontend technologies. 
                My expertise spans <span>TypeScript</span> and <span>JavaScript</span> 
                for robust application logic, alongside frameworks like <span>Vue</span> 
                and <span>React</span> for creating dynamic and component-driven UIs. 
                I have span experience with <span>HTML</span>, <span>CSS</span>, 
                and styling tools such as <span>Tailwind CSS</span> and <span>SASS</span> 
                to craft visually appealing and maintainable layouts. Additionally, 
                I leverage <span>Electron</span> for developing cross-platform desktop applications, 
                combining web technologies with native-like performance.
            </BorderLeftLayout>
        </div>
        <!-- Mobile Dev-->
        <div class="animation_target_el">
            <p class="list_title_highlight mt_40 skill_category_type"> Mobile Development </p>
            <BorderLeftLayout class="mt_10">
                I am a proficient mobile developer with expertise in building high-quality, 
                cross-platform and native applications using <span>Flutter</span> and <span>Swift</span>. 
                With <span>Flutter</span>, I specialize in creating visually appealing, responsive, 
                and performant cross-platform apps for both Android and iOS, 
                leveraging its widget-based architecture and state management solutions. 
                In addition, I have strong experience in <span>Swift</span>, enabling me to develop robust, 
                native iOS applications with seamless user interfaces and smooth performance. 
                I am skilled in integrating APIs, managing local and cloud-based data, 
                and implementing modern design patterns to deliver scalable, maintainable, 
                and user-friendly mobile solutions. My focus on clean code, best practices, 
                and continual learning allows me to build apps that meet both user needs and business goals.
            </BorderLeftLayout>
        </div>

        <div class="animation_target_el">
            <p class="list_title_highlight mt_40 skill_category_type"> Backend & Database </p>
            <BorderLeftLayout class="mt_10">
                I am a skilled backend developer with extensive experience in designing and building scalable, 
                high-performance server-side applications using <span>Node.js</span>, <span>Express.js</span>, and <span>Nest.js</span>. 
                I am proficient in <span>Java</span> and <span>Spring Boot</span>, as well as <span>Python</span> and <span>Flask</span>, 
                enabling me to create robust APIs and microservices across multiple technology stacks. 
                On the database side, I have hands-on experience with both NoSQL and SQL databases, 
                including <span>MongoDB</span> and <span>PostgreSQL</span>, allowing me to efficiently model, 
                manage, and query data for complex applications. 
                I am adept at integrating backend services with frontend platforms, 
                optimizing performance, and ensuring secure, maintainable, 
                and scalable systems that align with business objectives.
            </BorderLeftLayout>
        </div>

        <div class="animation_target_el">
            <p class="list_title_highlight mt_40 skill_category_type"> Dev Tools & Others </p>
            <BorderLeftLayout class="mt_10">
                I am proficient with a wide range of development tools that enhance productivity 
                and streamline the software development lifecycle. 
                I have hands-on experience with <span>Git</span> and <span>GitHub</span> for version control and collaborative workflows, 
                and I am comfortable using <span>VSCode</span> as my primary development environment. 
                I leverage <span>Postman</span> for API testing and debugging, 
                and <span>Figma</span> for designing and prototyping intuitive user interfaces. 
                Additionally, I have a foundational understanding of <span>Docker</span>, 
                enabling me to containerize applications and simplify deployment processes. 
                These tools, combined with my technical skills, allow me to efficiently build, 
                test, and deliver high-quality software solutions.
            </BorderLeftLayout>
        </div>

    </section>
</template>

<style lang="scss" scoped>
.skill_category_type {
    color: rgb(253 224 71);
}
.border_left__lengdev {
    span {
        color: #9875d1;
    }
}
</style>