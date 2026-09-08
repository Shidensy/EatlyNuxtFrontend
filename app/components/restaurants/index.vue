<script setup lang="ts">
import {useRestaurantStore} from "~/store/UseRestaurantStore";

const route = useRoute();

const isMenuPage = computed(() => route.path === "/menu");
const isRestaurantsPage = computed(() => route.path === "/restaurants");

const restaurantStore = useRestaurantStore();

await restaurantStore.getRestaurants();

const displayedRestaurants = computed(() => {
    return isRestaurantsPage.value ? restaurantStore.restaurants : restaurantStore.restaurants.slice(0, 3);
});
</script>

<template>
    <section :class="['restaurants', 'border', {'restaurants--on-menu': isMenuPage}]">
        <div class="container">
            <div class="restaurants__wrapper">
                <div class="restaurants__header">
                    <BaseSectionTitle class="restaurants__title" v-if="!isRestaurantsPage">Our Top <span>Restaurants</span></BaseSectionTitle>
                    <BaseSectionTitle class="restaurants__title" v-else>Our <span>Restaurants</span></BaseSectionTitle>

                    <BaseViewAll class="restaurants__view-all-top" v-if="!isRestaurantsPage" :route="'/restaurants'" />
                </div>

                <ul :class="[isRestaurantsPage ? 'restaurants__list restaurants__list--2-col' : 'restaurants__list']">
                    <li class="restaurants__list-item item" v-for="restaurant in displayedRestaurants" :key="restaurant.id">
                        <RestaurantsCard :restaurant="restaurant" />
                    </li>
                </ul>
                <BaseViewAll class="restaurants__view-all-bottom" v-if="!isRestaurantsPage" :route="'/restaurants'" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.restaurants--on-menu {
    .restaurants__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .restaurants__view-all-top {
        display: flex;
    }

    .restaurants__view-all-bottom {
        display: none;
    }
}

.restaurants__title {
    text-align: center;
}

.restaurants__view-all-top {
    display: none;
}

.restaurants__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.restaurants__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    &--2-col {
        grid-template-columns: repeat(2, 1fr);
    }
}

@include tablet-small {
    .restaurants__wrapper {
        gap: 30px;
    }

    .restaurants__list {
        justify-items: center;
        grid-template-columns: 1fr;
    }
}

@include mobile {
    .restaurants__wrapper {
        align-items: center;
    }

    .restaurants__title {
        max-width: 200px;
    }

    .restaurants--on-menu {
        .restaurants__view-all-top {
            display: none;
        }

        .restaurants__view-all-bottom {
            display: flex;
        }
    }
}
</style>
