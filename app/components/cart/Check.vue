<script setup lang="ts">
import {useCartStore} from "~/store/UseCartStore";

const cartStore = useCartStore();

const {totalPrice, getDelivery, getTotal} = storeToRefs(cartStore);
</script>

<template>
    <div class="check-list">
        <div class="check-list__item item">
            <div class="item__title">Subtotal</div>
            <div class="item__amout">${{ totalPrice }}</div>
        </div>
        <div class="check-list__item item">
            <div class="item__title">Delivery</div>
            <div class="item__amout">${{ getDelivery }}</div>
        </div>
        <div class="check-list__item item">
            <div class="item__title item__title--strong">Total</div>
            <div class="item__amout item__amount--strong">${{ getTotal }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.check-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.check-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
    background-image: linear-gradient(to right, black 70%, rgba(255, 255, 255, 0) 0%);
    background-size: 8px 1px;
    background-repeat: repeat-x;
    background-position: bottom;

    color: #323142;
    font-size: 20px;
    line-height: 117.5%;
    opacity: 0.7;

    &:last-child {
        margin-top: 15px;
        background-image: none;
        font-size: 25px;
        font-weight: 600;
        opacity: 1;
    }
}

@include tablet {
    .check-list {
        gap: 10px;
    }

    .check-list__item {
        padding-bottom: 10px;
        background-size: 6px 1px;
        font-size: 14px;

        &:last-child {
            margin-top: 10px;
            font-size: 18px;
        }
    }
}

@include mobile {
    .check-list__item {
        padding-bottom: 8px;

        color: #323142;
        font-size: 12px;

        &:last-child {
            margin-top: 8px;
            font-size: 15px;
        }
    }
}
</style>
