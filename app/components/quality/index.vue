<script setup lang="ts">
import ArrowRight from "~/assets/icons/arrowRight.svg";
import ArrowDecor from "~/assets/icons/arrowDecor.svg";
import Dot from "~/assets/icons/dot.svg";
</script>

<template>
    <section class="quality border">
        <div class="container">
            <div class="quality__wrapper">
                <NuxtImg class="quality__img" src="/images/quality/mobile.png" format="webp" width="300" alt="Premium Quality Mobile Preview" />

                <div class="quality__content">
                    <BaseSectionTitle class="quality__title">Premium <span>Quality</span><br />For Your Health</BaseSectionTitle>
                    <ul class="advantages">
                        <li class="advantages__item"><Dot class="dot" />Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                        <li class="advantages__item"><Dot class="dot" />These foods promote overall wellness by supporting healthy digestion and boosting immunity</li>
                    </ul>
                    <div class="quality__btn-wrapper">
                        <BaseDefaultLink to="/sign-in" class="quality__btn">Download<ArrowRight class="arrow-right" /></BaseDefaultLink>
                        <ArrowDecor class="arrow" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.quality__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
}

.quality__img {
    width: 100%;
    max-width: 300px;
    justify-self: center;
}

.quality__content {
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 490px;
}

.advantages {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.advantages__item {
    display: flex;
    gap: 10px;
    align-items: start;
    color: #676767;
    font-family: $font-inter;
    font-size: 20px;
    line-height: 30px;
}

.dot {
    flex-shrink: 0;
    width: 24px;
    height: auto;
    margin-top: 5px;
}

.quality__btn-wrapper {
    position: relative;
}

.quality__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.arrow {
    position: absolute;
    top: 65%;
    left: 30%;
    pointer-events: none;
}

@include tablet {
    .quality__content {
        justify-content: center;
        gap: 40px;
    }

    .advantages {
        gap: 20px;
    }

    .advantages__item {
        max-width: 370px;
        font-size: 14px;
        line-height: 21px;
    }

    .arrow {
        transform: scale(0.8);
        left: 20%;
    }

    .quality__img {
        max-width: 260px;
    }
}

@include tablet-small {
    .quality__content {
        gap: 30px;
    }

    .advantages {
        gap: 15px;
    }

    .advantages__item {
        gap: 0px;
        font-size: 12px;
        line-height: 18px;
    }

    .arrow-right {
        transform: scale(0.7);
    }
}

@include mobile {
    .quality__wrapper {
        grid-template-columns: 1fr;
        gap: 20px;
        // border: none;
    }

    .quality__content {
        align-items: center;
        margin: 0 auto;
        padding-bottom: 80px;
    }

    .quality__btn-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .arrow {
        top: 125%;
        left: 3%;
        transform: rotate(105deg) scale(0.7);
    }

    .advantages {
        padding: 0 20px;
    }

    .quality__img {
        padding-left: 40px;
        order: 2;
    }

    .quality__title {
        text-align: center;
    }

    .arrow-right {
        transform: scale(0.5);
    }

    .quality__btn {
        gap: 8px;
    }
}

@include mobile-small {
    .arrow {
        left: -10%;
    }
}
</style>
