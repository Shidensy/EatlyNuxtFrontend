<template>
    <section class="feedback">
        <div class="feedback__wrapper">
            <h1 class="feedback__title">GET 50%</h1>
            <NuxtImg class="feedback__img" src="/images/feedback/food.webp" alt="Food image" width="275" height="275" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.feedback {
    padding: 20px 0;
    background-size: cover;
    background-position: center;
}

.feedback__wrapper {
    position: relative;
    padding: 30px 60px 60px 60px;
    border-radius: 30px;
    background-image: url("/images/feedback/feedback-bg.webp");
}

.feedback__title {
    margin-bottom: 10px;
    color: #fff;
    font-size: 70px;
    font-weight: 800;
}

.feedback__img {
    position: absolute;
    right: 70px;
    bottom: -60px;
    max-width: 275px;
}

@include tablet {
    .feedback__title {
        margin-bottom: 5px;
        font-size: 50px;
    }

    .feedback__wrapper {
        padding: 25px 50px 25px 45px;
    }

    .feedback__img {
        width: 200px;
    }
}

@include tablet-small {
    .feedback__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        min-height: 250px;
        padding: 25px 25px 25px 25px;
    }

    .feedback__img {
        position: absolute;
        right: 0;
        left: 50%;
        transform: translateX(-50%);
        bottom: -90px;
        max-width: 160px;
    }

    .feedback__title {
        font-size: 40px;
        margin-bottom: 0;
    }
}
</style>
