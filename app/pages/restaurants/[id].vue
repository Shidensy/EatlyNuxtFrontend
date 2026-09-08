<script setup lang="ts">
import Star from "~/assets/icons/star.svg";
import Dot from "~/assets/icons/dot.svg";
import {useRoute} from "vue-router";
import {useRestaurantStore} from "~/store/UseRestaurantStore";

const route = useRoute();
const restaurantStore = useRestaurantStore();
const {restaurant} = storeToRefs(restaurantStore);

await restaurantStore.getRestaurant(parseInt(String(route.params.id), 10));
</script>

<template>
    <section v-if="restaurant" class="restaurant">
        <div class="container">
            <div class="restaurant__wrapper">
                <article class="restaurant-card">
                    <div class="restaurant-card__img-wrapper">
                        <NuxtImg class="restaurant-card__img" :src="restaurant.image_url" format="webp" width="400" height="200" />
                    </div>

                    <div class="restaurant-card__content">
                        <div class="restaurant-card__meta">
                            <h3 class="restaurant-card__title">{{ restaurant.name }}</h3>

                            <div class="restaurant-card__info">
                                <div class="restaurant-card__time-wrapper">
                                    <time class="restaurant-card__time" datetime="PT24M">{{ restaurant.time }}</time>
                                    <Dot class="dot" />
                                </div>

                                <div class="restaurant-card__rating">
                                    <Star class="restaurant-card__rating-icon" />
                                    <span class="restaurant-card__rating-value">{{ restaurant.rate }}</span>
                                </div>
                            </div>
                        </div>
                        <RestaurantsBookmark />
                    </div>
                </article>
                <RestaurantsCard class="restaurant-card restaurant-card--mobile" :restaurant="restaurant" />
            </div>
        </div>
    </section>

    <RestaurantsProducts class="dishes">Popular 🔥</RestaurantsProducts>
    <RestaurantsProducts class="dishes" :dishes="true">Chicken Vegetables</RestaurantsProducts>
    <Questions />
</template>

<style scoped lang="scss">
.restaurant-card {
    height: 100%;
    width: 100%;
    border-radius: 30px;
    border: 1px solid #f4f4f6;
    background: #fff;
    box-shadow: 5px 20px 35px 0 rgba(229, 229, 229, 0.7);
    overflow: hidden;

    &--mobile {
        display: none;
    }
}

.restaurant-card__img-wrapper {
    position: relative;
    width: 100%;
    height: 350px;
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

.restaurant-card__content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    padding: 35px 40px;
    color: #8e97a6;
}

.restaurant-card__title {
    color: #323142;
    font-size: 40px;
    font-weight: 600;
    line-height: 53px;
}

.restaurant-card__meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    margin-top: auto;
    color: #8e97a6;
}

.restaurant-card__info {
    display: flex;
}

.restaurant-card__time-wrapper {
    display: flex;
    align-items: center;
}

.restaurant-card__rating-value,
.restaurant-card__time {
    font-family: $font-manrope;
    font-size: 26px;
    line-height: 34px;
}

.restaurant-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
}

@include tablet {
    .restaurant-card__img-wrapper {
        height: 270px;
    }

    .restaurant-card__content {
        padding: 25px 32px;
    }

    .restaurant-card__title {
        font-size: 28px;
        line-height: 35px;
    }

    .restaurant-card__rating-value,
    .restaurant-card__time {
        font-size: 18px;
        line-height: 24px;
    }
}

@include tablet-small {
    .restaurant-card__content {
        padding: 18px 24px;
    }

    .restaurant-card__title {
        font-size: 24px;
        line-height: 28px;
    }

    .restaurant-card__rating-value,
    .restaurant-card__time {
        font-size: 14px;
        line-height: 24px;
    }
}

@include mobile {
    .restaurant__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .restaurant-card {
        display: none;
    }

    .restaurant-card--mobile {
        display: block;

        .article {
            width: 100%;
        }
    }
}
</style>
