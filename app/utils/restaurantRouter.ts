export const getRestaurantPath = (id: number, name: string): string => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    return `/restaurants/${id}-${slug}`;
};
