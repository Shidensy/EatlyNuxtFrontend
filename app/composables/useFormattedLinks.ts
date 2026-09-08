import {computed, toValue, type MaybeRefOrGetter} from "vue";

export const useFormattedLinks = (links: MaybeRefOrGetter<string[]>) => {
    const formattedLinks = computed(() => {
        const linksArray = toValue(links);

        return linksArray.map((link) => {
            const capitalized = link.charAt(0).toUpperCase() + link.slice(1);

            const formatted = capitalized.replace(/-([a-z])/gi, (_, letter) => ` ${letter.toUpperCase()}`);

            return {
                raw: link,
                formatted: formatted,
            };
        });
    });

    return {
        formattedLinks,
    };
};
