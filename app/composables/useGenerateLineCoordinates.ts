import type {LngLat} from "@yandex/ymaps3-types";

export function useGenerateLineCoordinates(start: LngLat, end: LngLat, steps: number = 50): LngLat[] {
    const coordinates: LngLat[] = [];

    for (let i = 0; i <= steps; i++) {
        const t = i / steps;

        const lng = start[0] + (end[0] - start[0]) * t;
        const lat = start[1] + (end[1] - start[1]) * t;

        coordinates.push([lng, lat]);
    }
    return coordinates;
}
