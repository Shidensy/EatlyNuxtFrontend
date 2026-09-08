<script setup lang="ts"></script>
<template>
    <ul class="stat__list">
        <li v-for="stat in statItems" :key="stat.id" :class="['stat__list-elem elem', stat.modifierClass]">
            <NuxtImg class="elem__img" :src="stat.imgSrc" :alt="stat.title" format="webp" />
            <div class="elem__text">
                <h4 class="elem__title">{{ stat.title }}</h4>
                <p class="elem__subtitle">{{ stat.trend }}</p>
            </div>
            <span class="elem__amount">{{ stat.amount }}</span>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.stat__list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &::after {
        content: "";
        position: absolute;
        top: 45%;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-radius: 13.276px;
        opacity: 0.2;
        background: var(--Black-Color, #323142);
        filter: blur(60px);
    }
}

.elem {
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 25px 25px 40px 25px;
    border-radius: 25px;
    border: 1.5px solid #e0e3e7;

    &--first,
    &--second {
        &::before,
        &::after {
            content: "";
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 70%;
            height: 8px;
            margin: 0 25px;
            background-color: #fbad18;
            border-radius: 5px;
        }

        &::after {
            left: unset;
            right: 0;
            opacity: 0.2;
            width: 30%;
        }
    }

    &--first {
        &::before,
        &::after {
            width: 60%;
            background-color: #6c5fbc;
        }

        &::after {
            width: 40%;
        }
    }
}

.elem__img {
    width: 100%;
    max-width: 50px;
}

.elem__text {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.elem__title {
    color: #1a202c;
    font-family: $font-manrope;
    font-size: 18px;
    font-weight: 800;
    line-height: 150%;
    letter-spacing: 0.5px;
}

.elem__subtitle {
    color: #a0aec0;
    font-family: $font-manrope;
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.5px;
}

.elem__amount {
    margin-left: auto;
    color: #1a202c;
    font-family: $font-manrope;
    font-size: 22px;
    font-weight: 800;
    line-height: 150%;
}

@include tablet {
    .stat__list {
        gap: 15px;
    }

    .elem {
        gap: 15px;
        padding: 18px 18px 40px 18px;

        &--first,
        &--second {
            &::before,
            &::after {
                height: 6px;
            }
        }
    }

    .elem__title {
        font-size: 12px;
    }

    .elem__subtitle {
        font-size: 11px;
    }

    .elem__amount {
        font-size: 15px;
    }

    .elem__img {
        max-width: 30px;
    }
}

@include mobile {
    .stat__list {
        gap: 12px;
    }

    .elem {
        gap: 10px;
        padding: 15px 15px 40px 15px;
        border-radius: 12px;
    }

    .elem__title {
        font-size: 10px;
    }

    .elem__subtitle {
        font-size: 8px;
    }

    .elem__amount {
        font-size: 12px;
    }
}
</style>
