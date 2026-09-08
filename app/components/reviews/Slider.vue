<script setup lang="ts">
import {ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";

import {useReviewStore} from "~/store/UseReviewStore";

const reviewStore = useReviewStore();
await reviewStore.getReviews();

const swiperInstance = ref<any>(null);
const activeIndex = ref(0);

const onSwiperInit = (swiper: any) => {
    swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex;
};

const goToSlide = (index: number) => {
    if (swiperInstance.value) {
        swiperInstance.value.slideToLoop(index);
    }
};
</script>

<template>
    <ClientOnly>
        <div class="reviews">
            <div class="reviews__slider">
                <Swiper
                    :allow-touch-move="true"
                    :simulate-touch="true"
                    :slides-per-view="1"
                    :speed="400"
                    :loop="true"
                    :centered-slides="false"
                    :breakpoints="{
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 30,
                        },
                    }"
                    @swiper="onSwiperInit"
                    @slideChange="onSlideChange">
                    <SwiperSlide v-for="(review, index) in reviewStore.reviews" :key="review.id">
                        <ReviewsCard :is-active="activeIndex === index" :review="review" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div class="reviews__scrollbar-layout">
                <div class="reviews__segments-bar">
                    <div
                        v-for="(review, index) in reviewStore.reviews"
                        :key="index"
                        class="reviews__segment"
                        :class="{'reviews__segment--active': activeIndex === index}"
                        @click="goToSlide(index)"></div>
                </div>
            </div>
        </div>
    </ClientOnly>
</template>

<style scoped lang="scss">
.reviews {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 20px;
        opacity: 0.1;
        background: #323142;
        filter: blur(92px);
    }
}

.reviews__slider {
    width: 100%;
    :deep(.swiper-wrapper) {
        align-items: flex-start;
        height: 360px;
    }
}

.reviews__scrollbar-layout {
    width: 100%;
    display: flex;
    padding-left: calc(40% + 30px);
    box-sizing: border-box;
    margin-top: -20px;
}

.reviews__segments-bar {
    width: 100%;
    max-width: 500px;
    height: 10px;
    border-radius: 10px;
    display: flex;
    z-index: 10;
    background-color: rgba(108, 95, 188, 0.2);
}

.reviews__segment {
    flex: 1;
    height: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &.reviews__segment--active {
        background-color: #6c5fbc;
        opacity: 1;
    }
}

:deep(.swiper-slide) {
    transition: height 0.3s ease;
}

:deep(.swiper-slide-active) {
    height: 350px !important;
}

:deep(.swiper-slide:not(.swiper-slide-active)) {
    height: 270px;
}

@include tablet {
    .reviews__slider {
        :deep(.swiper-wrapper) {
            height: 300px;
        }
    }
}

@include tablet-small {
    .reviews__scrollbar-layout {
        padding: 0;
    }

    .reviews__segments-bar {
        max-width: 100%;
    }

    .reviews__slider {
        :deep(.swiper-wrapper) {
            height: 265px;
        }
    }
}
</style>
