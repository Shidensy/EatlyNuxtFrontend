<script setup lang="ts">
import Ymap from "./Ymap.vue";
</script>

<template>
    <section class="map">
        <div class="container">
            <div class="map__wrapper">
                <ClientOnly>
                    <Ymap />

                    <template #fallback>
                        <MapFallback />
                    </template>
                </ClientOnly>

                <MapCard />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.map__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    height: 650px;
}

@include tablet {
    .map__wrapper {
        height: 500px;
        margin-bottom: 50px;
    }
}
</style>
