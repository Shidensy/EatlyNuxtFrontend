<script setup lang="ts">
import Chevron from "~/assets/icons/chevronDown.svg";
import Tick from "~/assets/icons/tick.svg";

defineProps<{
    advantages: string[];
}>();

const isOpen = ref<boolean>(false);

const toggle = (): void => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <div class="accordion">
        <button class="accordion__trigger" @click="toggle" type="button" :aria-expanded="isOpen">
            <h3 class="accordion__label">See features</h3>

            <Chevron :class="['accordion__plus-icon', {'is-open': isOpen}]" />
        </button>

        <div :class="['accordion__content-box', {'is-open': isOpen}]">
            <div class="accordion__content">
                <div class="accordion__item" v-for="(advantage, index) in advantages" :key="index">
                    <Tick />
                    {{ advantage }}
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.accordion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
}

.accordion__trigger {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.accordion__label {
    color: #272e35;
    font-family: $font-inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
}

.accordion__plus-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-out;
    transform: scale(0.8);

    &.is-open {
        transform: rotate(180deg) scale(0.8);
    }
}

.accordion__content-box {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;

    transition:
        grid-template-rows 0.25s ease-out,
        padding 0.25s ease-out;

    &.is-open {
        grid-template-rows: 1fr;
    }
}

.accordion__content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 0;
    color: #606060;
    font-size: 11px;
    font-weight: 500;
    line-height: 17px;
}

.accordion__item {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
        width: 20px;
    }
}
</style>
