<script setup lang="ts">
import Star from "~/assets/icons/star.svg";
import Dot from "~/assets/icons/dot.svg";

import type {RestaurantResponse} from "~/types/restaurant";

const props = defineProps<{
    restaurant: RestaurantResponse;
    isRestaurantPage?: boolean;
}>();
</script>

<template>
    <NuxtLink :to="`${getRestaurantPath(props.restaurant.id, props.restaurant.name)}`">
        <article class="restaurant-card">
            <div class="restaurant-card__img-wrapper">
                <NuxtImg class="restaurant-card__img" :src="restaurant.image_url" format="webp" width="400" height="200" />
            </div>

            <div class="restaurant-card__content">
                <BaseCardAttribute class="restaurant-card__attribute" :attribute="restaurant.attribute" />
                <h3 class="restaurant-card__title">{{ restaurant.name }}</h3>
                <div class="restaurant-card__meta">
                    <div class="restaurant-card__time-wrapper">
                        <time class="restaurant-card__time" datetime="PT24M">{{ restaurant.time }}</time>
                        <Dot class="dot" />
                    </div>

                    <div class="restaurant-card__rating">
                        <Star class="restaurant-card__rating-icon" />
                        <span class="restaurant-card__rating-value">{{ restaurant.rate }}</span>
                    </div>

                    <RestaurantsBookmark />
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<style scoped lang="scss">
.restaurant-card {
    height: 100%;
    width: 100%;
    border-radius: 30px;
    border: 1px solid #f4f4f6;
    background: #fff;
    box-shadow: 5px 20px 35px 0 rgba(229, 229, 229, 0.7);
    cursor: pointer;
    overflow: hidden;

    transition: transform 0.3s ease;

    @include hover {
        transform: scale(1.05);
    }
}

.restaurant-card__img-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: rgba(50, 49, 66, 0.1);
    }
}

.restaurant-card__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.restaurant-card__attribute {
    padding: 3px 9px;
}

.restaurant-card__content {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
}

.restaurant-card__title {
    color: #323142;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
}

.restaurant-card__meta {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: auto;
    color: #8e97a6;
}

.restaurant-card__time-wrapper {
    display: flex;
    align-items: center;
}

.restaurant-card__rating-value,
.restaurant-card__time {
    font-family: $font-manrope;
    font-size: 19px;
    line-height: 25px;
}

.restaurant-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
}

.restaurant-card__bookmark {
    margin-left: auto;

    transition: color 0.2s ease;

    @include hover {
        color: #6c5fbc;
    }
}

@include tablet {
    .restaurant-card__content {
        padding: 10px 20px;
    }

    .restaurant-card__img-wrapper {
        max-height: 125px;
    }

    .restaurant-card__title {
        font-size: 18px;
        line-height: 30px;
    }

    .restaurant-card__rating-value,
    .restaurant-card__time {
        font-size: 14px;
        line-height: 18px;
    }
}

@include tablet-small {
    .restaurant-card {
        width: 290px;
    }
}

@include mobile {
    .restaurant-card__content {
        padding: 10px 25px;
    }

    .restaurant-card__title {
        font-size: 20px;
        line-height: 32px;
    }
}
</style>
