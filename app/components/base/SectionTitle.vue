<template>
    <h2 class="title">
        <slot></slot>
    </h2>
</template>

<style scoped lang="scss">
.title {
    color: #18181b;
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    text-transform: capitalize;

    :deep(span) {
        color: #6c5fbc;
    }
}

@include tablet {
    .title {
        font-size: 32px;
        line-height: 30px;
    }
}

@include tablet-small {
    .title {
        font-size: 28px;
    }
}
</style>
