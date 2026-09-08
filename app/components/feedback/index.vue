<template>
    <section class="feedback">
        <div class="container">
            <div class="feedback__wrapper">
                <h1 class="feedback__title">GET 50%</h1>
                <div class="feedback__input-wrapper">
                    <input class="feedback__input" type="email" placeholder="Enter Your Email Address" required />
                    <BaseDefaultBtn class="feedback__btn">Subscribe</BaseDefaultBtn>
                </div>
                <NuxtImg class="feedback__img" src="/images/feedback/food.webp" alt="Food image" width="275" height="275" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.feedback {
    padding: 80px 0 100px;
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

.feedback__input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 440px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 5px 32px 0 rgba(0, 0, 0, 0.1);
}

.feedback__input {
    width: 100%;
    padding: 20px 160px 20px 20px;
    border-radius: 14px;
    background: #fff;
    box-shadow: 0 7px 45px 0 rgba(0, 0, 0, 0.1);
    color: #878787;
    font-size: 16px;
    &::placeholder {
        text-transform: capitalize;
    }
    outline: none;
}

.feedback__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;
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

    .feedback__input-wrapper {
        max-width: 320px;
    }

    .feedback__input {
        padding: 15px 130px 15px 15px;
        font-size: 12px;
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
