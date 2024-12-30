<script setup lang="ts">
import { onMounted } from 'vue';
import { useTextAnimation } from '../utils/usetextanimation';
import SkillCard from '../app/components/skill-card.vue';
import Html from "../app/assets/images/html.svg"
import Css from "../app/assets/images/css.svg"
import React from "../app/assets/images/react-2.svg"
import Ts from "../app/assets/images/typescript.svg"
import Vue9 from "../app/assets/images/vue-9.svg"
import Js from "../app/assets/images/javascript-1.svg"
import Flutter from "../app/assets/images/flutter.svg"
import NodeJs from "../app/assets/images/nodejs-1.svg"
import Spring from "../app/assets/images/spring-3.svg"
import Java from "../app/assets/images/java-4.svg"
import Cpp from "../app/assets/images/c.svg"
import Python from "../app/assets/images/python-5.svg"

const text = useTextAnimation()

const skillList = [
  {
    title: "HTML5",
    image: Html,
    color : "#E34F26",
    description: `
            With strong HTML skills, I have the ability to build well-structured, clean,
            and responsive web pages.
            I am proficient in semantic HTML5, ensuring that my code is accessible and optimized for SEO.
            I can efficiently use tags to structure content, create forms, embed media, and ensure cross-browser
            compatibility.
            My understanding of HTML also extends to collaborating effectively with CSS and JavaScript for dynamic,
            interactive websites.
    `
  },
  {
    title: "CSS",
    image: Css,
    description: `
            I have a solid grasp of CSS, enabling me to create visually appealing and responsive web designs.
            I excel at using modern CSS techniques like Flexbox, Grid, and responsive media queries to build layouts
            that adapt to various screen sizes.
            My experience with CSS also includes animations, transitions, and styling forms or buttons to enhance user
            experience. Additionally,
            I am familiar with preprocessors like SASS and best practices for organizing stylesheets for maintainability
            and scalability in larger projects.
    `
  },
  {
    title: "JAVASCRIPT",
    image: Js,
    description: `
            I have a strong command of JavaScript, allowing me to build dynamic, interactive web applications.
            I am skilled in manipulating the DOM, handling events, and creating responsive user interfaces.
            My expertise includes using modern ES6+ features like arrow functions, destructuring, and promises to write
            clean, efficient code.
            I have experience with asynchronous programming (using async/await), API integration, and working with
            libraries such as jQuery or frameworks like React.
            Additionally, I am well-versed in debugging, optimizing performance, and following best practices to ensure
            maintainable, scalable code.
    `
  },
  {
    title: "TYPESCRIPT",
    image: Ts,
    description: `
            I am proficient in TypeScript, which allows me to write strongly-typed, scalable, and maintainable code for
            complex applications.
            My skills include leveraging TypeScript’s static typing to reduce runtime errors, improving code reliability
            and readability.
            I am experienced in working with interfaces, enums, generics, and advanced types, ensuring that my code is
            both flexible and robust.
            Additionally, I have integrated TypeScript with modern frameworks like React and Node.js, utilizing type
            safety to streamline development and enhance collaboration within teams.
    `
  },
  {
    title: "VUE.JS",
    image: Vue9,
    description: `
            I have strong expertise in Vue.js, a versatile framework that allows me to build efficient, reactive, and
            component-based user interfaces.
            I am proficient in working with Vue's core features, including directives, the reactive data model,
            and computed properties. My experience includes building reusable components, managing state with Vuex, and
            routing with Vue Router for seamless navigation.
            I am also familiar with Vue's single-file components (SFCs), making it easy to integrate HTML, CSS, and
            JavaScript within the same file.
            Additionally, I follow best practices to ensure modularity, maintainability, and performance optimization in
            Vue.js applications.
    `
  },
  {
    title: "REACT.JS",
    image: React,
    description: `
            I am highly skilled in React.js, enabling me to build dynamic, efficient, and scalable web applications.
            My expertise includes using React's component-based architecture, managing state with hooks like useState
            and useEffect,
            and optimizing performance through techniques like memoization and lazy loading.
            I am experienced in working with React Router for seamless navigation and integrating state management
            solutions like Redux or Context API for handling complex application states.
            Additionally, I follow best practices in JSX, props, and lifecycle management, ensuring my React
            applications are modular, maintainable, and responsive.
    `
  },
  {
    title: "FLUTTER",
    image: Flutter,
    description: `
            I am proficient in Flutter, a powerful framework for building natively compiled,
            cross-platform applications for mobile, web, and desktop from a single codebase.
            My skills include working with Flutter’s widget-based architecture to create dynamic,
            responsive, and highly performant UIs.
            I am experienced in managing state with solutions like Provider, Riverpod, or Bloc,
            and integrating APIs for real-time data handling.
            I am also familiar with customizing widgets, handling navigation using Flutter’s Navigator,
            and implementing animations to enhance user experiences.
            Additionally, I follow best practices for code organization, reusability, and performance optimization in
            Flutter development.
    `
  },
  {
    title: "NODE-EXPRESS.JS",
    image: NodeJs,
    description: `
            I have strong expertise in Node.js and Express.js, enabling me to build fast, scalable server-side
            applications.
            With Node.js, I leverage its non-blocking, event-driven architecture to handle multiple requests
            efficiently.
            My experience with Express.js includes creating RESTful APIs, managing middleware, and setting up routing to
            build robust web applications.
            I am skilled in integrating databases like MongoDB or SQL databases, handling authentication, and
            implementing error handling and logging.
            Additionally, I follow best practices for writing clean, modular code, optimizing performance, and ensuring
            security in my Node.js applications.
    `
  },
  {
    title: "SPRING",
    image: Spring,
    description: `
            I have a solid understanding of Spring Boot, which allows me to develop production-ready Java applications
            with ease.
            I am proficient in creating RESTful APIs, configuring microservices, and managing application dependencies
            using Spring Boot's convention-over-configuration approach.
            My skills include integrating with databases using Spring Data JPA, implementing security with Spring
            Security, and handling configuration and deployment through Spring Boot's built-in features.
            I am familiar with creating and consuming APIs,
            managing application properties, and optimizing performance. Additionally, I follow best practices for
            building scalable, maintainable applications and utilize tools like Docker for containerization and cloud
            platforms for deployment.
    `
  },
  {
    title: "JAVA",
    image: Java,
    description: `
            I have strong expertise in Java, allowing me to build robust, scalable, and platform-independent
            applications.
            I am proficient in object-oriented programming (OOP) concepts such as inheritance, polymorphism, and
            encapsulation,
            which I apply to create modular and maintainable code. My experience includes working with Java's core
            libraries,
            multithreading, exception handling, and file I/O operations.
            I am also skilled in using frameworks like Spring and Hibernate for building enterprise-level applications,
            as well as working with Java's collection framework and design patterns to optimize performance and code
            structure.
            Additionally, I follow best practices to ensure clean, efficient, and scalable Java applications.
    `
  },
  {
    title: "C++",
    image: Cpp,
    description: `
            I have a strong foundation in C++, enabling me to develop high-performance, efficient, and reliable
            applications.
            I am proficient in object-oriented programming (OOP) principles, including working with classes,
            inheritance, polymorphism, and encapsulation.
            My expertise also extends to advanced concepts like templates, operator overloading, and memory management
            using pointers, dynamic allocation, and RAII (Resource Acquisition Is Initialization).
            I am familiar with the Standard Template Library (STL) for efficient data structures and algorithms, and I
            follow best practices to write clean, optimized, and maintainable C++ code for both system-level and
            application development.
    `
  },
  {
    title: "PYTHON",
    image: Python,
    description: `
            I am proficient in Python, a versatile language that allows me to build everything from simple scripts to
            complex applications.
            My expertise includes writing clean, readable, and efficient code using Python’s core libraries and
            third-party modules.
            I have experience with object-oriented programming (OOP), working with data structures like lists,
            dictionaries, and sets, and leveraging libraries such as NumPy and Pandas for data manipulation.
            I am skilled in using Python for web development (Django, Flask), automation, scripting, and API
            integration.
            Additionally, I follow best practices for writing maintainable, scalable Python applications, including
            testing, debugging, and performance optimization.
    `
  },
]

