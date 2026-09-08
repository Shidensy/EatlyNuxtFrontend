<script setup>
import {ref, watch} from "vue";
import {storeToRefs} from "pinia";
import {useProductStore} from "~/store/UseProductStore";

const productStore = useProductStore();

const {searchResults} = storeToRefs(productStore);

const searchQuery = ref("");
const showDropdown = ref(false);
let debounceTimeout = null;

watch(searchQuery, (newQuery) => {
    clearTimeout(debounceTimeout);

    if (!newQuery.trim()) {
        productStore.searchResults = [];
        showDropdown.value = false;
        return;
    }

    showDropdown.value = true;
    debounceTimeout = setTimeout(() => {
        productStore.searchProductsSuggestions(newQuery);
    }, 300);
});

const onEnter = () => {
    if (searchResults.value && searchResults.value.length > 0) {
        const firstProduct = searchResults.value[0];
        navigateTo(getProductPath(firstProduct.id, firstProduct.name));
    }
};
</script>

<template>
    <div class="search">
        <input
            class="search__input"
            v-model="searchQuery"
            type="text"
            placeholder="Search"
            @blur="showDropdown = false"
            @focus="searchQuery && (showDropdown = true)"
            @keydown.enter.prevent="onEnter" />
        <transition name="fade">
            <ul class="search-dropdown" v-if="showDropdown && searchResults.length > 0">
                <li class="search-item" v-for="item in searchResults" :key="item.id">
                    <NuxtLink class="search-item__link" style="width: 100%" :to="getProductPath(item.id, item.name)">
                        <div class="search-item__info">
                            <span class="search-item__name">{{ item.name }}</span>
                            <span class="search-item__price">{{ item.price }} $</span>
                        </div>
                    </NuxtLink>
                </li>
            </ul>
        </transition>
    </div>
</template>

<style scoped lang="scss">
.search {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translateY(-50%);
        width: 36px;
        height: 36px;
        background: url("~/assets/icons/search.svg") no-repeat center / contain;
        cursor: pointer;
    }
}

.search__input {
    width: 100%;
    padding: 25px 25px 25px 90px;
    border-radius: 20px;
    background-color: #ededed;
    color: #aaabba;
    font-size: 20px;
    font-weight: 500;
    line-height: 117.5%;
    letter-spacing: -0.5px;
}

// Dropdown
.search-dropdown {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    max-height: 280px;
    overflow-y: auto;
    z-index: 999;
    padding: 6px 0;
    list-style: none;
    margin: 0;

    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
        background: transparent;
    }
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.search-item {
    padding: 10px 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.search-item:hover {
    background-color: #f1f5f9;
}

.search-item__info {
    display: flex;
    flex-direction: column;
}

.search-item__name {
    font-weight: 600;
    font-size: 16px;
    line-height: 160%;
    color: #323142;
}

.search-item__price {
    font-size: 12px;
    color: #323142;
    font-family: $font-manrope;
    font-weight: 700;
    line-height: 120%;
}

@include tablet {
    .search::before {
        width: 24px;
        height: 24px;
    }

    .search__input {
        padding: 18px 18px 18px 60px;
        font-size: 14px;
    }
}

@include mobile {
    .search::before {
        width: 20px;
        height: 20px;
    }

    .search__input {
        padding: 20px 20px 20px 60px;
        font-size: 12px;
    }
}
</style>
