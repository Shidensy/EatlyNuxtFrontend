export interface Stat {
    title: string;
    subtitle: string;
}

export interface Member {
    name: string;
    pos: string;
    gender: string;
}

export const stats: Stat[] = [
    {title: "10M+", subtitle: "Happy Customers"},
    {title: "500+", subtitle: "Partner Restaurants"},
    {title: "20 min", subtitle: "Average Delivery Time"},
];

export const members: Member[] = [
    {name: "Alexander Wright", pos: "Founder & CEO", gender: "male"},
    {name: "Sarah Jenkins", pos: "Chief Executive Chef", gender: "female"},
    {name: "Michael Chen", pos: "Head of Product & Engineering", gender: "male"},
    {name: "Emily Ross", pos: "Chief Marketing Officer", gender: "female"},
    {name: "Daniel Martinez", pos: "Head of Logistics & Supply", gender: "male"},
    {name: "Olivia Vance", pos: "Chief Financial Officer", gender: "female"},
];