onMounted(() => {
  text.init()
})

</script>

<template>
  
  <div>
    <section id="skill">
      <div class="left">
        <h2 class="text-typing" data-typing-duration="500">Welcome to</h2>
        <h3 class="text-typing mt-1" data-typing-duration="500" data-typing-delay="500">My Skills Showcase!</h3>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1000">
          As a dedicated frontend developer,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="1500">
          I specialize in transforming ideas into engaging,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2000">
          interactive, and efficient web applications.
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="2500">
          With expertise in HTML, CSS, JavaScript,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3000">
          and modern frameworks like React and Vue,
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="3500">
          I create clean, maintainable code that brings 
        </p>
        <p class="text-typing text-sm mt-1 txt-style" data-typing-duration="500" data-typing-delay="4000">
          innovative designs to life. 
        </p>
        <div class="mt-5 skill-demo-btn" data-aos="fade-down" data-aos-duration="1500">
          <a href="#skillDemo">
            <button class="simple-button learn-more">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div class="right" data-aos="fade-up" data-aos-duration="1500">
        <img src="../app/assets/images/programmer.svg" alt="">
      </div>
  
    </section>
    <section id="skillDemo">
      <h2 class="title" data-aos="zoom-in" data-aos-duration="500">Skills</h2>
      <div class="skill-demo-list mt-10">
        <SkillCard v-for="skill of skillList" :key="skill.title" :skill="skill"/>
      </div>
    </section>
  </div>
  
</template>

<style scoped lang="scss"></style>
