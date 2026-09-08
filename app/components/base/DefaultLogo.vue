<script setup lang="ts">
import Logo from "~/assets/icons/logo.svg";
</script>

<template>
    <NuxtLink class="nav__icon-link" to="/">
        <Logo class="nav__icon" />
    </NuxtLink>
</template>

<style scoped lang="scss">
.nav__icon-link {
    display: flex;
    align-items: center;
    cursor: pointer;
}

@include tablet {
    .nav__icon {
        width: 80px;
        height: 40px;
    }
}
</style>
