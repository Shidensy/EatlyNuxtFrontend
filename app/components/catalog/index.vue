<script setup lang="ts">
import {useProductStore} from "~/store/UseProductStore";

const productStore = useProductStore();

const isMobile = ref(false);
await productStore.getProducts();

const checkWidth = () => {
    isMobile.value = window.innerWidth < 768;
};

const show = ref(false);

const toggleShow = () => {
    show.value = !show.value;
};

onMounted(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkWidth);
});
</script>

<template>
    <section class="catalog">
        <div class="container">
            <BaseSectionTitle class="catalog__title visually-hidden">Find and Sort the Best Restaurants or Dishes</BaseSectionTitle>
            <div class="catalog__wrapper">
                <div class="catalog__main">
                    <CatalogSlider />

                    <div class="catalog__filter-mobile" id="mobile-target"></div>

                    <div class="catalog__actions">
                        <CatalogSearch />
                        <div class="catalog__btns">
                            <NuxtLink class="catalog__link" to="/products"
                                ><BaseDefaultBtn class="catalog__submit-btn" style="width: 100%; border-radius: 12px 0 0 12px">Food</BaseDefaultBtn></NuxtLink
                            >
                            <NuxtLink class="catalog__link" to="/restaurants"
                                ><BaseDefaultBtn class="catalog__submit-btn" style="width: 100%; border-radius: 0 12px 12px 0">Restaurant</BaseDefaultBtn></NuxtLink
                            >
                        </div>
                    </div>
                </div>
                <div class="catalog__aside" id="desktop-target">
                    <ClientOnly>
                        <Teleport to="#mobile-target" :disabled="!isMobile">
                            <CatalogFilter @showResults="toggleShow" />
                        </Teleport>
                    </ClientOnly>
                </div>
                <transition name="fade">
                    <div v-if="productStore.filteredResults.length && productStore.filteredResults.length > 0" class="catalog__products" id="id">
                        <DishesCard v-for="product in productStore.filteredResults" :key="product.id" :product="product" />
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.catalog__wrapper {
    display: grid;
    grid-template-columns: minmax(0, 2fr) 1fr;
    gap: 40px;
}

.catalog__main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 80px;

    &:nth-child(1) {
        gap: 50px;
    }
}

.catalog__filter-mobile {
    display: none;
}

.catalog__actions {
    display: flex;
    flex-direction: column;
    gap: 35px;
}

.catalog__btns {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: rgb(104, 92, 183);
    }
}

.catalog__products {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    justify-items: center;
    gap: 20px;
    width: 100%;
}

@include tablet {
    .catalog__wrapper {
        gap: 16px;
    }

    .catalog__actions {
        gap: 25px;
    }

    .catalog__products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }
}

@include tablet-small {
    .catalog__wrapper {
        display: block;
    }

    .catalog__main {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;
    }

    .catalog__filter-mobile {
        display: block;
    }

    .catalog__aside {
        display: none;
    }
}

@include mobile {
    .catalog__main {
        gap: 30px;
    }

    .catalog__submit-btn {
        padding: 16px 20px;
    }

    .catalog__products {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;

        & > :last-child {
            display: none;
        }
    }
}
</style>
