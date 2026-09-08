<script setup lang="ts">
import ChevronDown from "~/assets/icons/chevronDown.svg";
</script>

<template>
    <section class="purchases border">
        <div class="container">
            <div class="purchases__wrapper">
                <div class="purchases__left">
                    <BaseSectionTitle class="purchases__title">Control <span>Purchases</span><br />Via Dashboard</BaseSectionTitle>
                    <PurchasesList />
                </div>

                <div class="purchases__right">
                    <div class="purchases__row">
                        <h3 class="purchases__subtitle">Purchases</h3>
                        <div class="purchases__month">
                            <span>This month</span>
                            <ChevronDown class="purchases__chevron" />
                        </div>
                    </div>

                    <PurchasesStatList />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.purchases__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
}

.purchases__title {
    line-height: 40px;
}

.purchases__left {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    max-width: 530px;
}

.purchases__right {
    display: flex;
    flex-direction: column;
    gap: 45px;
    width: 100%;
    padding: 45px 35px;
    border-radius: 25px;
    border: 1.5px solid #edf2f7;
    background: #fff;
}

.purchases__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.purchases__subtitle {
    color: #1a202c;
    font-family: $font-manrope;
    font-size: 28px;
    font-weight: 800;
    line-height: 135%;
}

.purchases__month {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 8px 12px;
    border-radius: 8px;
    background: #fafafa;
    color: #1a202c;
    font-family: $font-manrope;
    font-size: 18px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: 0.5px;
}

@include tablet {
    .purchases__wrapper {
        justify-items: end;
        gap: 20px;
    }

    .purchases__right {
        max-width: 380px;
        padding: 30px;
    }

    .purchases__right,
    .purchases__left {
        gap: 30px;
    }

    .purchases__subtitle {
        font-size: 20px;
    }

    .purchases__month {
        font-size: 13px;
    }

    .purchases__chevron {
        transform: scale(0.8);
    }
}

@include tablet-small {
    .purchases__wrapper {
        grid-template-columns: 1fr;
        justify-items: flex-start;
        gap: 100px;
    }

    .purchases__right {
        max-width: unset;
    }
}

@include mobile {
    .purchases__left,
    .purchases__right {
        gap: 25px;
    }

    .purchases__right {
        padding: 25px;
    }

    .purchases__subtitle {
        font-size: 16px;
    }

    .purchases__month {
        font-size: 12px;
    }
}
</style>
