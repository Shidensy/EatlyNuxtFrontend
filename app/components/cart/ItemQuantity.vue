<script setup lang="ts">
import Plus from "~/assets/icons/plus.svg";
import Minus from "~/assets/icons/minus.svg";
import {useCartStore} from "~/store/UseCartStore";
import type {CartItem} from "~/types/cart";

defineProps<{
    item: CartItem;
}>();

const cartStore = useCartStore();

const incrementQty = (productId: number, currentQty: number) => {
    cartStore.updateQuantity(productId, currentQty + 1);
};

const decrementQty = (productId: number, currentQty: number) => {
    cartStore.updateQuantity(productId, currentQty - 1);
};

const formattedQuantity = (quantity: number) => {
    return String(quantity).padStart(2, "0");
};
</script>

<template>
    <div class="item__quantity">
        <div class="item__total">
            <Plus class="item__plus" @click="incrementQty(item.product.id, item.quantity)" />
            <span>{{ formattedQuantity(item.quantity) }}</span>
            <Minus class="item__minus" @click="decrementQty(item.product.id, item.quantity)" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.item__total {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #323142;
    font-size: 18px;
    line-height: 140%;
}

.item__plus,
.item__minus {
    width: 100%;
    height: 100%;
}

@include tablet {
    .item__total {
        font-size: 12px;
    }
}

@include mobile {
    .item__total {
        font-size: 10px;
    }
}
</style>
