<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import type {Swiper as SwiperType} from "swiper";
import {Autoplay} from "swiper/modules";

const swiperInstance = ref<SwiperType | null>(null);
const activeIndex = ref(0);

const onSwiperInit = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const goToSlide = (index: number) => {
    if (swiperInstance.value) {
        swiperInstance.value?.slideToLoop(index);
    }
};
</script>

<template>
    <div class="slider">
        <Swiper
            :allow-touch-move="true"
            :simulate-touch="true"
            :slides-per-view="1"
            :speed="700"
            :space-between="40"
            :modules="[Autoplay]"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange">
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
                <CatalogSlide :slide="slide" />
            </SwiperSlide>
        </Swiper>

        <div class="slider__scrollbar-layout">
            <div class="slider__segments-bar">
                <div v-for="(slide, index) in slides" :key="index" class="slider__segment" :class="{'slider__segment--active': activeIndex === index}" @click="goToSlide(index)"></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.slider {
    position: relative;

    :deep(.swiper-wrapper) {
        margin-bottom: 65px;
        height: 250px;
    }

    &::before {
        content: "";
        position: absolute;
        right: -5%;
        top: -10%;
        width: 30px;
        height: 30px;
        background: url("~/assets/icons/decor.svg") no-repeat center / contain;
        pointer-events: none;
    }
}

.slider__scrollbar-layout {
    width: 100%;
    display: flex;
}

.slider__segments-bar {
    display: flex;
    gap: 10px;
    width: max-content;
    height: 6px;
    margin: 0 auto;
    border-radius: 10px;
    z-index: 10;
}

.slider__segment {
    height: 100%;
    width: 30px;
    border-radius: 10px;
    background-color: #dbd9ee;
    transition:
        width 0.3s ease,
        background-color 0.3s ease;
    cursor: pointer;

    &.slider__segment--active {
        background-color: #6c5fbc;
        opacity: 1;
        width: 60px;
    }
}

@include tablet {
    .slider {
        :deep(.swiper-wrapper) {
            margin-bottom: 35px;
            height: 180px;
        }
        &::before {
            right: -2%;
            top: -6%;
            width: 16px;
            height: 16px;
        }
    }

    .slider__segments-bar {
        height: 4px;
    }
}

@include mobile {
    .slider {
        position: relative;
        :deep(.swiper-wrapper) {
            margin-bottom: 20px;
            height: 100px;
        }
    }

    .slider__scrollbar-layout {
        display: none;
    }
}
</style>
