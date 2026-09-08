<script setup lang="ts">
import {useProductStore} from "~/store/UseProductStore";

const route = useRoute();
const isMenuPage = computed(() => route.path === "/menu");

const productStore = useProductStore();

await productStore.getProducts();
</script>

<template>
    <section :class="['products', 'border', {'products--on-menu': isMenuPage}]">
        <div class="container">
            <div class="products__wrapper">
                <div class="products__header">
                    <BaseSectionTitle class="products__title">Our Top <span>Dishes</span></BaseSectionTitle>

                    <BaseViewAll class="products__view-all-top" :route="'/products'" />
                </div>

                <div class="section-products__row">
                    <DishesCard v-for="product in productStore.products" :key="product.id" :product="product" />
                </div>

                <BaseViewAll class="products__view-all-bottom" :route="'/products'" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.products--on-menu {
    .products__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .products__view-all-top {
        display: flex;
    }

    .products__view-all-bottom {
        display: none;
    }
}

.products__view-all-top {
    display: none;
}

.products__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.products__title {
    text-align: center;
}

.section-products__row {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    gap: 20px;
    width: 100%;
}

@include tablet {
    .section-products__row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@include mobile {
    .products__title {
        max-width: 200px;
    }

    .products--on-menu {
        .products__view-all-top {
            display: none;
        }

        .products__view-all-bottom {
            display: flex;
        }

        .products__header {
            width: unset;
        }
    }

    .section-products__row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;

        & > :last-child {
            display: none;
        }
    }
}
</style>
