<script setup lang="ts">
const props = defineProps<{
    to: string;
}>();
</script>

<template>
    <NuxtLink class="link" :to="to" active-class="link--active">
        <slot></slot>
    </NuxtLink>
</template>

<style scoped lang="scss">
.link {
    width: fit-content;
    padding: 18px 30px;
    color: #fff;
    background-color: #6c5fbc;
    border: 1.5px solid #6c5fbc;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
    cursor: pointer;

    transition: all 0.2s linear;

    @include hover {
        color: #6c5fbc;
        background-color: #fff;
    }
}

.link--active {
    color: rgb(234, 221, 201);
}

// Media
@include tablet {
    .link {
        padding: 12px 20px;
        font-size: 12px;
    }
}

@include tablet-small {
    .link {
        padding: 8px 16px;
    }
}
</style>
