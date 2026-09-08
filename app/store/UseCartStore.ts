import {defineStore} from "pinia";
import type {CartItem} from "~/types/cart";
import type {Product} from "~/types/product";

export const useCartStore = defineStore("cart", {
    state: () => ({
        item: {} as CartItem,
        items: [] as CartItem[],
        couponDiscount: 0,
        coupons: [
            {name: "minus20", discount: 20},
            {name: "minus10", discount: 10},
        ],
    }),

    getters: {
        // Total price for current product
        totalPrice: (state): number => {
            const total = state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
            return Math.round(total * 100) / 100;
        },

        // Delivery price
        getDelivery(): number {
            return Math.round(this.totalPrice * 0.0609 * 100) / 100;
        },

        // Total price without discount
        baseTotal(): number {
            return Math.round((this.totalPrice + this.getDelivery) * 100) / 100;
        },

        // Total price with discount
        getTotal(): number {
            const rawTotal = this.baseTotal - (this.baseTotal * this.couponDiscount) / 100;
            return Math.round(rawTotal * 100) / 100;
        },

        isInCart:
            (state) =>
            (productId: number): boolean => {
                return state.items.some((item) => item.product.id === productId);
            },
    },

    actions: {
        addProduct(product: Product, quantity = 1) {
            const existingItem = this.items.find((item) => item.product.id === product.id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                this.items.push({product, quantity});
            }
        },

        removeProduct(productId: number) {
            this.items = this.items.filter((item) => item.product.id !== productId);
        },

        updateQuantity(productId: number, quantity: number) {
            const item = this.items.find((item) => item.product.id === productId);
            if (item) {
                if (quantity <= 0) {
                    this.removeProduct(productId);
                } else {
                    item.quantity = quantity;
                }
            }
        },

        useCoupon(coupon: string): number {
            const foundCoupon = this.coupons.find((item) => item.name === coupon);

            this.couponDiscount = foundCoupon ? foundCoupon.discount : 0;

            return this.couponDiscount;
        },

        clearCart() {
            this.items = [] as CartItem[];
            this.couponDiscount = 0;
            this.item = {} as CartItem;
        },
    },
});
