<script setup lang="ts">

import { onMounted, ref } from 'vue';
import BlogHelper from '../helper/useBlogsHelper';
import { ArticleType } from './blog.type';
import BlogService from './blog.service';



const blogList = ref<Array<ArticleType>>([])

async function fetchArticles(){
    blogList.value = await BlogService.getArticles();
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
                        <img src="../assets//images/dev.png" alt="" width="25">
                        <p>
                            Ly Horleng
                        </p>
                    </div>
                    <p class="font-default write_dt">{{ blog.createdAt }}</p>
                </div>
            </div>
        </RouterLink>
       
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
}


/* Tablet and up */
@media (min-width: 768px) {
    .blog_list {
        grid-template-columns: 1fr 1fr;
        .blog_item_wrapper .blog_item .blog_item_thumnail {
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
    }
}

</style>