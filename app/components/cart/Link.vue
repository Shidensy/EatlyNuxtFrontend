<script setup lang="ts">
import {useCartStore} from "~/store/UseCartStore";

const cartStore = useCartStore();
const {items} = storeToRefs(cartStore);
</script>

<template>
    <NuxtLink to="/cart" v-if="items.length >= 0">
        <span class="cart-wrapper">
            <svg xmlns="http://w3.org" class="cart-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span class="cart-badge">{{ items.length }}</span>
        </span>
    </NuxtLink>
</template>

<style scoped lang="scss">
.cart-wrapper {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.cart-icon {
    width: 24px;
    height: 24px;
    color: currentColor;
}

.cart-badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background-color: #ef4444;
    color: white;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    padding: 3px 6px;
    border-radius: 9999px;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    min-width: 12px;
    text-align: center;

    animation: pop-in 0.2s ease-out;
}

@keyframes pop-in {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}
</style>
