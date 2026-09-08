<script setup lang="ts">
import type {ArticleResponse} from "~/types/article";

const props = defineProps<{
    article: ArticleResponse;
}>();
</script>

<template>
    <article class="article-card">
        <NuxtLink class="article-card__wrapper" :to="`/blog/${article.id}`">
            <NuxtImg class="article-card__img" :src="article.img" alt="Article cover" format="webp" />
            <div class="article-card__content">
                <h3 class="article-card__title">{{ article.title }}</h3>

                <div class="article-card__meta">
                    <ArticlesAuthor :author="{author_name: article.author_name, author_img: article.author_img}" />
                    <time class="article-card__date">{{ useFormattedDate(article.date) }}</time>
                </div>
            </div>
        </NuxtLink>
    </article>
</template>

<style scoped lang="scss">
.article-card {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 10px;
        background-color: rgba(50, 49, 66, 0.2);
        filter: blur(20px);
        transition: background-color 0.5s ease;
    }

    @include hover {
        &::before {
            background-color: rgba(50, 49, 66, 0.4);
        }
    }
}

.article-card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
    height: 100%;
    max-width: 350px;
    padding: 25px 20px;
    border-radius: 16px;
    background: #fff;
    cursor: pointer;
}

.article-card__img {
    border-radius: 12px;
}

.article-card__meta {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
}

.article-card__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
}

.article-card__title {
    color: #252525;
    font-size: 18px;
    font-weight: 600;
    line-height: 25px;
}

.article-card__date {
    color: #b7b4b4;
    font-size: 16px;
    font-weight: 500;
}

@include tablet {
    .article-card__wrapper {
        gap: 15px;
        padding: 18px 15px;
    }

    .article-card__content {
        gap: 15px;
    }

    .article-card__meta {
        gap: 8px;
    }

    .article-card__title {
        font-size: 12px;
        line-height: 18px;
    }

    .article-card__date {
        font-size: 8px;
    }
}

@include mobile {
    .article-card__wrapper {
        min-width: 240px;
        padding: 16px 12px;
    }

    .article-card__title {
        font-size: 14px;
    }

    .author__name {
        font-size: 11px;
    }

    .article-card__date {
        font-size: 10px;
    }
}
</style>
