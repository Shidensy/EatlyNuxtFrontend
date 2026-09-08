<script setup lang="ts">
import type {AccordionItem} from "~/types/accordion-item";

defineProps<{
    items: AccordionItem[];
}>();

const openIndex = ref<number | null>(null);

const toggle = (index: number): void => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion__item">
            <button class="accordion__trigger" @click="toggle(index)">
                <h3 class="accordion__label">{{ item.label }}</h3>

                <span :class="['accordion__plus-icon', {'is-open': openIndex === index}]"></span>
            </button>

            <div :class="['accordion__content-box', {'is-open': openIndex === index}]">
                <div class="accordion__content">
                    {{ item.content }}
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
    gap: 20px;
    width: 100%;
}

.accordion__item {
    border-bottom: 2px solid #adadad;
}

.accordion__trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
}

.accordion__label {
    color: #323142;
    font-size: 24px;
    font-weight: 600;
    line-height: 60px;
}

.accordion__plus-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    min-width: 16px;
    background-color: #6c5fbc;
    border-radius: 50%;
    transition: transform 0.2s ease-out;

    &::before,
    &::after {
        content: "";
        position: absolute;
        background-color: #ffffff;
    }
    &::before {
        width: 10px;
        height: 2px;
    }
    &::after {
        width: 2px;
        height: 10px;
    }

    &.is-open {
        transform: rotate(45deg);
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
        padding: 0 12px 16px 12px;
    }
}

.accordion__content {
    max-width: 70%;
    min-height: 0;
    padding: 0 12px 0 12px;
    color: #adadad;
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
}

@include tablet {
    .accordion {
        gap: 15px;
    }

    .accordion__trigger {
        padding: 10px;
    }

    .accordion__label {
        font-size: 16px;
        line-height: 42px;
    }

    .accordion__plus-icon {
        width: 20px;
        height: 20px;

        &::before {
            width: 7px;
            height: 1px;
        }
        &::after {
            width: 1px;
            height: 7px;
        }
    }

    .accordion__content {
        font-size: 16px;
    }
}

@include mobile {
    .accordion__content-box.is-open {
        grid-template-rows: 1fr;
        padding: 0 6px 10px 6px;
    }

    .accordion__trigger {
        padding: 8px 0;
    }

    .accordion__label {
        font-size: 12px;
        line-height: 30px;
    }

    .accordion__content {
        padding: 0;
        font-size: 10px;
    }
}
</style>
