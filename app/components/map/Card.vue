<script setup lang="ts">
import Time from "~/assets/icons/time.svg";
import Location from "~/assets/icons/location.svg";
</script>

<template>
    <article class="map-card">
        <div class="rider">
            <NuxtImg class="rider__img" src="/images/map/rider.jpg" format="webp" alt="Your Rider" width="60" height="60" />
            <div class="rider__info">
                <h3 class="rider__name">David Smith</h3>
                <div class="rider__role">Food Rider</div>
            </div>
        </div>
        <div class="delivery">
            <div class="delivery__wrapper">
                <div class="delivery__icons">
                    <Time class="delivery__icon" aria-label="time" />
                    <Location class="delivery__icon" aria-label="location" />
                </div>
                <div class="delivery__address">
                    <div class="meta">
                        <h4 class="meta__title">Your Address</h4>
                        <div class="meta__subtitle">Horizenal Road Stree 1178 California, USA</div>
                    </div>
                    <div class="meta">
                        <h4 class="meta__title">Delivery Time</h4>
                        <div class="meta__subtitle">15 Minutes</div>
                    </div>
                </div>
                <button class="delivery__btn" type="button">Pending</button>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
.map-card {
    position: absolute;
    bottom: 0;
    right: 50%;
    transform: translate(50%, 50%);
    width: 450px;

    border-radius: 25px;
    overflow: hidden;
    box-shadow: 20px 40px 70px 0px rgba(50, 49, 66, 0.25);
}

.rider {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px 20px;
    background-color: #323142;
}

.rider__img {
    max-width: 60px;
    border-radius: 15px;
}

.rider__name {
    color: #f3f5f6;
    font-size: 22px;
    font-weight: 500;
    line-height: 140%;
}

.rider__role {
    color: #acadb9;
    font-size: 16px;
    line-height: 140%;
}

.delivery {
    padding: 30px 20px 40px 20px;
    background-color: #fff;
}

.delivery__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
}

.delivery__icons {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        opacity: 0.7;
        background-image: linear-gradient(to bottom, #6c5fbc 70%, rgba(255, 255, 255, 0) 0%);
        background-size: 5px 5px;
        background-repeat: repeat-y;
        background-position: center;
        z-index: 0;
    }

    .delivery__icon {
        width: 40px;
        height: 40px;
        z-index: 1;
        background: #fff;
    }
}

.delivery__address {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 200px;
}

.meta__title {
    color: #acadb9;
    font-size: 11px;
    font-weight: 500;
    line-height: 140%;
}

.meta__subtitle {
    color: #323142;
    font-size: 13px;
    line-height: 140%;
}

.delivery__btn {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
    padding: 10px 35px;
    border: 1px solid #6c5fbc;
    border-radius: 4px;
    background-color: #6c5fbc;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 140%;

    transition: all 0.2s linear;

    @include hover {
        color: #6c5fbc;
        background-color: #fff;
    }
}

@include tablet {
    .map-card {
        width: 320px;
        border-radius: 18px;
    }

    .rider {
        gap: 15px;
        padding: 15px 20px;
    }

    .rider__img {
        max-width: 40px;
    }

    .rider__name {
        font-size: 16px;
    }

    .rider__role {
        font-size: 10px;
    }

    .delivery {
        padding: 20px 15px 30px 15px;
    }

    .delivery__wrapper {
        gap: 20px;
    }

    .delivery__icons {
        gap: 20px;

        .delivery__icon {
            width: 30px;
            height: 30px;
        }
    }

    .delivery__address {
        gap: 20px;
    }

    .meta__title {
        font-size: 8px;
    }

    .meta__subtitle {
        font-size: 9px;
    }

    .delivery__btn {
        padding: 6px 25px;
        font-size: 11px;
    }
}

@include tablet-small {
    .map-card {
        width: 290px;
        border-radius: 16px;
    }

    .rider {
        gap: 12px;
        padding: 15px 12px;
    }

    .rider__name {
        font-size: 15px;
    }
}
</style>
