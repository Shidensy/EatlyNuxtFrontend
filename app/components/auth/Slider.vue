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

interface AuthSlide {
    title: string;
    text: string;
}

const authSlides: AuthSlide[] = [
    {
        title: "Find Foods With Love",
        text: "Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.",
    },
    {
        title: "Track Orders In Real-Time",
        text: "Manage Your Deliveries Efforlessly With Live Tracking Systems. Monitor Every Step From The Kitchen Chef To Your Customer's Doorstep With Pinpoint Accuracy And Speed.",
    },
    {
        title: "Control Revenue Easily",
        text: "Analyze Your Sales Growth And Daily Income With Detailed Graphic Reports. Keep Your Restaurant Finances Transparent, Predict Expenses, And Maximize Profits Instantly.",
    },
];
</script>

<template>
    <div class="auth-slider">
        <Swiper
            class="slider"
            :loop="true"
            :allow-touch-move="true"
            :simulate-touch="true"
            :slides-per-view="1"
            :speed="700"
            :space-between="40"
            :modules="[Autoplay]"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange">
            <SwiperSlide v-for="(slide, index) in authSlides" :key="index">
                <div class="slide">
                    <h2 class="slide__title">{{ slide.title }}</h2>
                    <p class="slide__text">{{ slide.text }}</p>
                </div>
            </SwiperSlide>
        </Swiper>
        <div class="auth-slider__scrollbar-layout">
            <div class="auth-slider__segments-bar">
                <button
                    v-for="(slide, index) in authSlides"
                    :key="index"
                    class="auth-slider__segment"
                    :class="{'auth-slider__segment--active': activeIndex === index}"
                    :aria-label="`Go to slide ${index + 1}`"
                    @click="goToSlide(index)"></button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.auth-slider {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    min-width: 0;
}

.slider {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
}

.slide {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
}

.slide__title {
    color: #fff;
    text-align: center;
    font-family: $font-manrope;
    font-size: 40px;
    font-weight: 800;
    line-height: 110%;
}

.slide__text {
    color: #fff;
    text-align: center;
    font-family: $font-manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
}

.auth-slider__scrollbar-layout {
    width: 100%;
    display: flex;
}

.auth-slider__segments-bar {
    display: flex;
    gap: 8px;
    width: max-content;
    height: 6px;
    margin: 0 auto;
    border-radius: 50px;
    z-index: 10;
}

.auth-slider__segment {
    height: 100%;
    width: 6px;
    border-radius: 50px;
    background-color: #fff;
    opacity: 0.5;
    transition: width 0.3s ease;
    cursor: pointer;

    &.auth-slider__segment--active {
        opacity: 1;
        width: 24px;
    }
}

@include tablet {
    .auth-slider {
        gap: 20px;
    }

    .slide {
        gap: 15px;
        max-width: 350px;
    }

    .slide__title {
        font-size: 28px;
    }

    .slide__text {
        font-size: 10px;
    }

    .auth-slider__segments-bar {
        gap: 6px;
        height: 4px;
        border-radius: 35px;
    }

    .auth-slider__segment {
        width: 4px;
        border-radius: 35px;

        &.auth-slider__segment--active {
            opacity: 1;
            width: 16px;
        }
    }
}
</style>
