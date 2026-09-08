<script setup lang="ts">
import {useProductStore} from "~/store/UseProductStore";

const productStore = useProductStore();

const changeSort = (index: number): void => {
    sortBtns.value = sortBtns.value.map((btn, i) => ({
        ...btn,
        active: i === index ? !btn.active : false,
    }));

    const activeBtn = sortBtns.value.find((btn) => btn.active);

    productStore.filterForm.sort = activeBtn ? activeBtn.text : "";
};
</script>

<template>
    <ul class="filter__sort-list">
        <li class="filter__sort-item" v-for="(btn, index) in sortBtns" :key="index">
            <button
                class="filter__sort-btn"
                type="button"
                :style="{
                    color: btn.active ? '#6C5FBC' : '#ACADB9',
                }"
                @click="changeSort(index)">
                {{ btn.text }}
            </button>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.filter__sort-list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    gap: 10px;
}

.filter__sort-btn {
    padding: 2px 8px;
    border-radius: 10px;
    color: #acadb9;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;

    transition:
        color 0.2s ease,
        transform 0.2s ease;
}

.filter__sort-btn:hover {
    transform: scale(1.05);
}

@include tablet {
    .filter__sort-list {
        gap: 5px;
    }

    .filter__sort-btn {
        font-size: 10px;
        line-height: 20px;
    }
}

@include mobile {
    .filter__sort-list {
        gap: 7px;
    }

    .filter__sort-btn {
        font-size: 12px;
        line-height: 24px;
    }
}
</style>
