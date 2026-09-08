export interface PurchaseItem {
    id: number;
    title: string;
    status: string;
    time: string;
    imgSrc: string;
    statusColor?: string;
}

export interface StatItem {
    id: number;
    title: string;
    trend: string;
    amount: string;
    imgSrc: string;
    modifierClass: string;
}
