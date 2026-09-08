<script setup lang="ts">
import Tick from "~/assets/icons/tick.svg";
import Cross from "~/assets/icons/cross.svg";
</script>

<template>
    <section class="tariff">
        <div class="container">
            <div class="grid">
                <div class="grid__row">
                    <div class="grid__row-content">
                        <h3 class="grid__row-title grid__row-title--medium">Pricing</h3>
                        <span class="grid__row-subtitle">
                            Affordable Basic<br />
                            & Pro Plans
                        </span>
                    </div>
                    <div class="grid__row-content">
                        <h3 class="grid__row-title">Basic</h3>
                        <span class="grid__row-subtitle">
                            Completely 100%<br />
                            Free Plan
                        </span>
                    </div>
                    <div class="grid__row-content">
                        <h3 class="grid__row-title">Premium</h3>
                        <span class="grid__row-subtitle">
                            Amazing Premium<br />
                            Features Plan
                        </span>
                    </div>
                </div>
                <div class="grid__row">
                    <div></div>
                    <div class="grid__row-content grid__row-content--inline">
                        <h3 class="grid__row-title grid__row-title--large"><span>$</span>0</h3>
                        <span class="grid__row-subtitle">/month</span>
                    </div>
                    <div class="grid__row-content grid__row-content--inline">
                        <h3 class="grid__row-title grid__row-title--large"><span>$</span>5</h3>
                        <span class="grid__row-subtitle">/month</span>
                    </div>
                </div>
                <div class="grid__row">
                    <div class="grid__row-title grid__row-title--small">Core Features</div>
                    <div class="includes">
                        <div class="includes__item" v-for="advantage in advantages" :key="advantage.name">
                            <span class="includes__advantage">{{ advantage.name }}</span>
                            <div class="includes__icon">
                                <Tick class="tick" v-if="advantage.includes.basic" />
                                <Cross class="cross" v-else />
                            </div>
                            <div class="includes__icon">
                                <Tick class="tick" v-if="advantage.includes.premium" />
                                <Cross class="cross" v-else />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid__row">
                    <div></div>
                    <NuxtLink to="/login"><BaseDefaultBtn>START FREE</BaseDefaultBtn></NuxtLink>
                    <NuxtLink to="/sign-up"><BaseDefaultBtn>START PRO</BaseDefaultBtn></NuxtLink>
                </div>
                <TariffList v-for="item in list" :item="item" :key="item.title"></TariffList>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.grid {
    position: relative;
    display: grid;
    grid-template-rows: repeat(4, auto);
    padding: 20px;
    border-radius: 15px;
    background-color: #f9f9f9;

    &::after {
        content: "";
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translateX(-50%);
        scale: 1.1;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        opacity: 0.15;
        background-color: #323142;
        filter: blur(90px);
        z-index: -1;
    }
}

.grid__row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    justify-content: space-between;
    gap: 25px;
    padding: 35px 50px;
    border-bottom: 1px solid #cbcbcb;

    &:nth-child(4) {
        border-bottom: none;
    }

    &:nth-child(3) {
        grid-template-columns: 1fr;
    }
}

.grid__row-content {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.grid__row-content--inline {
    flex-direction: row;
    align-items: flex-end;
    gap: 0;
}

.grid__row-title {
    display: flex;
    color: #282828;
    font-size: 35px;
    font-weight: 600;
    line-height: 120%;

    &--large {
        color: #272e35;
        font-size: 64px;
        line-height: 64px;
    }

    &--medium {
        font-size: 40px;
    }

    &--small {
        margin-bottom: 30px;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
    }

    span {
        margin-bottom: auto;
        color: #272e35;
        font-size: 24px;
        line-height: 32px;
    }
}

.grid__row-subtitle {
    color: #6e757c;
    font-family: $font-inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

.includes {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.includes__item {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
}

.tick,
.cross {
    transform: scale(0.9);
}

.includes__advantage {
    color: #606060;
    font-size: 22px;
    font-weight: 500;
    line-height: 32px;
}

.includes__icon {
    display: flex;
    align-items: center;
}
@include tablet {
    .grid__row {
        padding: 20px 30px;
    }

    .grid__row-content {
        gap: 15px;

        &--inline {
            gap: 0;
        }
    }

    .grid__row-title {
        font-size: 28px;

        &--large {
            font-size: 45px;
        }

        &--small {
            margin-bottom: 0;
            font-size: 18px;
        }

        span {
            font-size: 18px;
        }
    }

    .grid__row-subtitle {
        font-size: 12px;
    }

    .includes {
        gap: 15px;
    }

    .includes__advantage {
        font-size: 15px;
    }

    .tick,
    .cross {
        transform: scale(0.7);
    }
}

@include tablet-small {
    .grid {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0;
        background-color: transparent;
    }

    .grid__row {
        display: none;
    }
}
</style>
