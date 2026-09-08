<script setup lang="ts">
import type {Stat} from "~/utils/about.ts";

defineProps<{
    features?: Stat[];
}>();
</script>

<template>
    <section class="features">
        <div class="features__wrapper">
            <ul class="features__list">
                <li class="features__item feature-card" v-for="(feature, index) in features" :key="index">
                    <strong class="feature-card__title">{{ feature.title }}</strong>
                    <p class="feature-card__subtitle">
                        {{ feature.subtitle }}
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped lang="scss">
.features__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 35px 0;
    background-image: url("/images/features/features-bg.webp");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.features__list {
    display: flex;
    align-items: center;
    justify-content: center;
}

.feature-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 60px;
    border-right: 1px solid rgba(197, 197, 197, 0.15);

    &:last-child {
        border-right: none;
    }
}

.feature-card__title {
    display: block;
    color: #fff;
    text-align: center;
    font-family: $font-publicSans;
    font-size: 42px;
    font-weight: 700;
    line-height: 55px;
}

.feature-card__subtitle {
    max-width: 200px;
    color: #c5bfed;
    text-align: center;
    font-family: $font-inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    white-space: pre-line;
}

@include tablet {
    .feature-card {
        gap: 5px;
        padding: 0 40px;
    }

    .feature-card__title {
        font-size: 30px;
        line-height: 40px;
    }

    .feature-card__subtitle {
        max-width: 180px;
        font-size: 10px;
        line-height: 15px;
    }
}

@include tablet-small {
    .feature-card {
        padding: 0 30px;
    }

    .feature-card__title {
        font-size: 24px;
        line-height: 30px;
    }
}

@include mobile {
    .features__wrapper {
        background-image: url("/images/features/features-bg-mobile.webp");
    }

    .features__list {
        flex-direction: column;
    }

    .feature-card {
        gap: 10px;
        width: 100%;
        max-width: 250px;
        padding: 50px 0px;
        border-right: none;
        border-bottom: 1px solid rgba(197, 197, 197, 0.15);

        &:last-child {
            border-bottom: none;
        }
    }

    .feature-card__title {
        font-size: 40px;
        line-height: 50px;
    }

    .feature-card__subtitle {
        max-width: unset;
        font-size: 14px;
        line-height: 20px;
    }
}
</style>
