<script setup lang="ts">
import ArrowDecorWhite from "~/assets/icons/arrowDecorWhite.svg";
import Decor from "~/assets/icons/decor.svg";
import DecorWhite from "~/assets/icons/decorWhite.svg";
</script>

<template>
    <section class="pricing">
        <div class="container">
            <div class="pricing__header">
                <div class="pricing__title-wrapper">
                    <ArrowDecorWhite class="pricing__arrow" />
                    <BaseSectionTitle class="pricing__title">Our Pricing</BaseSectionTitle>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="pricing__content">
                <div class="pricing__image-box">
                    <DecorWhite class="pricing__decor pricing__decor--top-right" />

                    <NuxtImg class="pricing__img" src="/images/pricing/pricing.png" format="webp" alt="Dashboard preview" width="875" height="630" />

                    <Decor class="pricing__decor pricing__decor--bottom-left" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.pricing {
    width: 100%;
}

.pricing__header {
    width: 100%;
    background-color: #5c4eae;
    padding: 40px 0 230px;
}

.pricing__title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    text-align: center;
    color: #f9f9f9;
}

.pricing__title {
    color: #f9f9f9;
}

.pricing__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.pricing__image-box {
    position: relative;
    margin-top: -190px;
    z-index: 2;
    width: 100%;
    max-width: 875px;
    box-shadow: 8px 20px 100px 0 rgba(0, 0, 0, 0.1);
}

.pricing__img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
}

.pricing__decor {
    position: absolute;
    width: 48px;
    height: 48px;
    pointer-events: none;

    &--bottom-left {
        left: -48px;
        bottom: -48px;
        transform: rotate(180deg);
    }

    &--top-right {
        right: -48px;
        top: -48px;
    }
}

@include tablet {
    .pricing__decor {
        display: none;
    }
}

@include tablet-small {
    .pricing__header {
        padding: 20px 0 100px;
    }

    .pricing__image-box {
        margin: -80px 0 0 35%;
    }

    .pricing__img {
        width: 420px;
        height: 300px;
    }

    .pricing__arrow {
        transform: scale(0.7);
    }

    .pricing__decor--bottom-left {
        display: block;
        left: -40px;
        bottom: -40px;
        transform: rotate(-180deg) scale(0.5);
    }
}
</style>
