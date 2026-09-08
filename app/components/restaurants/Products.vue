<script setup lang="ts">
import {useProductStore} from "~/store/UseProductStore";

const props = defineProps<{
    dishes?: boolean;
}>();

const productStore = useProductStore();

await productStore.getProducts();

const displayedRestaurants = computed(() => {
    return props.dishes ? productStore.products.slice(0, 3) : productStore.products;
});
</script>

<template>
    <section class="products">
        <div class="container">
            <div class="products__wrapper">
                <h2 class="products__title">
                    <slot></slot>
                </h2>

                <div class="products__row">
                    <DishesCard v-for="product in displayedRestaurants" :key="product.id" :product="product" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.products__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.products__title {
    text-align: left;
    color: #323142;
    font-size: 24px;
    font-weight: 600;
    line-height: 18px;
}

.products__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 100%;
}

@include tablet-small {
    .products__row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@include mobile {
    .products__row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;

        & > :last-child {
            display: none;
        }
    }
}
</style>
