<script setup lang="ts">
import Add from "~/assets/icons/add.svg";
import Check from "~/assets/icons/check.svg";
import {useCartStore} from "~/store/UseCartStore";
import type {Product} from "~/types/product";

defineProps<{
    product: Product;
}>();

const cartStore = useCartStore();
const {isInCart} = storeToRefs(cartStore);
</script>

<template>
    <button class="product-card__add-btn" type="button" aria-label="Add product to cart">
        <Add v-if="!isInCart(product.id)" class="product-card__add-btn-icon" @click.stop.prevent="cartStore.addProduct(product)" />
        <Check v-else class="product-card__add-btn-icon product-card__add-btn-icon--checked" @click.stop.prevent="cartStore.removeProduct(product.id)" />
    </button>
</template>

<style scoped lang="scss">
.product-card__add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card__add-btn-icon {
    transition: transform 0.2s ease-in-out;

    @include hover {
        transform: scale(1.1);
    }
}

@include tablet {
    .product-card__add-btn-icon {
        transform: scale(0.8);
    }
}
</style>
