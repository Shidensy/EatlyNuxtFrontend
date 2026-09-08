<template>
    <button class="btn" type="submit">
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
.btn {
    width: fit-content;
    padding: 15px 25px;
    color: #f7f8fa;
    background-color: #6c5fbc;
    border: 1.5px solid #6c5fbc;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    transition: all 0.2s linear;

    @include hover {
        color: #6c5fbc;
        background-color: #fff;
    }
}

@include tablet {
    .btn {
        padding: 12px 20px;
        font-size: 12px;
    }
}
</style>
