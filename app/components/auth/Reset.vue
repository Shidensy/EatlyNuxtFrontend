<script setup lang="ts">
import Email from "~/assets/icons/email.svg";
</script>

<template>
    <AuthForm action="/reset" method="POST">
        <div class="form__content">
            <AuthFormTitle>Forgot Password</AuthFormTitle>
            <p class="form__text">Enter Your Mail To Reset</p>
        </div>

        <AuthFormField>
            <label class="form__label visually-hidden" for="email">Email</label>
            <Email class="form__field-icon" />
            <AuthFormInput type="email" autocomplete="off" id="email" name="email" placeholder="enter your email" />
        </AuthFormField>

        <AuthFormSubmit>Verify</AuthFormSubmit>
    </AuthForm>
</template>

<style scoped lang="scss">
.form__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 60px;
}

.form__text {
    color: #cfcfd3;
    font-size: 22px;
    font-weight: 500;
    line-height: 125%;
}

@include tablet {
    .form__text {
        font-size: 18px;
    }
}
</style>
