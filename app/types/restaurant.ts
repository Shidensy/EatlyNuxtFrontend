import type {Attribute} from "./attribute";

export interface Restaurant {
    name: string;
}

export interface RestaurantResponse extends Restaurant {
    id: number;

    time: string;
    attribute: Attribute;
    rate: number;
    image_url: string | undefined;
}
