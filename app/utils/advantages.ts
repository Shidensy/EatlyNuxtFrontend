import type {Advantage} from "~/types/advantages";
import type {List} from "~/types/advantages";

export const advantages: Advantage[] = [
    {name: "Support 24/7", includes: {basic: true, premium: true}},
    {name: "Fast Delivery", includes: {basic: true, premium: true}},
    {name: "20% Off Food Deals", includes: {basic: true, premium: true}},
    {name: "Transaction History", includes: {basic: true, premium: true}},
    {name: "Weekend Deals", includes: {basic: false, premium: true}},
    {name: "Dashboard Access", includes: {basic: false, premium: true}},
    {name: "Premium Group Access", includes: {basic: false, premium: true}},
];

export const list: List[] = [
    {
        title: "Basic",
        subtitle: "Completely 100%<br>Free Plan",
        price: "0",
        grade: "free",
        advantages: ["Support 24/7", "Fast Delivery", "20% Off Food Deals", "Transaction History"],
    },
    {
        title: "Premium",
        subtitle: "Amazing Premium<br/>Features Plan",
        price: "5",
        grade: "premium",
        advantages: ["Support 24/7", "Fast Delivery", "20% Off Food Deals", "Transaction History", "Weekend Deals", "Dashboard Access", "Premium Group Access"],
    },
];
