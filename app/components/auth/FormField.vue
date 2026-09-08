<template>
    <div class="form__field">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
.form__field {
    position: relative;
    display: flex;
    align-items: center;
    gap: 30px;
    margin-bottom: 25px;
    padding: 24px;
    border: 1.5px solid transparent;
    border-radius: 14px;
    background-color: #f5f5f5;
    color: rgba(194, 195, 203, 1);
    transition:
        color 0.2s ease,
        border 0.2s ease;
    width: 100%;

    &--last {
        margin-bottom: 45px;
    }

    &:focus-within {
        border-color: #6c5fbc;
        color: rgba(108, 95, 188, 1);
    }

    &:has(.form__input:not(:placeholder-shown)) {
        border-color: #6c5fbc;
        color: rgba(108, 95, 188, 1);
    }
}

@include tablet {
    .form__field {
        gap: 15px;
        padding: 18px 16px;

        &--last {
            margin-bottom: 45px;
        }
    }
}
</style>
