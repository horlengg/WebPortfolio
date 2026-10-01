<script setup lang="ts">
interface Project {
    title: string
    description: string[]
    image: string
    imageAlt: string
    disclaimer?: string
    tech?: string[]
    caseStudyUrl?: string
    apkUrl?: string
    repoUrl?: string
    demoUrl?: string
}

const projects: Project[] = [
    {
        title: 'Pay Sound',
        description: [
            'Paysound is a Swift-based iOS app that turns transaction notifications into real-time voice alerts, allowing users to hear payment details instantly without opening their banking app.',
        ],
        image: 'https://github.com/horlengg/storage_repo/blob/dev/project-demo/implement-transaction-voice-alert-ios.webp?raw=true',
        imageAlt: 'Pay Sound iOS app demo',
        tech: ['SwiftUI', 'PSOLA Algorithm'],
        caseStudyUrl: 'https://horleng.vercel.app/blogs/implement-transaction-voice-alert-ios',
        repoUrl: 'https://github.com/horlengg/ImplTransactionVoiceAlert',
    },
    {
        title: 'ABA Home Screen Clone',
        description: [
            'This project contains a UI clone of the ABA Bank mobile application, built for learning and practice purposes. The project focuses on recreating the visual design, layout, and swipe menu widget flow of the ABA app using cross platform technologies.',
        ],
        disclaimer:
            'This project is not affiliated with, endorsed by, or connected to ABA Bank. All trademarks, logos, and brand names belong to their respective owners.',
        image: 'https://raw.githubusercontent.com/horlengg/clone_aba_bank_flutter/dev/aba_clone_ui_demo.png',
        imageAlt: 'ABA Bank home screen clone demo',
        tech: ['Flutter'],
        apkUrl: 'https://tsfr.io/join/7fssxq',
        repoUrl: 'https://github.com/horlengg/clone_aba_bank_flutter',
    },
    {
        title: 'Barcode Scanner',
        description: [
            'This project is a feature-rich barcode scanner with animation capture capabilities. It can detect barcodes from images and live camera feed, automatically zooming in to enhance detection accuracy. The scanner supports multiple barcode formats and offers a variety of functionalities such as real-time preview, flash control, image upload for barcode scanning, tap-to-focus, vibration feedback on detection, and optimized widget performance for a smooth user experience. Compatible with both Android and iOS devices, it leverages Google ML Kit for reliable barcode recognition.',
        ],
        image: 'https://raw.githubusercontent.com/horlengg/barcode_scanner_animation/dev/barcode_scanner_demo.png',
        imageAlt: 'Barcode scanner app demo',
        tech: ['Flutter','Google ML Kit'],
        apkUrl: 'https://tsfr.io/join/24bzc9',
        repoUrl: 'https://github.com/horlengg/barcode_scanner_animation',
    },
    {
        title: 'Liveness Detection',
        description: [
            'This innovative Android application leverages advanced biometric security to ensure user authenticity through real-time liveness detection. Designed for enhanced security and anti-spoofing, the app verifies that the user is physically present during authentication by analyzing facial movements and gestures.',
        ],
        image: '/images/liveness_detection_demo.png',
        imageAlt: 'Liveness detection app demo',
        tech: ['Flutter','Google ML Kit','Face Anti Spoofing Model'],
        apkUrl: 'https://tsfr.io/join/f9u5hy?id=11326582',
        repoUrl: 'https://github.com/horlengg/liveness_detection',
    },
    {
        title: 'Movie Web Application',
        description: [
            'Piphubkun TV is a dedicated streaming platform for fans of Donghua, with a special focus on 3D Chinese animation. The website delivers an immersive experience by curating a wide range of series and movies, paired with rich content such as synopses, character profiles, and behind-the-scenes details.',
        ],
        image: '/images/pktv.png',
        imageAlt: 'Piphubkun TV website screenshot',
        tech: ['Vue 3', 'TypeScript', 'Nest.js', 'MongoDB', 'Cloudinary'],
        demoUrl: 'https://piphubkun-tv.vercel.app/',
    },
    {
        title: 'Telegram Web UI Clone (Incomplete)',
        description: [
            'A front-end-only clone of the Telegram Web interface, built to practice layout structuring, component styling, and UI replication.',
            'Currently optimized for desktop only. Mobile responsiveness and interactivity are planned for the next phase.',
        ],
        image: '/images/tme.png',
        imageAlt: 'Telegram Web clone screenshot',
        tech: ['Vue', 'TypeScript', 'SASS'],
        demoUrl: 'https://web-telegram-clone.vercel.app/',
    },
]

