export const getProductPath = (id: number, name: string): string => {
    const slug = name.toLowerCase().replace(/\s+/g, "-");

    return `/products/${id}-${slug}`;
};
