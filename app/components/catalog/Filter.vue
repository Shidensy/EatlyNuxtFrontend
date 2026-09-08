<script setup>
import {useProductStore} from "~/store/UseProductStore";

const emit = defineEmits(["showResults"]);
const productStore = useProductStore();
const applyFilters = () => {
    productStore.getProducts(true);
    emit("showResults");
};
</script>

<template>
    <div class="filter">
        <ul class="filter__list">
            <li class="filter__item" v-for="(item, index) in filterItems" :key="index">
                <div class="filter__item-title">{{ item.title }}</div>
                <component :is="item.component" />
            </li>

            <li class="filter__action">
                <BaseDefaultBtn class="filter__submit-btn" style="width: 100%" @click="applyFilters">Apply</BaseDefaultBtn>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.filter {
    position: relative;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 6px 10px 28px 1px rgba(108, 95, 188, 0.1);
}

.filter__list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.filter__item-title {
    margin-bottom: 20px;
    color: #323142;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
}

.filter__reset-btn {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    font-size: 16px;
    width: 100%;
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;

    transition: color 0.2s ease;

    span {
        color: #6c5fbc;

        @include hover {
            color: #553cf5;
        }
    }
}

@include tablet {
    .filter {
        padding: 20px;
    }

    .filter__list {
        gap: 20px;
    }

    .filter__item-title {
        margin-bottom: 12px;
        font-size: 15px;
        line-height: 20px;
    }
}

@include mobile {
    .filter__submit-btn {
        padding: 16px 20px;
    }

    .filter {
        padding: 20px 12px;
    }

    .filter__list {
        gap: 25px;
    }

    .filter__item-title {
        margin-bottom: 18px;
        font-size: 18px;
        line-height: 24px;
    }
}
</style>
