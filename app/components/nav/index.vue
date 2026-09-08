<script setup lang="ts">
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const mainLinks = ["menu", "blog", "pricing", "contact"];
const authLinks = ["sign-in", "sign-up"];

const allLinks = [...mainLinks, ...authLinks];

const {formattedLinks} = useFormattedLinks(() => authLinks);
</script>

<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__wrapper">
                <div class="nav__left">
                    <BaseDefaultLogo class="logo" />
                    <CartLink class="cart cart--mobile" />
                    <NavList :main-links="mainLinks" />

                    <NavMobileList :is-menu-open="isMenuOpen" :links="allLinks" @toggle="toggleMenu" />

                    <NavBurger :is-menu-open="isMenuOpen" @toggle="toggleMenu" />
                </div>

                <div class="nav__right">
                    <CartLink class="cart cart--desktop" />
                    <BaseDefaultLink class="nav__link--bold" v-for="link in formattedLinks" :to="`/${link.raw}`">{{ link.formatted }}</BaseDefaultLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    position: sticky;
    top: 0;
    z-index: 999;
    background: #f9f9f9;
}

.nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0 25px 0;

    border-bottom: 1px solid #cbcbcb;
}

.nav__left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;
}

.nav__right {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
}

.cart {
    &--mobile {
        display: none;
    }
}

@include tablet {
    .nav__wrapper {
        padding: 35px 0 15px 0;
    }

    .nav__left {
        gap: 60px;
    }

    .nav__right {
        gap: 6px;
    }
}

@include tablet-small {
    .nav__left {
        gap: 15px;
    }
}

@include mobile {
    .logo {
        flex-grow: 1;
    }

    .cart {
        &--mobile {
            display: block;
        }

        &--desktop {
            display: none;
        }
    }

    .nav__list,
    .nav__right {
        display: none;
    }

    .nav__left {
        width: 100%;
        justify-content: space-between;
    }
}
</style>
