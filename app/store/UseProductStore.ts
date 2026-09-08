import {defineStore} from "pinia";
import type {Product} from "~/types/product";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [] as Product[],
        product: {} as Product,
        searchResults: [] as Product[],
        filteredResults: [] as Product[],
        filterForm: {category: "", min_price: 0, sort: ""},
        isEmpty: false,
    }),
    getters: {},
    actions: {
        async getProducts(useFilter?: boolean) {
            try {
                const config = useRuntimeConfig();
                const fetchOptions: any = {};

                if (useFilter) {
                    fetchOptions.query = {...this.filterForm};
                }

                const response = await $fetch<Product[]>(`${config.public.apiBase}/products/`, fetchOptions);

                if (useFilter) {
                    this.filteredResults = response;
                    if (this.filteredResults.length == 0) {
                        this.isEmpty = true;
                    } else {
                        this.isEmpty = false;
                    }
                } else {
                    this.products = response;
                }
            } catch (err: any) {
                console.log(err);
            }
        },
        async getProduct(id: number) {
            try {
                const config = useRuntimeConfig();
                this.product = await $fetch<Product>(`${config.apiBase}/products/${id}`);
            } catch (err: any) {
                console.log(err);
            }
        },
        async searchProductsSuggestions(queryText: string) {
            if (!queryText.trim()) {
                this.searchResults = [];
                return;
            }
            try {
                const config = useRuntimeConfig();
                this.searchResults = await $fetch<Product[]>(`${config.apiBase}/products/`, {
                    query: {q: queryText, limit: 5},
                });
            } catch (err: any) {
                console.log(err);
            }
        },
    },
});
