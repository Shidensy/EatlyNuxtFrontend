import type {ProductCartResponse} from "./product";

export interface CartItem {
    product: ProductCartResponse;
    quantity: number;
}
