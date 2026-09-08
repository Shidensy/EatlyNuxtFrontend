<script setup lang="ts">
defineProps({
    isMenuOpen: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{
    toggle: [];
}>();

const handleClick = () => {
    emit("toggle");
};
</script>

<template>
    <button type="button" class="burger-btn" :class="{'is-active': isMenuOpen}" @click="handleClick">
        <span class="burger-btn__line"></span>
    </button>
</template>

<style scoped lang="scss">
.burger-btn {
    display: none;
    position: relative;
    width: 30px;
    height: 22px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 100;

    &__line {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        background-color: #1f2937;
        transition: background-color 0.3s;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #1f2937;
        transition:
            transform 0.3s,
            top 0.3s,
            bottom 0.3s;
    }

    &::before {
        top: 0;
    }

    &::after {
        bottom: 0;
    }

    &.is-active {
        .burger-btn__line {
            background-color: transparent;
        }

        &::before {
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
        }

        &::after {
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
        }
    }
}

@include mobile {
    .burger-btn {
        display: block;
    }
}
</style>
