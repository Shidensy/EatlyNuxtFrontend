<script setup lang="ts">
import {useRoute} from "vue-router";
import {useProductStore} from "~/store/UseProductStore";

const route = useRoute();
const productStore = useProductStore();
const {product} = storeToRefs(productStore);

await productStore.getProduct(parseInt(String(route.params.id), 10));
</script>

<template>
    <section class="product">
        <div class="container">
            <div class="product__wrapper">
                <NuxtImg class="product__image" :src="product.image_url || '/images/dishes/Chicken_Hell.webp'" :alt="product.name" format="webp" />
                <div class="product__content">
                    <div class="product__header">
                        <BaseSectionTitle class="product__title" style="opacity: 0.9; margin-bottom: 20px">{{ product.name }}<DishesHeart class="heart" /></BaseSectionTitle>

                        <p class="product__desc">{{ product.desc }}</p>
                    </div>

                    <table class="nutrition-table">
                        <caption class="nutrition-table__caption visually-hidden">
                            Nutrition facts for
                            {{
                                product.name
                            }}
                        </caption>

                        <thead class="nutrition-table__head">
                            <tr class="nutrition-table__row">
                                <th class="nutrition-table__th-col" scope="col"></th>
                                <th class="nutrition-table__th-col" scope="col">Per 100g</th>
                                <th class="nutrition-table__th-col" scope="col">Per Serving</th>
                            </tr>
                        </thead>

                        <tbody class="nutrition-table__body">
                            <tr class="nutrition-table__row">
                                <th class="nutrition-table__th-row" scope="row">Proteins</th>
                                <td class="nutrition-table__data">{{ product.macros_per_100g.proteins }}g</td>
                                <td class="nutrition-table__data">{{ product.macros_per_piece.proteins }}g</td>
                            </tr>
                            <tr class="nutrition-table__row">
                                <th class="nutrition-table__th-row" scope="row">Fats</th>
                                <td class="nutrition-table__data">{{ product.macros_per_100g.fats }}g</td>
                                <td class="nutrition-table__data">{{ product.macros_per_piece.fats }}g</td>
                            </tr>
                            <tr class="nutrition-table__row">
                                <th class="nutrition-table__th-row" scope="row">Carbs</th>
                                <td class="nutrition-table__data">{{ product.macros_per_100g.carbs }}g</td>
                                <td class="nutrition-table__data">{{ product.macros_per_piece.carbs }}g</td>
                            </tr>
                            <tr class="nutrition-table__row">
                                <th class="nutrition-table__th-row" scope="row">Calories</th>
                                <td class="nutrition-table__data">{{ product.macros_per_100g.calories }} kcal</td>
                                <td class="nutrition-table__data">{{ product.macros_per_piece.calories }} kcal</td>
                            </tr>
                        </tbody>
                    </table>

                    <BaseDefaultBtn class="product__btn" style="width: 100%">Add To Cart</BaseDefaultBtn>
                </div>
            </div>
        </div>
    </section>
    <RestaurantsProducts>More like this 🙌</RestaurantsProducts>
</template>

<style scoped lang="scss">
.product__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
    gap: 50px;
    padding: 24px 32px;
    border-radius: 30px;
    border: 1px solid #f4f4f6;
    background: #fff;
    box-shadow: 5px 20px 35px 0 rgba(229, 229, 229, 0.9);
}

.product__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
}

.product__title {
    position: relative;

    .heart {
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        transform: translateY(-50%);

        transition: color 0.2s ease;

        @include hover {
            color: red;
        }
    }
}

.product__desc {
    margin-bottom: 40px;
    color: #676767;
    text-align: justify;
    font-family: $font-inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
}

.nutrition-table {
    text-align: left;
}

.nutrition-table__th-col,
.nutrition-table__th-row {
    font-size: 24px;
    font-weight: 600;
    font-family: $font-inter;
    letter-spacing: 1.5;
    line-height: 150%;
    opacity: 0.9;
    color: #676767;
}

.nutrition-table__data {
    color: #8d84c5;
    font-family: $font-inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 15px;
}

@include tablet {
    .product__wrapper {
        gap: 30px;
        padding: 18px 28px;
    }

    .product__image {
        max-width: 400px;
        margin: 0 auto;
    }

    .product__content {
        gap: 20px;
    }

    .product__desc {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 20px;
    }

    .nutrition-table__th-col,
    .nutrition-table__th-row {
        font-size: 18px;
    }

    .nutrition-table__data {
        font-size: 16px;
    }
}

@include tablet-small {
    .product__wrapper {
        display: grid;
        grid-template-columns: 1fr;
        padding: 18px 12px;
    }

    .product__desc {
        margin-bottom: 15px;
    }
}

@include mobile {
    .product__desc {
        font-size: 14px;
    }

    .nutrition-table__th-col,
    .nutrition-table__th-row {
        font-size: 14px;
    }

    .nutrition-table__data {
        font-size: 12px;
    }
}
</style>
