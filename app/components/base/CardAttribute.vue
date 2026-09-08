<script setup lang="ts">
import type {Attribute} from "~/types/attribute";

const props = withDefaults(
    defineProps<{
        attribute?: Attribute;
    }>(),
    {attribute: "Common"},
);
</script>

<template>
    <span :class="`card-attribute card-attribute--${attribute.toLowerCase()}`">{{ attribute }}</span>
</template>

<style scoped lang="scss">
.card-attribute {
    align-self: flex-start;
    text-transform: capitalize;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 5px;

    &--common {
        color: rgb(255, 255, 255);
        background-color: #97908f;
    }

    &--healthy {
        color: #daa31a;
        background-color: #f7edd0;
    }

    &--trending {
        color: #fb471d;
        background-color: #f7c5ba;
    }

    &--supreme {
        color: #309d5b;
        background-color: rgba(51, 172, 100, 0.2);
    }
}

@include tablet {
    .card-attribute {
        font-size: 10px;
    }
}
</style>
