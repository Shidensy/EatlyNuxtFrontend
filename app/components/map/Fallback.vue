<template>
    <div class="another-map">
        <NuxtImg class="another-map__image" src="/images/map/map-bg.png" alt="Map" format="webp" />
        <p class="another-map__hint">You see this placeholder because you haven't granted access to your location. Grant permission and refresh the page.</p>
    </div>
</template>
<style scoped lang="scss">
.another-map {
    position: relative;
    width: 100%;
    height: 600px;
    color: #323142;
    font-size: 10px;
    font-weight: 600;
    line-height: 140%;

    &__image {
        width: 100%;
    }

    &__hint {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
    }
}

@include tablet-small {
    .another-map {
        font-size: 8px;
    }
}
</style>
