<script setup lang="ts">
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import {useProductStore} from "~/store/UseProductStore";

const productStore = useProductStore();

const activeIndex = ref<number>(0);

const currentPrice = computed<number>(() => +(priceSteps[activeIndex.value] ?? 0));

onMounted(() => {
    watch(activeIndex, () => {
        productStore.filterForm.min_price = currentPrice.value;
    });
});
</script>

<template>
    <div class="filter__price-range">
        <Slider class="price-slider" v-model="activeIndex" :min="0" :max="5" :step="1" />

        <div class="price-range__labels">
            <span v-for="(price, index) in priceSteps" :key="index" :class="{'is-active': activeIndex === index}">${{ price }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.price-slider {
    --slider-connect-bg: #6c5fbc;
    --slider-handle-bg: #6c5fbc;
    --slider-height: 6px;

    :deep(.slider-handle),
    :deep(.slider-handle:focus),
    :deep(.slider-handle:hover) {
        width: 16px;
        height: 16px;
        background-color: #6c5fbc;
        border: none;
        outline: none;

        box-shadow: 0 0 0 4px #bbb6d7;

        transition: transform 0.15s ease-out;
        cursor: grab;
    }

    :deep(.slider-handle:active) {
        cursor: grabbing;
        transform: scale(1.05);
    }

    :deep(.slider-tooltip) {
        display: none;
        opacity: 0;
        visibility: hidden;
    }

    cursor: pointer;
}

.price-range__labels {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;

    span {
        color: #c2c3cb;
        font-size: 10px;
        font-weight: 500;
        line-height: 30px;

        &.is-active {
            color: #6c5fbc;
        }
    }
}

@include tablet {
    .price-range__labels {
        span {
            font-size: 7px;
            line-height: 20px;
        }
    }
}

@include mobile {
    .price-range__labels {
        span {
            font-size: 10px;
            line-height: 24px;
        }
    }
}
</style>
