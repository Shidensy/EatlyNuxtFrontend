import type {Attribute} from "./attribute";

export interface MacroNutrients {
    calories: number;
    proteins: number;
    fats: number;
    carbs: number;
}

export interface Product {
    id: number;
    name: string;
    desc: string;
    time: string;
    attribute: Attribute;
    rate: number;
    price: number;
    category: string;
    sort: string;
    image_url: string | undefined;

    macros_per_100g: MacroNutrients;
    macros_per_piece: MacroNutrients;
}

export interface ProductCartResponse {
    id: number;
    name: string;
    price: number;
    image_url: string | undefined;
}
