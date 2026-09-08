<script setup lang="ts">
import Star from "~/assets/icons/star.svg";
import Dot from "~/assets/icons/dot.svg";
import type {Product} from "~/types/product";

const props = defineProps<{
    product: Product;
}>();

const getCents = (price: number): string =>
    Math.round((price % 1) * 100)
        .toString()
        .padStart(2, "0");
</script>

<template>
    <NuxtLink style="max-width: fit-content" :to="`${getProductPath(props.product.id, props.product.name)}`">
        <article class="product-card">
            <DishesHeart />

            <div class="product-card__image-wrapper">
                <NuxtImg class="product-card__image" :src="product.image_url || '/images/Chicken_Hell.png'" :alt="product.name" format="webp" width="200" height="210" />
            </div>

            <div class="product-card__body">
                <BaseCardAttribute :attribute="product.attribute" />
                <h3 class="product-card__title">{{ product.name }}</h3>
                <div class="product-card__meta">
                    <div class="product-card__time-wrapper">
                        <time class="product-card__time" datetime="PT24M">{{ product.time }}</time>
                        <Dot class="dot" />
                    </div>

                    <div class="product-card__rating">
                        <Star class="product-card__rating-icon" />
                        <span class="product-card__rating-value">{{ product.rate }}</span>
                    </div>
                </div>

                <div class="product-card__footer">
                    <data class="product-card__price" :value="product.price">
                        ${{ Math.floor(product.price) }}<span>.{{ getCents(product.price) }}</span>
                    </data>

                    <DishesAdd :product="product" />
                </div>
            </div>
        </article>
    </NuxtLink>
</template>

<style scoped lang="scss">
.product-card {
    position: relative;
    flex: 1 1 200px;
    max-width: 200px;
    border-radius: 35px;
    border: 1.5px solid #eee9e9;
    background: #fff;
    box-shadow: 7px 20px 40px 0 rgba(229, 229, 229, 0.7);
    padding: 20px 15px;

    transition: box-shadow 0.2s ease;

    @include hover {
        box-shadow: 7px 20px 40px 0 rgba(99, 97, 97, 0.7);
    }
}

.product-card__image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card__image {
    width: 100%;
    object-fit: contain;
    margin: 0 auto;
    cursor: pointer;
}

.product-card__body {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.product-card__title {
    color: #323142;
    font-size: 24px;
    font-weight: 600;
    line-height: 160%;
}

.product-card__meta {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 12px;
}

.product-card__time-wrapper {
    display: flex;
    align-items: center;
}

.dot {
    width: 20px;
    height: auto;
    color: #8e97a6;
}

.product-card__time,
.product-card__rating {
    font-family: $font-manrope;
    font-size: 16px;
    color: #8e97a6;
    line-height: 22px;
}

.product-card__rating {
    display: flex;
    align-items: center;
}

.product-card__footer {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
}

.product-card__price {
    color: #323142;
    font-family: $font-manrope;
    font-size: 25px;
    font-weight: 700;
    line-height: 40px;

    span {
        color: #8e97a6;
        font-family: $font-manrope;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
    }
}

@include tablet {
    .product-card {
        flex: 1 1 170px;
        max-width: 170px;
        padding: 20px 15px;
    }

    .product-card__title {
        font-size: 15px;
        line-height: 24px;
    }

    .product-card__meta {
        margin-bottom: 0;
    }

    .product-card__time,
    .product-card__rating {
        font-size: 12px;
        line-height: 15px;
    }

    .product-card__price {
        font-size: 16px;
        line-height: 26px;

        span {
            font-size: 12px;
            line-height: 26px;
        }
    }
}

@include mobile {
    .product-card {
        margin: 0 auto;
        min-width: 170px;
        padding: 18px 10px;
        border-radius: 20px;
    }
}

@include mobile-small {
    .product-card {
        min-width: 140px;
    }
}
</style>
