import type {PurchaseItem, StatItem} from "~/types/purchases";

export const purchaseItems: PurchaseItem[] = [
    {
        id: 1,
        title: "Chicken Hell",
        status: "On The Way",
        time: "3.09 PM",
        imgSrc: "/images/dishes/Chicken_Hell.webp",
    },
    {
        id: 2,
        title: "Swe Dish",
        status: "Delivered",
        time: "Yesterday",
        imgSrc: "/images/dishes/Swe_Dish.webp",
    },
    {
        id: 3,
        title: "Fish Hell Veg",
        status: "Cancelled",
        time: "Yesterday",
        imgSrc: "/images/dishes/Salmon_Bite.webp",
        statusColor: "#f1534e",
    },
];

export const statItems: StatItem[] = [
    {
        id: 1,
        title: "Expense",
        trend: "Increased By 10%",
        amount: "$409.00",
        imgSrc: "/images/purchases/expense.png",
        modifierClass: "elem--first",
    },
    {
        id: 2,
        title: "Voucher Usage",
        trend: "Increased By 5%",
        amount: "$45.78",
        imgSrc: "/images/purchases/voucher.png",
        modifierClass: "elem--second",
    },
];
