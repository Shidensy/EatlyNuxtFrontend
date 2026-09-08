<script setup lang="ts">
import Coupon from "~/assets/icons/coupon.svg";
import {useCartStore} from "~/store/UseCartStore";

const cartStore = useCartStore();

const coupon = ref("");
const discount = ref(0);

const applyCoupon = () => {
    discount.value = cartStore.useCoupon(coupon.value);

    if (discount.value === 0) {
        alert("Promo code not found");
    } else {
        alert(`Success! Your discount is ${discount.value}%`);
    }
};
</script>

<template>
    <div class="coupon">
        <div class="coupon__input-wrapper">
            <label class="coupon__label visually-hidden" for="coupon"></label>
            <Coupon class="coupon__icon" />
            <input class="coupon__input" v-model="coupon" type="text" autocomplete="off" id="coupon" name="coupon" placeholder="Apply Coupon" />
        </div>
        <BaseDefaultBtn class="coupon__btn" @click="applyCoupon">Apply</BaseDefaultBtn>
    </div>
</template>

<style scoped lang="scss">
.coupon {
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 8px;
    width: 100%;
}

.coupon__input-wrapper {
    display: flex;
    gap: 12px;
    padding: 18px;
    border-radius: 10px;
    background-color: #f1f1f1;
    color: rgba(194, 195, 203, 1);

    &:focus-within {
        border-color: #6c5fbc;
        color: rgba(108, 95, 188, 1);
    }

    &:has(.coupon__input:not(:placeholder-shown)) {
        border-color: #6c5fbc;
        color: rgba(108, 95, 188, 1);
    }
}

.coupon__input {
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    color: #6c5fbc;
    font-size: 18px;

    &::placeholder {
        text-transform: capitalize;
        color: rgba(194, 195, 203, 1);
    }

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    &::-webkit-credentials-reveal {
        display: none;
    }
}

.coupon__btn {
    width: 100%;
    height: 100%;
}

@include mobile {
    .coupon__input-wrapper {
        gap: 8px;
        padding: 14px 12px;
        border-radius: 6px;
    }

    .coupon__icon {
        width: 18px;
    }

    .coupon__input {
        font-size: 10px;
    }
}
</style>
