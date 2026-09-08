<template>
    <form class="form">
        <slot></slot>
    </form>
</template>

<style scoped lang="scss">
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
}

@include tablet {
    .form {
        max-width: 290px;
    }
}
</style>
