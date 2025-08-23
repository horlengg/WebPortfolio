<script setup lang="ts">
import LinkButton from "../components/link_btn.vue"
</script>

<template>
    <section id="Contact" class="mt_70">
        <div class="animation_target_el">
            <p class="title_label_bold vt323">Contact Me</p>
            <p style="font-style: italic;">Let's work together or talk tech!</p>
            <p style="font-style: italic;">
                Whether you have a project in mind, want to collaborate on something creative, or just have a question about mobile and web development — I'd love to hear from you.
                Feel free to reach out via email or connect with me on LinkedIn. I'm open to freelance opportunities, full-time roles, or even just a friendly chat about tech trends and tools.
        
                Your message is always welcome — let's build something great together!
            </p>
        </div>

        <div class="contact_list mt_70 animation_target_el" id="contact_me">
            <LinkButton icon="/icons/call_icon.svg" label="linkedIn" link="tel:+855964083197"/>
            <LinkButton icon="/icons/linkin.svg" label="linkedIn" link="https://www.linkedin.com/in/horleng/"/>
            <LinkButton icon="/icons/mail-ios.svg" label="email" link="mailto:horleng123@gmail.com"/>
            <LinkButton icon="/icons/telegram.svg" label="telegram" link="https://t.me/lengzunzhe"/>
            <LinkButton icon="/icons/fb.svg" label="facebook" link="https://web.facebook.com/horlengg"/>
        </div>

    </section>
</template>