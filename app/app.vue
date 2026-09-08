<script setup lang="ts">
useHead({
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk}` : "Eatly"),
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
