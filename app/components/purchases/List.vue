<script setup lang="ts">
import ArrowDecor from "~/assets/icons/arrowDecor.svg";
</script>

<template>
    <ul class="purchases__list">
        <li class="purchases__list-item item" v-for="item in purchaseItems" :key="item.id">
            <NuxtImg class="item__img" :src="item.imgSrc" :alt="item.title" format="webp" />
            <div class="item__content">
                <h3 class="item__title">{{ item.title }}</h3>
                <p class="item__subtitle" :style="item.statusColor ? {color: item.statusColor} : {}">
                    {{ item.status }}
                </p>
            </div>
            <span class="item__time">{{ item.time }}</span>
            <ArrowDecor class="arrow" v-if="purchaseItems.at(-1)?.id === item.id" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
.purchases__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 340px;
    padding: 5px 20px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 20px 30px 0 rgba(70, 70, 70, 0.03);

    &:first-child {
        box-shadow: 0 20px 30px 0 rgba(70, 70, 70, 0.15);
    }
}

.item__img {
    width: 100%;
    max-width: 75px;
}

.item__title {
    color: #323142;
    font-size: 19px;
    font-weight: 600;
    line-height: 140%;
}

.item__subtitle,
.item__time {
    color: #323142;
    font-size: 12px;
    font-weight: 500;
    line-height: 140%;
}

.item__time {
    color: #acadb9;
    margin: auto 0 0 auto;
}

.arrow {
    display: none;
    position: absolute;
    right: -120px;
    bottom: -90%;
    transform: rotate(-90deg) scale(0.8);
}

@include tablet {
    .item {
        max-width: 250px;
        gap: 12px;
        padding: 5px 12px;
    }

    .item__img {
        max-width: 55px;
    }

    .item__title {
        font-size: 12px;
    }

    .item__subtitle {
        font-size: 8px;
    }

    .item__time {
        font-size: 10px;
    }
}

@include tablet-small {
    .arrow {
        display: block;
    }
}

@include mobile {
    .purchases__list {
        gap: 10px;
    }

    .item {
        max-width: 225px;
        padding: 2px 12px;
    }

    .item__img {
        max-width: 50px;
    }

    .item__time {
        font-size: 8px;
    }
}
</style>
