<script setup lang="ts">
import {useCartStore} from "~/store/UseCartStore";
import Decor from "~/assets/icons/decor.svg";

const cartStore = useCartStore();

const {items} = storeToRefs(cartStore);
</script>

<template>
    <transition name="fade">
        <ul class="cart-list" v-if="items.length > 0">
            <Decor class="decor" />
            <CartListItem />
        </ul>
        <div class="cart-empty" v-else>
            <p class="cart-empty__text">Your cart is <span>empty</span>. It's time to order something!</p>
            <BaseDefaultLink to="/menu" class="cart-empty__link">Go to menu</BaseDefaultLink>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.cart-list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.decor {
    position: absolute;
    top: -70px;
    right: 0px;
    transform: translate(100%, 100%);
    max-width: 40px;
}

.cart-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 100%;
    text-align: center;
}

.cart-empty__text {
    font-size: 24px;
    text-transform: capitalize;

    span {
        color: #6c5fbc;
    }
}

.cart-empty__link {
    width: 100%;
}

@include tablet {
    .cart-list {
        gap: 15px;
    }

    .decor {
        top: -50px;
        max-width: 30px;
    }
}
</style>
