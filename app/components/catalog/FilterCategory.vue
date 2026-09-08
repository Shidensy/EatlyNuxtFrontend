<script setup lang="ts">
import {useProductStore} from "~/store/UseProductStore";

const productStore = useProductStore();

const changeCategory = (index: number): void => {
    categoryBtns.value = categoryBtns.value.map((btn, i) => ({
        ...btn,
        active: i === index ? !btn.active : false,
    }));

    const activeBtn = categoryBtns.value.find((btn, i) => btn.active === true)?.text ?? "";

    productStore.filterForm.category = activeBtn;
};
</script>

<template>
    <ul class="filter__category-list">
        <li class="filter__category-item" v-for="(btn, index) in categoryBtns" :key="index">
            <button
                class="filter__category-btn"
                type="button"
                :style="{
                    backgroundColor: btn.bg,
                    color: btn.color,
                    borderColor: btn.active ? btn.border : 'transparent',
                }"
                @click="changeCategory(index)">
                <span class="filter__category-btn-icon" :style="`background-image: url(${btn.icon})`"></span>
                {{ btn.text }}
            </button>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.filter__category-list {
    display: flex;
    gap: 12px;
}

.filter__category-item {
    transition: transform 0.25s ease;

    @include hover {
        transform: scale(1.05);
    }
}

.filter__category-btn {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border: solid 4px transparent;
    border-radius: 20px;
    color: #d69900;
    font-size: 12px;
    font-weight: 500;
    outline: none;
    transition: 0.15s ease border;
}

.filter__category-btn-icon {
    display: block;
    width: 35px;
    height: 35px;
    background: url("/images/catalog/pizza.svg") no-repeat center / contain;
}

@include tablet {
    .filter__category-btn {
        padding: 8px 12px;
        font-size: 8px;
    }

    .filter__category-btn-icon {
        width: 24px;
        height: 24px;
    }
}

@include mobile {
    .filter__category-btn {
        padding: 12px 14px;
        font-size: 10px;
    }

    .filter__category-btn-icon {
        width: 28px;
        height: 28px;
    }
}

@include mobile-small {
    .filter__category-list {
        gap: unset;
        justify-content: space-between;
    }
}
</style>
