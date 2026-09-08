<script setup>
const showHint = ref(true);
const mapContainer = ref(null);
const mapInstance = shallowRef(null);
const lineInstance = shallowRef(null);
let userMarker = null;
let storeMarker = null;

const userMarkerCoordinates = ref();
const userAddress = ref("");

watch(userAddress, (newAddress) => {
    if (newAddress) {
        updateMarkers();
        showHint.value = false;
    } else {
        showHint.value = true;
    }
});

const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
        const {latitude, longitude} = position.coords;

        userMarkerCoordinates.value = [longitude, latitude];

        userAddress.value = await fetchGeoObject([longitude, latitude]);
        mapInstance.value.update({
            location: {
                center: userMarkerCoordinates.value,
                zoom: 16,
            },
            camera: {
                azimuth: 10 * (Math.PI / 180),
                tilt: 60 * (Math.PI / 180),
                duration: 1000,
            },
        });

        updateMarkers();
    });
};

const updateMarkers = () => {
    const address = document.querySelector(".user__address");
    address.innerText = userAddress.value;

    userMarker.update({coordinates: userMarkerCoordinates.value});
    storeMarker.update({coordinates: [userMarkerCoordinates.value[0] - 0.0055, userMarkerCoordinates.value[1] + 0.005]});

    const newCoordinates = useGenerateLineCoordinates(userMarkerCoordinates.value, [userMarkerCoordinates.value[0] - 0.0035, userMarkerCoordinates.value[1] + 0.0035]);

    lineInstance.value.update({
        geometry: {
            type: "LineString",
            coordinates: newCoordinates,
        },
    });
};

onMounted(async () => {
    if (typeof window !== "undefined" && window.ymaps3) {
        await window.ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker, YMapFeature} = window.ymaps3;

        const schemeLayer = new YMapDefaultSchemeLayer({customization: styles});
        const featuresLayer = new YMapDefaultFeaturesLayer({});

        mapInstance.value = new YMap(
            mapContainer.value,
            {
                location: {
                    center: [37.588144, 55.733842],
                    zoom: 16,
                },
                camera: {
                    azimuth: 100 * (Math.PI / 180),
                    tilt: 60 * (Math.PI / 180),
                },
                behaviors: [],
            },
            [schemeLayer, featuresLayer],
        );

        const lineFeature = new YMapFeature({
            geometry: {
                type: "LineString",
                coordinates: useGenerateLineCoordinates([37.590944, 55.7345342], [37.581744, 55.731742]),
            },
            style: {
                stroke: [{color: "#000", width: 3}],
            },
        });

        lineInstance.value = lineFeature;

        mapInstance.value.addChild(lineFeature);

        const userElement = document.createElement("div");
        userElement.className = "user";
        userElement.innerHTML = `
            <span class="user__address">Horizenal Road Stree 1178 California, USA</span>
            <svg class="user__icon" width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8242 18.3796C10.8242 14.4984 13.9705 11.3521 17.8517 11.3521C21.7329 11.3521 24.8792 14.4984 24.8792 18.3796C24.8792 22.2608 21.7329 25.4071 17.8517 25.4071C13.9705 25.4071 10.8242 22.2608 10.8242 18.3796Z" fill="#323142"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0635764 15.9522C0.806628 6.93764 8.33965 0 17.3848 0H18.3187C27.3638 0 34.8969 6.93764 35.6399 15.9522C36.04 20.8057 34.5408 25.625 31.458 29.3951L21.094 42.07C19.4183 44.1194 16.2852 44.1194 14.6095 42.07L4.24544 29.3951C1.16273 25.625 -0.336489 20.8057 0.0635764 15.9522ZM17.8517 8.10864C12.1792 8.10864 7.58074 12.7071 7.58074 18.3796C7.58074 24.0521 12.1792 28.6505 17.8517 28.6505C23.5242 28.6505 28.1226 24.0521 28.1226 18.3796C28.1226 12.7071 23.5242 8.10864 17.8517 8.10864Z" fill="#323142"/>
            </svg>
        `;

        userMarker = new YMapMarker(
            {
                coordinates: [37.590944, 55.7340342],
            },
            userElement,
        );

        mapInstance.value.addChild(userMarker);

        const storeElement = document.createElement("div");
        storeElement.className = "store";
        storeElement.innerHTML = `
            <img class="store__img" src="/images/dishes/Chicken_Hell.webp" alt="chiken-hell" />
            <div class="product">
                <span class="product__name">Chicken Hell</span>
                <span class="product__time">15 Minutes</span>
            </div>
        `;

        storeMarker = new YMapMarker(
            {
                coordinates: [37.581144, 55.730942],
            },
            storeElement,
        );

        mapInstance.value.addChild(storeMarker);
    }

    getUserLocation();
});
</script>

<template>
    <div class="mapContainer" ref="mapContainer" style="width: 100%; height: 600px"></div>
    <div class="hint" v-show="showHint">This is just a placeholder, If you want to see the route from your current location, please grant access to your location.</div>
</template>

<style scoped lang="scss">
.hint {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(calc(100% + 10px));
    font-size: 12px;
    text-transform: capitalize;
}

:deep(.user) {
    position: relative;
    width: 190px;
    padding: 15px 20px;
    color: #acadb9;
    font-size: 10px;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
}

:deep(.user__icon) {
    position: absolute;
    top: -35px;
    left: 50%;
    width: 35px;
    height: 45px;
    transform: translateX(-50%);
}

:deep(.store) {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 150px;
    padding: 10px 2px;
    border-radius: 8px;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 20px 40px 70px 0px rgba(50, 49, 66, 0.25);
}

:deep(.store__img) {
    width: 45px;
}

:deep(.product) {
    display: flex;
    flex-direction: column;
}

:deep(.product__name) {
    color: #323142;
    font-size: 12px;
    font-weight: 600;
    line-height: 140%;
}

:deep(.product__time) {
    color: #acadb9;
    font-size: 8px;
    font-weight: 500;
    line-height: 140%;
}

:deep(.ymaps3--control-button) {
    display: none;
}

:deep(.ymaps3--map-copyrights) {
    display: none;
}

:deep(svg) {
    max-width: none;
    height: initial;
}

@include tablet {
    .mapContainer {
        overflow-y: hidden;
    }

    .hint {
        right: 0;
        transform: translateY(10px);
        font-size: 8px;
        text-align: center;
    }

    :deep(.user) {
        width: 120px;
        padding: 10px 12px;
        font-size: 6px;
    }

    :deep(.user__icon) {
        top: -20px;
        left: 50%;
        width: 20px;
        height: 25px;
    }

    :deep(.store) {
        gap: 6px;
        min-width: 120px;
        padding: 5px;
        border-radius: 8px;
    }

    :deep(.store__img) {
        width: 30px;
    }

    :deep(.product__name) {
        font-size: 8px;
    }

    :deep(.product__time) {
        font-size: 6px;
    }
}
</style>
