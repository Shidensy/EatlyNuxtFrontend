<script setup>
const links = ["blog", "pricing", "about-us", "contact"];

const {formattedLinks} = useFormattedLinks(() => links);
</script>

<template>
    <ul class="footer__nav-list list">
        <li class="list__item" v-for="link in formattedLinks" :key="link">
            <NuxtLink :to="`/${link.raw}`" class="list__link">{{ link.formatted }}</NuxtLink>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.list {
    display: flex;
    align-items: center;
    gap: 70px;
}

.list__link {
    color: #999;
    font-family: $font-inter, sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    text-decoration: none;
    transition: color 0.2s ease;

    @include hover {
        color: #6c5fbc;
    }
}

@include tablet {
    .list {
        gap: 30px;
    }

    .list__link {
        font-size: 12px;
    }
}

@include tablet-small {
    .list__link {
        color: #606060;
        font-size: 14px;
        line-height: 18px;
    }
}

@include mobile {
    .list {
        flex-direction: column;
        align-items: baseline;
        gap: 20px;
        padding-bottom: 30px;
        border-bottom: 1px solid rgba(129, 129, 129, 0.25);
    }
}
</style>
