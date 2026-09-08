<script setup lang="ts">
import type {CatalogSlide} from "~/types/catalog-slide";

const props = defineProps<{
    slide: CatalogSlide;
}>();
</script>

<template>
    <div class="slide">
        <h1 class="slide__title">{{ slide.title }}</h1>
        <p class="slide__text">{{ slide.text }}</p>

        <NuxtImg class="slide__img" :src="props.slide.img" :alt="props.slide.altText" width="250" height="250" />
    </div>
</template>

<style scoped lang="scss">
.slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-height: 250px;
    padding: 30px 60px;
    border-radius: 10px;
    background: #6c5fbc;
    background-image: url("/images/catalog/catalog-bg.webp");
    background-size: cover;
    background-position: center;
    box-shadow: 0 5px 32px 0 rgba(0, 0, 0, 0.1);
}

.slide__title {
    color: #f7f8fa;
    font-size: 75px;
    font-weight: 800;
    line-height: 1;
}

.slide__text {
    color: #7c6fcd;
    font-size: 85px;
    font-weight: 800;
    line-height: 1;
}

.slide__img {
    position: absolute;
    right: 5%;
    bottom: -20%;
    max-width: 250px;
}

@include tablet {
    .slide {
        padding: 20px 40px;
    }

    .slide__title {
        font-size: 50px;
    }

    .slide__text {
        font-size: 60px;
    }

    .slide__img {
        max-width: 160px;
    }
}

@include mobile {
    .slide {
        padding: 12px 24px;
    }

    .slide__title {
        font-size: 30px;
    }

    .slide__text {
        font-size: 35px;
    }

    .slide__img {
        max-width: 100px;
    }
}
</style>
