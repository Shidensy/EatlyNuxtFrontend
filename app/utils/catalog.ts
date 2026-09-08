import type {FilterItems} from "~/types/filter-items";
import type {CategoryBtn} from "~/types/category-btn";
import type {SortBtn} from "~/types/sort-btn";
import type {CatalogSlide} from "~/types/catalog-slide";
import {defineAsyncComponent} from "vue";

export const filterItems: FilterItems[] = [
    {title: "Category", component: defineAsyncComponent(() => import("~/components/catalog/FilterCategory.vue"))},
    {title: "Sort By", component: defineAsyncComponent(() => import("~/components/catalog/FilterSort.vue"))},
    {title: "Price", component: defineAsyncComponent(() => import("~/components/catalog/FilterPrice.vue"))},
];

export const categoryBtns = ref<CategoryBtn[]>([
    {icon: "/images/catalog/pizza.svg", text: "Pizza", bg: "rgba(255, 222, 138, 0.35)", color: "#d69900", border: "rgba(222, 188, 102, 0.5)", active: false},
    {icon: "/images/catalog/hotdog.svg", text: "Asian", bg: "rgba(247, 197, 186, 0.35)", color: "#FB471D", border: "rgba(251, 71, 29, 0.5)", active: false},
    {icon: "/images/catalog/donut.svg", text: "Donut", bg: "rgba(237, 182, 107, 0.35)", color: "#E28B14", border: "rgba(148, 109, 55, 0.5)", active: false},
    {icon: "/images/catalog/icecream.svg", text: "Ice", bg: "rgba(90, 133, 255, 0.35)", color: "#002073", border: "rgba(71, 110, 216, 0.5)", active: false},
]);

export const priceSteps: string[] = ["0", "25", "50", "100", "500", "1000"];

export const sortBtns = ref<SortBtn[]>([
    {text: "Recommended", active: false},
    {text: "Fast Delivery", active: false},
    {text: "Most Popular", active: false},
]);

export const slides: CatalogSlide[] = [
    {title: "GET 50%", text: "WEEKENDS", img: "/images/catalog/chicken-slide-bg.png", altText: "Chiken"},
    {title: "TRY NEW", text: "SALMON", img: "/images/catalog/salmon-slide-bg.png", altText: "Salmon"},
    {title: "BUY 1 GET 2", text: "BBQ RIBS", img: "/images/catalog/ribs-slide-bg.png", altText: "Ribs"},
];
