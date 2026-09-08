<script setup lang="ts">
import type {Author} from "~/types/article";

const props = defineProps<{
    author: Author;
}>();
</script>

<template>
    <div class="author">
        <NuxtImg class="author__img" :src="author.author_img" />
        <div class="author__info">
            <span class="author__by">Written By</span>
            <span class="author__name">{{ author.author_name }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.author__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.author__info {
    display: flex;
    flex-direction: column;
}

.author__by {
    color: #8d8d8d;
    font-size: 12px;
}

.author__name {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
}

@include tablet {
    .author {
        gap: 5px;
    }

    .author__img {
        width: 30px;
        height: 30px;
    }

    .author__by {
        font-size: 8px;
    }

    .author__name {
        font-size: 12px;
        line-height: 18px;
    }
}
</style>
