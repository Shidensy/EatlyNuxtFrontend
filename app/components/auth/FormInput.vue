<script setup lang="ts">
const model = defineModel({type: String, default: ""});
</script>

<template>
    <input class="form__input" v-model="model" required />
</template>

<style scoped lang="scss">
.form__input {
    flex-grow: 1;
    padding-right: 40px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #6c5fbc;
    font-family: $font-poppins;

    &::placeholder {
        text-transform: uppercase;
        color: rgba(194, 195, 203, 1);
    }

    &::-ms-reveal,
    &::-ms-clear {
        display: none;
        width: 0;
        height: 0;
    }

    &::-webkit-credentials-reveal {
        display: none;
    }
}

@include tablet {
    .form__input {
        padding-right: 30px;
        font-size: 12px;
    }
}

@include mobile {
    .form__input {
        padding-right: 20px;
    }
}
</style>
