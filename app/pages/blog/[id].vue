<script setup lang="ts">
import MarkdownIt from "markdown-it";
import ArrowRight from "~/assets/icons/arrowRight.svg";
import {useRoute} from "vue-router";
import {useArticleStore} from "~/store/UseArticleStore";

const route = useRoute();
const articleStore = useArticleStore();
const md = new MarkdownIt();

const backgroundImage = computed(() => {
    const imgSrc = articleStore.article?.img;
    return `url(${imgSrc})`;
});

await useAsyncData(
    () => `article-data-${route.params.id}`,
    async () => {
        const id = route.params.id;

        if (!id) return false;

        await Promise.all([articleStore.getArticles(), articleStore.getArticle(String(id))]);

        return true;
    },
    {
        watch: [() => route.params.id],
    },
);

const renderedArticle = computed(() => {
    return articleStore.article?.content ? md.render(articleStore.article.content) : "";
});
</script>

<template>
    <section class="post">
        <div class="container">
            <div class="post__wrapper">
                <BaseSectionTitle>{{ articleStore.article.title }}</BaseSectionTitle>

                <ArticlesAuthor :author="articleStore.author" class="post__author" />

                <NuxtImg class="post__img" :alt="articleStore.article.title" :src="articleStore.article.img" />

                <div class="post__content">
                    <div class="post__text" v-html="renderedArticle"></div>

                    <aside class="aside">
                        <h2 class="aside__title">Top Articles</h2>

                        <div class="aside__list">
                            <ArticlesCard v-for="article in articleStore.topThreeArticles" :key="article.id" :article="article" />
                        </div>
                    </aside>
                </div>

                <NuxtLink v-if="articleStore.article.next_article" :to="`/blog/${articleStore.article.next_article}`" style="max-width: fit-content">
                    <BaseDefaultBtn class="post__btn">Next article<ArrowRight class="arrow-right" /></BaseDefaultBtn>
                </NuxtLink>
                <p class="post__last" v-else="">This is the last article.</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.post__text {
    padding-right: 40px;
    :deep(h2) {
        margin-bottom: 35px;
        color: #252525;
        font-size: 33px;
        font-weight: 600;
        line-height: 44px;
        text-transform: capitalize;
    }

    :deep(p) {
        margin-bottom: 50px;
        color: #252525;
        font-size: 22px;
        line-height: 44px;
    }

    :deep(ul) {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 50px;

        &::after {
            display: none;
            content: "";
            margin: 50px auto;
            width: 100%;
            max-width: 320px;
            height: 320px;
            background-color: #252525;
            background: v-bind(backgroundImage) no-repeat center / cover;
        }
    }

    :deep(li) {
        position: relative;

        padding-left: 20px;
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: #252525;
        }
    }
}

.post__wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.post__img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

.post__content {
    display: flex;
    gap: 30px;
}

.aside {
    display: flex;
    flex-direction: column;
    gap: 35px;
    flex-shrink: 0;
    padding-left: 35px;
    border-left: 1px solid #9b9b9b;
}

.aside__title {
    color: #252525;
    font-size: 30px;
    font-weight: 600;
    line-height: 44px;
}

.aside__list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 20px;
}

.post__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-transform: capitalize;
}

.post__last {
    width: fit-content;
    padding: 15px 25px;
    color: #f7f8fa;
    background-color: #6c5fbc;
    border: 1.5px solid #6c5fbc;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
}

@include tablet {
    .post__text {
        padding-right: 0px;
        :deep(h2) {
            margin-bottom: 25px;
            font-size: 22px;
            line-height: 32px;
        }

        :deep(p) {
            margin-bottom: 30px;
            font-size: 15px;
            line-height: 32px;
        }
    }

    .post__wrapper {
        gap: 25px;
    }

    .post__img {
        max-height: 280px;
    }

    .aside {
        gap: 25px;
        padding-left: 25px;
    }

    .aside__title {
        font-size: 22px;
        line-height: 32px;
    }

    .post__btn {
        svg {
            transform: scale(0.8);
        }
    }

    .post__last {
        padding: 12px 20px;
        font-size: 12px;
    }
}

@include tablet-small {
    .aside {
        display: none;
    }
}

@include mobile {
    .post__author {
        padding-bottom: 15px;
        border-bottom: 1px solid #a6a6a6;
    }

    .post__img {
        display: none;
    }

    .post__text {
        :deep(ul) {
            margin-bottom: 0px;

            &::after {
                display: block;
            }
        }

        :deep(h2) {
            margin-bottom: 18px;
            font-size: 18px;
            line-height: 24px;
        }

        :deep(p) {
            margin-bottom: 25px;
            font-size: 12px;
            line-height: 24px;
        }

        :deep(li) {
            font-size: 12px;
        }
    }
}
</style>
