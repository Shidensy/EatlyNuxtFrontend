<template>
    <section class="contact">
        <div class="container">
            <div class="contact__wrapper">
                <aside class="contact__aside aside">
                    <h2 class="aside__title">Just Contact</h2>
                    <div class="aside__img-wrapper">
                        <NuxtImg class="aside__img" src="/images/contact/iPhone.webp" width="300" height="600" alt="iPhone mockup showing support screen" />
                    </div>
                </aside>

                <ContactForm />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.contact {
    padding-bottom: 120px;
}

.contact__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 240px;
}

.aside {
    position: relative;
    display: flex;
    flex: 0 0 45%;
    padding: 80px 15px;

    background-color: #6c5fbc;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -90%;
        width: 100%;
        height: 100%;
        background-color: #6c5fbc;
        z-index: -1;
    }
}

.aside__title {
    position: relative;

    color: #f9f9f9;
    font-size: 48px;
    font-weight: 600;
    line-height: 105%;

    &::before {
        content: "";
        position: absolute;
        top: -30px;
        left: -10px;
        width: 50px;
        height: 50px;
        background-image: url("~/assets/icons/particles.svg");
        background-size: contain;
        background-repeat: no-repeat;
    }

    &::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 90px;
        background-image: url("~/assets/icons/arrowDecorDouble.svg");
        background-size: cover;
        background-repeat: no-repeat;
    }
}

.aside__img-wrapper {
    position: absolute;
    bottom: -70px;
    right: 0;
    transform: translateX(50%);
    max-width: 300px;
    min-width: 300px;
    height: auto;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(100%);
        width: 50px;
        height: 50px;
        background-image: url("/images/contact/decor.svg");
        background-size: contain;
        background-repeat: no-repeat;
    }
}

@include tablet {
    .contact__wrapper {
        gap: 20px;
    }

    .aside {
        justify-content: center;
        flex: 0 0 35%;
    }

    .aside__title {
        font-size: 34px;

        &::before {
            width: 20px;
            height: 40px;
        }

        &::after {
            width: 200px;
            height: 60px;
        }
    }

    .aside__img-wrapper {
        min-width: 215px;

        &::after {
            width: 25px;
        }
    }
}

@include tablet-small {
    .contact {
        padding: 65px 0;
    }

    .contact__wrapper {
        justify-content: center;
    }

    .aside {
        display: none;
    }
}
</style>
