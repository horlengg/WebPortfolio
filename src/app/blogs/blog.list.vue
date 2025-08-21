<script setup lang="ts">

import { onMounted, ref } from 'vue';
import BlogHelper from '../helper/useBlogsHelper';
import { ArticleType } from './blog.type';
import BlogService from './blog.service';



const blogList = ref<Array<ArticleType>>([])
const fetchArticleLoading = ref(false)

async function fetchArticles(){
    fetchArticleLoading.value = true;
    blogList.value = await BlogService.getArticles();
    fetchArticleLoading.value = false;
}

onMounted(fetchArticles);
    
</script>

<template>
    <div class="blog_list">
        <RouterLink 
            v-for="blog of blogList"
            :to="'/blogs/' + BlogHelper.convertTitleToURLParams(blog.title)" 
            :key="BlogHelper.convertTitleToURLParams(blog.title)"
            class="blog_item_wrapper"
        >
            <div class="blog_item font-default">
                <div class="blog_item_thumnail" :style="{backgroundImage : `url('${blog.thumnail}')`}"></div>
                <p class="title" > {{ blog.title }} </p>
                <div class="blog_info">
                    <div class="pf_cv">
                        <img src="../assets//images/leng_circle.png" alt="" width="25">
                        <p>Ly Horleng</p>
                    </div>
                    <p class="font-default write_dt">{{ blog.createdAt }}</p>
                </div>
            </div>
        </RouterLink>
        <template v-if="fetchArticleLoading">
            <div class="blog_item_loading"></div>
            <div class="blog_item_loading"></div>
            <div class="blog_item_loading"></div>
            <div class="blog_item_loading"></div>
            <div class="blog_item_loading"></div>
            <div class="blog_item_loading"></div>
        </template>
       
    </div>

</template>


<style lang="scss" scoped>

.blog_list {
    display: grid;
    grid-template-columns: 1fr;
    row-gap : 60px;
    column-gap: 40px;
    margin-top: 40px;
    margin-bottom: 100px;
    font-size: 22px;
    .blog_item_wrapper {
        text-decoration: none;
        color: inherit;
        .blog_item {
            padding-bottom: 20px;
            overflow: hidden;
            p.title {
                padding: 20px 0;
                font-size: 20px;
                font-weight: 600;
            }
            cursor: pointer;
            .blog_info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .write_dt {
                    font-size: 12px;
                    opacity: .8;
                }
                .pf_cv {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                }
            }
            .blog_item_thumnail {
                height: 280px;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
    }
    .blog_item_loading {
        background: var(--skelaton-loading-color);
        background-size: 400%;
        animation: shimmer 1.5s infinite linear;
        height: 280px;
    }
}


/* Tablet and up */
@media (min-width: 768px) {
    .blog_list {
        grid-template-columns: 1fr 1fr;
        .blog_item_wrapper .blog_item .blog_item_thumnail {
            height: 240px;
        }
        .blog_item_loading {
            height: 240px;
        }
    }
}


@media (min-width: 1024px) {
    .blog_list {
        grid-template-columns: 1fr 1fr 1fr;
        .blog_item_wrapper .blog_item .blog_item_thumnail {
            height: 200px;
        }
        .blog_item_loading {
            height: 200px;
        }
    }
}

@keyframes shimmer {
	0% {
		background-position: 100% 100%;
	}
	100% {
		background-position: 0 0;
	}
}

</style>