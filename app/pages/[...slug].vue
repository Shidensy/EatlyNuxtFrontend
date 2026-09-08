<script setup lang="ts">
definePageMeta({
    layout: false,
});
</script>

<template>
    <Nav />
    <section class="eatly-404">
        <div class="container">
            <div class="eatly-404__content">
                <div class="eatly-404__icon-box">
                    <span class="eatly-404__emoji">🍽️</span>
                </div>

                <h2 class="eatly-404__subtitle">Page Not Found</h2>

                <p class="eatly-404__text">Oops! The page you are looking for doesn't exist or has been moved. Maybe this dish has already been eaten!</p>

                <NuxtLink to="/">
                    <BaseDefaultBtn>Go to Home</BaseDefaultBtn>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.eatly-404 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
}

.eatly-404__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    max-width: 480px;
    width: 100%;
}

.eatly-404__icon-box {
    font-size: 3.5rem;
    margin-bottom: 20px;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
}

.eatly-404__subtitle {
    font-size: 2rem;
    font-weight: 700;
    color: #201f1f;
    margin-bottom: 15px;
}

.eatly-404__text {
    font-size: 1rem;
    line-height: 1.6;
    color: #999999;
    margin-bottom: 35px;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>
