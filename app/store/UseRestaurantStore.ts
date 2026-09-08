import {defineStore} from "pinia";
import type {RestaurantResponse} from "~/types/restaurant";

export const useRestaurantStore = defineStore("restaurant", {
    state: () => ({
        restaurants: [] as RestaurantResponse[],
        restaurant: null as RestaurantResponse | null,
    }),
    getters: {},
    actions: {
        async getRestaurants() {
            try {
                const config = useRuntimeConfig();
                this.restaurants = await $fetch<RestaurantResponse[]>(`${config.apiBase}/restaurants/`);
            } catch (err: any) {
                console.log(err);
            }
        },

        async getRestaurant(id: number) {
            try {
                const config = useRuntimeConfig();
                this.restaurant = await $fetch<RestaurantResponse>(`${config.apiBase}/restaurants/${id}`);
            } catch (err: any) {
                console.log(err);
            }
        },
    },
});
