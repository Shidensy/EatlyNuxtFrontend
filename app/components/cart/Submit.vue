<script setup lang="ts">
import ArrowDecorSmall from "~/assets/icons/arrowDecorSmall.svg";
import {useCartStore} from "~/store/UseCartStore";

const cartStore = useCartStore();
</script>

<template>
    <div class="cart-submit">
        <ArrowDecorSmall class="decor decor--left" />
        <BaseDefaultBtn class="cart-submit__btn" @click="cartStore.clearCart">Review Payment</BaseDefaultBtn>
        <ArrowDecorSmall class="decor decor--right" />
    </div>
</template>

<style scoped lang="scss">
.cart-submit {
    position: relative;
    color: #6c5fbc;
}

.cart-submit__btn {
    width: 100%;
    padding: 24px;
    font-size: 20px;
}

.decor {
    position: absolute;
    top: -50%;
    left: -100px;
    width: 120px;
    height: 120px;
    transform: rotate(45deg);

    &--right {
        left: unset;
        right: -100px;
        transform: scaleX(-1) rotate(45deg);
    }
}

@include tablet {
    .cart-submit__btn {
        padding: 16px;
        font-size: 14px;
    }

    .decor {
        width: 85px;
        height: 85px;
        top: -70%;
        left: -70px;

        &--right {
            left: unset;
            right: -70px;
        }
    }
}

@include tablet-small {
    .decor {
        display: none;
    }
}

@include mobile {
    .cart-submit__btn {
        padding: 14px;
        font-size: 12px;
    }
}
</style>
