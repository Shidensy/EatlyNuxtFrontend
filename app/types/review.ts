export interface Review {
    id: number;
    author: string;
    years: number;
    avatar: string | undefined;
    rate: number;
    text: string;
}
