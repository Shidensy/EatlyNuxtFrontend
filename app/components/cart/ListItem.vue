<script setup lang="ts">
import {useCartStore} from "~/store/UseCartStore";

const cartStore = useCartStore();

const {items} = storeToRefs(cartStore);

const getTotalItemPrice = (quantity: number, price: number): number => {
    return Math.round(quantity * price * 100) / 100;
};
</script>

<template>
    <li class="cart__list-item item" v-for="item in items" :key="item.product.id">
        <NuxtImg class="item__img" :src="item.product.image_url" :alt="item.product.name" format="webp" />
        <div class="item__content">
            <h3 class="item__title">{{ item.product.name }}</h3>
            <p class="item__price">${{ item.product.price }}</p>
        </div>
        <div class="item__total-price">
            <CartItemQuantity :item="item" />
            <div class="item__all">${{ getTotalItemPrice(item.quantity, item.product.price) }}</div>
        </div>
    </li>
</template>

<style scoped lang="scss">
.item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    padding: 15px 50px 15px 5px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 15px 20px 0 rgba(70, 70, 70, 0.1);

    &:first-child {
        box-shadow: 0 20px 30px 0 rgba(70, 70, 70, 0.15);
    }
}

.item__img {
    width: 100%;
    max-width: 90px;
}

.item__title {
    color: #323142;
    font-size: 22px;
    font-weight: 600;
    line-height: 140%;
}

.item__price {
    color: #323142;
    font-size: 18px;
    font-weight: 600;
    line-height: 140%;
}

.item__total-price {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: auto;
    align-items: center;
}

.item__all {
    color: #323142;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
}

@include tablet {
    .item {
        gap: 10px;
        padding: 10px 40px 10px 2px;
    }

    .item__img {
        max-width: 70px;
    }

    .item__title {
        font-size: 16px;
    }

    .item__price {
        font-size: 12px;
    }

    .item__all {
        font-size: 12px;
    }
}

@include mobile {
    .item {
        gap: 8px;
        width: 100%;
        padding: 5px 15px 5px 5px;
    }

    .item__img {
        max-width: 60px;
    }

    .item__title {
        font-size: 12px;
    }

    .item__price {
        font-size: 10px;
    }

    .item__all {
        font-size: 10px;
    }
}
</style>
