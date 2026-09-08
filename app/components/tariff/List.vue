<script setup lang="ts">
import DropDown from "./DropDown.vue";
import type {List} from "~/types/advantages.ts";

defineProps<{
    item: List;
}>();
</script>

<template>
    <div class="list">
        <div class="list__title">{{ item.title }}</div>
        <div class="list__price">
            <h3 class="list__amount"><span class="list__currency">$</span>{{ item.price }}</h3>
            <span class="list__month">/month</span>
        </div>
        <hr class="list__border" />
        <span class="list__subtitle" v-html="item.subtitle"></span>
        <BaseDefaultBtn style="padding: 8px 18px; font-size: 11px; text-transform: uppercase">START {{ item.grade }}</BaseDefaultBtn>
        <DropDown :advantages="item.advantages"></DropDown>
    </div>
</template>

<style scoped lang="scss">
.list {
    display: none;
}

.list__title {
    color: #282828;
    font-size: 26px;
    font-weight: 600;
    line-height: 120%;
}

.list__price {
    display: flex;
    align-items: flex-end;
    gap: 0;
}

.list__amount {
    display: flex;
    color: #272e35;
    font-size: 45px;
    font-weight: 600;
    line-height: 40px;
}

.list__currency {
    color: #272e35;
    font-size: 17px;
    font-weight: 600;
    line-height: 22px;
}

.list__border {
    height: 1px;
    background-color: #c2c2c2;
}

.list__month,
.list__subtitle {
    color: #6e757c;
    font-family: $font-inter;
    font-size: 11px;
    font-weight: 500;
    line-height: 17px;
}

@include tablet-small {
    .list {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px 20px;
        border-radius: 15px;
        background: #f9f9f9;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 110%;
            height: 110%;
            border-radius: 20.116px;
            background: rgba(111, 110, 131, 0.15);
            filter: blur(90px);
            z-index: -1;
        }
    }
}
</style>
