<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        mainLinks: string[];
    }>(),
    {
        mainLinks: () => ["menu", "blog", "pricing", "contact"],
    },
);
</script>

<template>
    <ul class="nav__list">
        <li class="nav__item" v-for="link in mainLinks" :key="link">
            <NuxtLink class="nav__link" active-class="nav__link--active" :to="`/${link.toLowerCase()}`">{{ link }}</NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.nav__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.nav__link {
    color: #606060;
    font-family: $font-inter;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-transform: capitalize;
    cursor: pointer;

    transition: color 0.2s linear;
    @include hover {
        &:hover {
            color: #6c5fbc;
        }
    }

    &--active {
        color: #6c5fbc;
    }
}

@include tablet {
    .nav__list {
        gap: 35px;
    }

    .nav__link {
        font-size: 12px;
    }
}

@include tablet-small {
    .nav__list {
        gap: 25px;
    }
}
</style>
