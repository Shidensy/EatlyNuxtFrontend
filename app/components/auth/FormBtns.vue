<script setup lang="ts">
import Apple from "~/assets/icons/apple.svg";
import Google from "~/assets/icons/google.svg";
</script>

<template>
    <div class="form__btns">
        <button class="form__btn" type="button" aria-label="Sign up with Google"><Google /></button>
        <button class="form__btn" type="button" aria-label="Sign up with Apple"><Apple /></button>
    </div>
</template>

<style scoped lang="scss">
.form__btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin-bottom: 15px;
}

.form__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    padding: 10px;
    border-radius: 13px;
    background-color: #f5f5f5;
    color: #323142;

    transition:
        color 0.2s ease-in,
        background-color 0.2s ease-in;

    @include hover {
        color: #fff;
        background-color: rgb(0, 0, 0);
    }
}

@include tablet {
    .form__btn {
        height: 45px;
        padding: 8px;
        border-radius: 10px;

        svg {
            width: 20px;
            height: 30px;
        }
    }
}
</style>
