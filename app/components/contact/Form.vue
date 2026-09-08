<script setup lang="ts">
import ArrowDecorSmall from "~/assets/icons/arrowDecorSmall.svg";
</script>

<template>
    <!-- action="/contact-support" -->
    <form class="form" action="/contact" method="POST" autocomplete="off">
        <h2 class="form__title">
            <span class="form__title-desktop">Customer <span class="purple">Support</span></span>
            <span class="form__title-mobile">Contact Us</span>
            <ArrowDecorSmall class="arrow arrow--title" aria-hidden="true" />
        </h2>

        <div class="form__field">
            <label class="form__label visually-hidden" for="name">Full Name</label>
            <input class="form__input" type="text" id="name" name="username" placeholder="full name" required />
        </div>

        <div class="form__field form__field--email">
            <label class="form__label visually-hidden" for="email">Email</label>
            <input class="form__input" type="email" id="email" name="email" placeholder="enter your email" required />
        </div>

        <div class="form__field form__field--textarea">
            <label class="form__label visually-hidden" for="message">Enter The Problem Or Query</label>
            <textarea class="form__textarea" id="message" name="message" rows="12" placeholder="Enter The Problem Or Query" required></textarea>
        </div>

        <BaseDefaultBtn type="submit" class="form__btn">
            Send Now
            <ArrowDecorSmall class="arrow arrow--btn" aria-hidden="true" />
        </BaseDefaultBtn>
    </form>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
}

.form__title {
    color: #252525;
    font-size: 40px;
    font-weight: 600;
    line-height: 55px;
    margin-bottom: 60px;
    position: relative;

    .purple {
        color: #6c5fbc;
    }
}

.form__title-mobile {
    display: none;
}

.form__field {
    margin-bottom: 18px;

    &--email {
        margin-bottom: 35px;
    }
    &--textarea {
        margin-bottom: 30px;
    }
}

.form__input,
.form__textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 20px 25px;
    border-radius: 16px;
    border: 2px solid #6c5fbc;
    background: #f9f9f9;
    color: #252525;
    font-family: $font-inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
    text-transform: uppercase;

    &::placeholder {
        color: #b6b6b6;
    }

    &:focus {
        border-color: color-mix(in srgb, #6c5fbc 90%, black);
        box-shadow: 0 0 0 4px rgba(#6c5fbc, 0.15);
    }
}

.form__textarea {
    resize: none;
}

.form__btn {
    position: relative;
    width: 100%;
}

.arrow {
    position: absolute;
    pointer-events: none;
    color: #6c5fbc;

    &--btn {
        bottom: 0;
        left: 0;
        transform: translate(-70%, 70%);
        width: 120px;
        height: 120px;
    }

    &--title {
        display: none;
    }
}

@include tablet {
    .form {
        max-width: 350px;
    }

    .form__input,
    .form__textarea {
        padding: 15px 18px;
        border-radius: 12px;
        border-width: 1px;
        font-size: 12px;
        line-height: 18px;
    }

    .arrow--btn {
        width: 60px;
        height: 60px;
    }
}

@include tablet-small {
    .form__field {
        margin-bottom: 12px;

        &--email {
            margin-bottom: 50px;
        }
        &--textarea {
            margin-bottom: 20px;
        }
    }

    .form__input,
    .form__textarea {
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 10px;
    }

    .form__title {
        padding: 20px;
        color: #f9f9f9;
        text-align: center;
        font-size: 24px;
        line-height: 120%;
        background-color: #6c5fbc;
        height: 150px;
        margin-bottom: 30px;
    }

    .form__title-desktop {
        display: none;
    }
    .form__title-mobile {
        display: block;
    }

    .arrow--btn {
        display: none;
    }

    .arrow--title {
        display: block;
        bottom: auto;
        top: 20px;
        left: 5%;
        transform: rotate(90deg);
        width: 80px;
        height: auto;
        color: white;
    }
}
</style>
