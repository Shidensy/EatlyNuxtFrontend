import type {LngLat} from "@yandex/ymaps3-types";

export const fetchGeoObject = async (coordinates: LngLat) => {
    try {
        const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=146f7156-7ed1-461b-8cdd-bebdeaf0a0de&format=json&lang=ru_RU&geocode=${coordinates[0]},${coordinates[1]}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const foundGeoObject = data.response.GeoObjectCollection.featureMember[0]?.GeoObject;

        if (!foundGeoObject) {
            throw new Error("GeoObject not found");
        }

        return foundGeoObject.metaDataProperty.GeocoderMetaData.Address.formatted;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
