<script setup lang="ts">
import Heart from "~/assets/icons/heart.svg";
import HeartFilled from "~/assets/icons/heartFilled.svg";

const isFav = ref(false);

const toggleHeart = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();

    isFav.value = !isFav.value;
};
</script>

<template>
    <button class="product-card__heart-btn" :style="[isFav ? 'color: rgb(232, 38, 38)' : '']" type="button" aria-label="Add product to favorites" @click="toggleHeart">
        <Heart v-if="!isFav" class="product-card__heart-btn-icon" />
        <HeartFilled v-else class="product-card__heart-btn-icon product-card__heart-btn-icon--filled" />
    </button>
</template>

<style scoped lang="scss">
.product-card__heart-btn {
    position: absolute;
    top: 18px;
    right: 18px;
    cursor: pointer;
    color: rgb(0, 0, 0);
    transition: transform 0.2s linear;

    @include hover {
        transform: scale(1.1);
    }
}

@include mobile {
    .product-card__heart-btn {
        transform: scale(0.9);
        right: 10px;
    }
}
</style>
