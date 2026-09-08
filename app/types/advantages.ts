export interface Advantage {
    name: string;
    includes: {basic: boolean; premium: boolean};
}

export interface List {
    title: string;
    subtitle: string;
    price: string;
    grade: string;
    advantages: string[];
}