const primaryLink = (p: Project) =>
    p.demoUrl
        ? { href: p.demoUrl, label: 'Live Demo' }
        : { href: p.repoUrl!, label: 'View on GitHub' }
</script>

<template>
    <section id="project" class="mt_70">
        <p class="title_label_bold vt323 animation_target_el">Projects</p>

        <div class="project_list">
            <article
                v-for="project in projects"
                :key="project.title"
                class="project_layout_wrapper"
            >
                <h3
                    class="highlight_special_text list_title_highlight project_title animation_target_el"
                >
                    {{ project.title }}
                </h3>

                <div class="project_demo_info animation_target_el">
                    <p v-for="(text, i) in project.description" :key="i" class="project_text">
                        {{ text }}
                    </p>

                    <ul v-if="project.tech?.length" class="project_tech_list">
                        <li v-for="tech in project.tech" :key="tech">{{ tech }}</li>
                    </ul>

                    <p v-if="project.disclaimer" class="project_disclaimer">
                        {{ project.disclaimer }}
                    </p>

                    <div class="project_actions">
                        <a
                            :href="primaryLink(project).href"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn_primary"
                            >{{ primaryLink(project).label }}</a
                        >
                        <a
                            v-if="project.caseStudyUrl"
                            :href="project.caseStudyUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn"
                            >Blog</a
                        >
                        <a
                            v-if="project.apkUrl"
                            :href="project.apkUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn"
                            >Download APK</a
                        >
                    </div>
                </div>

                <a
                    class="project_img_demo_wr animation_target_el"
                    :href="primaryLink(project).href"
                    target="_blank"
                    rel="noopener noreferrer"
                    :aria-label="`Open ${project.title}`"
                >
                    <img
                        class="project_img_demo"
                        :src="project.image"
                        :alt="project.imageAlt"
                        loading="lazy"
                    />
                </a>
            </article>
        </div>
    </section>
</template>

<style scoped lang="scss">
.project_list {
    display: flex;
    flex-direction: column;
    gap: 72px;
}

.project_layout_wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'title'
        'image'
        'info';
    row-gap: 20px;

    .project_title {
        grid-area: title;
        margin: 0;
    }

    .project_demo_info {
        grid-area: info;
        max-width: 60ch;
    }

    .project_text {
        margin-top: 12px;
        line-height: 1.7;
    }

    /* Tech chips */
    .project_tech_list {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 16px 0 0;
        padding: 0;
        list-style: none;

        li {
            padding: 3px 12px;
            font-size: 0.8em;
            border-radius: 999px;
            border: 1px solid color-mix(in srgb, var(--highlight-color) 45%, transparent);
            color: var(--highlight-color);
        }
    }

    /* Disclaimer: small note instead of a red paragraph */
    .project_disclaimer {
        margin-top: 16px;
        padding-left: 14px;
        border-left: 3px solid #be6c65;
        font-size: 0.85em;
        line-height: 1.6;
        color: #be6c65;
    }

    /* Buttons */
    .project_actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 24px;
    }

    .btn {
        display: inline-flex;
        align-items: center;
        padding: 5px 15px;
        font-weight: 600;
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid var(--highlight-color);
        color: var(--highlight-color);
        transition: background-color 0.15s, color 0.15s;
        font-size: 14px;

        &:hover,
        &:focus-visible {
            background: var(--highlight-color);
            color: #fff;
        }
    }

    .btn_primary {
        background: var(--highlight-color);
        color: #fff;

        &:hover,
        &:focus-visible {
            opacity: 0.88;
        }
    }

    /* Framed image: same box for every project */
    .project_img_demo_wr {
        grid-area: image;
        display: block;
        width: 100%;
        padding: 16px;
        overflow: hidden;
        border-radius: 16px;
        border: 1px solid color-mix(in srgb, var(--highlight-color) 25%, transparent);
        background: color-mix(in srgb, var(--highlight-color) 6%, transparent);
        box-shadow: 0 8px 24px rgb(0 0 0 / 8%);

        &:hover .project_img_demo {
            transform: scale(1.03);
        }
    }

    .project_img_demo {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 10;
        object-fit: contain;
        border-radius: 8px;
        transition: transform 0.3s ease;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .project_layout_wrapper {
        grid-template-columns: 1.1fr 1fr;
        grid-template-rows: 1fr auto auto 1fr; /* outer rows center the text block */
        grid-template-areas:
            '.     image'
            'title image'
            'info  image'
            '.     image';
        column-gap: 56px;
        row-gap: 0;

        .project_img_demo_wr {
            align-self: center;
        }
    }
}
</style>