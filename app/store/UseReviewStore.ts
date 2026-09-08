import {defineStore} from "pinia";
import type {Review} from "~/types/review";

export const useReviewStore = defineStore("review", {
    state: () => ({
        reviews: [] as Review[],
    }),
    getters: {
        // doubleCount: (state) => state.count * 2,
    },
    actions: {
        async getReviews() {
            try {
                const config = useRuntimeConfig();
                this.reviews = await $fetch<Review[]>(`${config.apiBase}/reviews/`);
            } catch (err: any) {
                console.log(err);
            }
        },
    },
});
