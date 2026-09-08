<script setup lang="ts">
import Logo from "~/assets/icons/favicon.svg";

useHead({
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});
</script>

<template>
    <div class="wrapper">
        <Nav class="nav" />
        <main>
            <section class="auth">
                <div class="auth__wrapper">
                    <div class="auth__left">
                        <NuxtLink class="auth__link" to="/" style="margin-right: auto"><Logo /></NuxtLink>
                        <slot></slot>
                        <div class="auth__links">
                            <NuxtLink class="auth__link" to="/privacy">Privacy Policy</NuxtLink>
                            <NuxtLink class="auth__link" to="/copyright">Copyright 2022</NuxtLink>
                        </div>
                    </div>
                    <div class="auth__right">
                        <NuxtImg class="auth__img" src="/images/auth/auth-bg.webp" alt="Delicious healthy food plates from Eatly app" width="570" height="520"></NuxtImg>

                        <AuthSlider class="auth__slider" />
                    </div>
                </div>
            </section>
        </main>
        <Footer class="footer" />
    </div>
</template>

<style scoped lang="scss">
.nav,
.footer {
    display: none;
}

.auth {
    position: relative;
    padding: 0;
    min-height: 100vh;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background-color: #fff;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background-color: #6c5fbc;
        z-index: -1;
    }
}

.auth__wrapper {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
}

.auth__left,
.auth__right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    height: 100%;
    padding: 24px 36px;
}

.auth__left {
    justify-content: space-between;
}

.auth__right {
    min-width: 0;
}

.auth__img {
    max-width: 570px;
    max-height: 500px;
    object-fit: contain;
}

.auth__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.auth__link {
    color: #718096;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: 0.2px;

    transition: color 0.2s ease;

    @include hover {
        color: #6c5fbc;
    }
}

@include tablet {
    .auth__img {
        max-width: 450px;
    }

    .auth__link {
        font-size: 12px;
    }
}

@include tablet-small {
    .auth {
        &::after {
            background-color: #fff;
        }
    }

    .auth__wrapper {
        grid-template-columns: 1fr;
    }

    .auth__right {
        display: none;
    }
}

@include mobile {
    .nav,
    .footer {
        display: block;
    }

    .auth__left {
        justify-content: center;
    }

    .auth__link {
        display: none;
    }
}
</style>
