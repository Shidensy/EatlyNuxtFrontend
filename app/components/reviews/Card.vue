<script setup lang="ts">
import Quotes from "~/assets/icons/quotes.svg";
import Star from "~/assets/icons/star-yellow.svg";
import type {Review} from "~/types/review";

const props = defineProps<{
    isActive?: boolean;
    review: Review;
}>();

const shortName = computed(() => {
    const parts = props.review.author.trim().split(" ");
    return `${parts[0]} ${parts[1]?.[0]}.`;
});

const formatYears = computed(() => {
    return String(props.review.years).padStart(2, "0");
});
</script>

<template>
    <div class="review-card">
        <div class="review-card__top" v-show="isActive">
            <div class="review-card__img" :style="{backgroundImage: `url('${props.review.avatar}')`}"></div>

            <div class="review-card__author">
                <p class="review-card__author-name">{{ shortName }}</p>
                <span class="review-card__author-age">{{ formatYears }} {{ formatYears == "01" ? "Year" : "Years" }} With Us </span>
            </div>

            <Quotes class="quotes" />
        </div>
        <p class="review-card__text">“ {{ review.text }} ”</p>
        <div class="review-card__rate">
            <Star class="star" v-for="star in review.rate" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.review-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    height: 100%;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgb(233, 226, 226);
    background-color: #fff;
}

.review-card__top {
    display: flex;
    align-items: center;
    gap: 20px;
}

.review-card__img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.review-card__author {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.review-card__author-name {
    color: #030314;
    font-size: 20px;
    font-weight: 500;
}

.review-card__author-age {
    color: #5e5d5d;
    font-family: $font-quicksand;
    font-size: 16px;
    font-weight: 500;
}

.quotes {
    margin-left: auto;
}

.review-card__text {
    color: #636363;
    text-align: justify;
    font-size: 18px;
    font-style: italic;
    line-height: 26px;
}

.review-card__rate {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #ffc107;
}

@include tablet {
    .review-card {
        justify-content: unset;
        height: unset;
        gap: 20px;
        padding: 25px 30px;
    }

    .review-card__top {
        gap: 15px;
    }

    .review-card__author {
        gap: 0;
    }

    .review-card__author-name {
        font-size: 14px;
        line-height: 20px;
    }

    .review-card__author-age,
    .review-card__text {
        font-size: 12px;
        line-height: 18px;
    }

    .review-card__img {
        width: 50px;
        height: 50px;
    }

    .review-card__rate {
        gap: 0;
    }

    .quotes,
    .star {
        transform: scale(0.8);
    }
}

@include mobile {
    .review-card {
        padding: 20px 25px;
    }

    .review-card__author-name {
        font-size: 12px;
        line-height: 18px;
    }

    .review-card__author-age,
    .review-card__text {
        font-size: 10px;
        line-height: 15px;
    }

    .review-card__img {
        width: 40px;
        height: 40px;
    }

    .quotes,
    .star {
        transform: scale(0.6);
    }
}
</style>
