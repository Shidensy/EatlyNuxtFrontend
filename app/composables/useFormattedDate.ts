export const useFormattedDate = (dateString: string | Date | undefined) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    const formatter = new Intl.DateTimeFormat("en-US", {
        day: "2-digit", // "15"
        month: "short", // "Dec"
        year: "numeric", // "2022"
    });

    // "Dec 15, 2022"
    const formatted = formatter.format(date);

    const [month, dayWithComma, year] = formatted.split(" ");
    const day = dayWithComma?.replace(",", "");

    return `${day} ${month?.toUpperCase()}, ${year}`;
};
