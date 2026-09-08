<script setup lang="ts">
import ArrowRight from "~/assets/icons/arrowRight.svg";

defineProps<{
    route: string;
}>();
</script>

<template>
    <div class="products__view">
        <NuxtLink class="products__view-link" :to="route">View All</NuxtLink>
        <ArrowRight class="products__view-icon" />
    </div>
</template>

<style scoped lang="scss">
.products__view {
    display: flex;
    align-items: center;
    justify-self: end;
    margin-left: auto;
    gap: 15px;
    color: #acadb9;
    cursor: pointer;

    .products__view-icon {
        transition: transform 0.25s ease;
    }
    @include hover {
        .products__view-icon {
            transform: translateX(5px);
        }
    }
}

.products__view-link {
    color: #acadb9;
    font-size: 20px;
    font-weight: 500;
    line-height: 45px;
}

@include tablet {
    .products__view {
        gap: 10px;
    }

    .products__view-icon {
        transform: scale(0.8);
    }

    .products__view-link {
        font-size: 14px;
        line-height: 30px;
    }
}
</style>
