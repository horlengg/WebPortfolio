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
                I am a <span>Senior iOS Developer</span> with extensive experience designing, developing, and maintaining high-quality mobile applications. My primary expertise is in <span>Swift</span> and the <span>Apple ecosystem</span>, where I build scalable, performant, and intuitive native iOS applications using modern architectures, best practices, and Apple's latest frameworks.
                In addition to native iOS development, I have strong experience with <span>Flutter</span>, enabling me to deliver cross-platform applications for both iOS and Android when business requirements call for a shared codebase. This versatility allows me to evaluate and implement the most effective technology stack for each project.
                Throughout my career, I have successfully integrated <span>RESTful APIs and third-party services</span>, implemented secure authentication, managed local and cloud-based data, optimized application performance, and delivered seamless user experiences. I am experienced with architectural patterns such as <span>MVVM and Clean Architecture</span>, writing maintainable, testable code, and collaborating closely with cross-functional teams in Agile environments.
                As a senior engineer, I focus not only on delivering features but also on improving code quality, mentoring teammates, driving technical decisions, and promoting engineering best practices. I am passionate about building reliable, user-centric mobile applications that align with both business objectives and long-term product scalability while continuously learning and adopting new technologies within the Apple ecosystem.
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