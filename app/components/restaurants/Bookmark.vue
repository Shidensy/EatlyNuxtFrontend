<script setup lang="ts">
import Bookmark from "~/assets/icons/bookmark.svg";

const isFav = ref(false);

const toggleBookMark = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();

    isFav.value = !isFav.value;
};
</script>
<template>
    <button class="restaurant-card__bookmark-btn" type="button" :style="[isFav ? 'color: #6c5fbc' : '']" @click="toggleBookMark">
        <Bookmark class="restaurant-card__bookmark" />
    </button>
</template>

<style scoped lang="scss">
.restaurant-card__bookmark-btn {
    width: fit-content;
    margin-left: auto;
}

.restaurant-card__bookmark {
    transition: color 0.2s ease;

    cursor: pointer;

    @include hover {
        color: #6c5fbc;
    }
}
</style>
