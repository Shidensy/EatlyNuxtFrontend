<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="hero__content">
                    <div class="hero__over">OVER 1000 USERS</div>
                    <h1 class="hero__title">Enjoy Foods All Over The <span>World</span></h1>

                    <p class="hero__subtitle">
                        EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus</span>.
                    </p>
                    <div class="hero__btns">
                        <BaseDefaultLink to="/sign-in">Get Started</BaseDefaultLink>
                        <BaseDefaultLink to="/sign-in">Go Pro</BaseDefaultLink>
                    </div>
                </div>
                <NuxtImg class="hero__img" src="/images/hero/hero.webp" alt="Delicious healthy food plates from Eatly app" width="575" height="532" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 70px;
}

.hero__over {
    position: relative;
    margin-bottom: 20px;
    padding-left: 70px;
    color: rgba(32, 31, 31, 0.2);
    font-size: 15px;
    font-weight: 600;
    line-height: 120%;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 50px;
        height: 1px;
        opacity: 0.2;
        background: #201f1f;
    }
}

.hero__title {
    margin-bottom: 20px;
    color: #201f1f;
    font-size: 70px;
    font-weight: 600;
    line-height: 120%;

    span {
        color: #5c4eae;
    }
}

.hero__subtitle {
    max-width: 490px;
    margin-bottom: 50px;
    color: #676767;
    text-align: left;
    font-family: $font-inter;
    font-size: 18px;
    line-height: 28px;

    span {
        opacity: 0.7;
        color: #6155ae;
        font-weight: 500;
    }
}

.hero__btns {
    display: flex;
    align-items: center;
    gap: 20px;
}

@include tablet {
    .hero__wrapper {
        gap: 35px;
    }

    .hero__over {
        margin-bottom: 12px;
        padding-left: 65px;
        font-size: 10px;
    }

    .hero__title {
        margin-bottom: 10px;
        font-size: 50px;
    }

    .hero__subtitle {
        max-width: 320px;
        margin-bottom: 35px;
        font-size: 12px;
        line-height: 20px;
    }

    .hero__btns {
        gap: 12px;
    }

    .hero__img {
        max-width: 430px;
    }
}

@include tablet-small {
    .hero__wrapper {
        gap: 15px;
    }

    .hero__title {
        font-size: 45px;
    }

    .hero__subtitle {
        margin-bottom: 20px;
    }
}

@include mobile {
    .hero__wrapper {
        grid-template-columns: 1fr;
        align-items: center;
        text-align: center;
    }

    .hero__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero__title {
        max-width: 320px;
    }

    .hero__title-word {
        display: none;
    }

    .hero__subtitle {
        text-align: center;
        max-width: 300px;
    }

    .hero__img {
        width: 290px;
        margin: 0 auto;
    }

    .hero__over {
        color: #201f1f;
        font-size: 9px;

        &::before {
            opacity: 1;
            background: #201f1f;
        }
    }
}
</style>
