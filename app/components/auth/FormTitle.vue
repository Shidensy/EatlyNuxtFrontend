<template>
    <h2 class="form__title">
        <slot></slot>
    </h2>
</template>

<style scoped lang="scss">
.form__title {
    margin-bottom: 25px;
    color: #323142;
    font-size: 30px;
    font-weight: 600;
    line-height: 125%;
}

@include tablet {
    .form__title {
        font-size: 25px;
    }
}
</style>
