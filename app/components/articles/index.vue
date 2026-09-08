<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation} from "swiper/modules";
import Arrow from "~/assets/icons/arrow-articles-slider.svg";

import {useArticleStore} from "~/store/UseArticleStore";

const articleStore = useArticleStore();

await articleStore.getArticles();
</script>

<template>
    <section class="articles">
        <div class="container">
            <div class="articles__wrapper">
                <BaseSectionTitle style="text-align: center">Latest <span>Articles</span></BaseSectionTitle>
                <Swiper
                    class="articles__swiper"
                    :modules="[Navigation]"
                    :navigation="{
                        prevEl: '.articles__arrow--prev',
                        nextEl: '.articles__arrow--next',
                    }"
                    :allow-touch-move="true"
                    :simulate-touch="true"
                    :slides-per-view="1"
                    :speed="700"
                    :space-between="40"
                    :loop="true">
                    <SwiperSlide v-for="grid in 3">
                        <div class="articles__grid">
                            <ArticlesCard v-for="article in articleStore.articles" :key="article.id" :article="article" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div class="articles__arrows">
                    <button class="articles__arrow articles__arrow--prev" aria-label="Previous slide">
                        <Arrow class="arrow" />
                    </button>

                    <button class="articles__arrow articles__arrow--next" aria-label="Next slide">
                        <Arrow class="arrow" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.articles__wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
    min-width: 0;
    width: 100%;
}
.articles__swiper {
    flex-grow: 1;
    width: 100%;
    max-width: 100%;
}

.articles__arrows {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
    margin: 0 auto;
}

.articles__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #cecece;
    transition: color 0.2s ease;

    @include hover {
        color: #605e5e;
    }

    &--next {
        transform: scaleX(-1);
    }
}

.articles__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto auto;
    justify-content: space-between;
    row-gap: 70px;
    column-gap: 40px;
    width: 100%;
    padding: 40px;
}

@include tablet {
    .arrow {
        transform: scale(0.8);
    }
}

@include tablet-small {
    .articles__wrapper {
        gap: 30px;
    }

    .articles__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 30px 20px;
        padding: 20px 10px;
    }

    .articles__arrows {
        gap: 20px;
    }

    .arrow {
        transform: scale(0.7);
    }
}

@include mobile {
    .articles__grid {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px 0;

        & > :last-child {
            display: none;
        }
    }
}
</style>
