<script setup lang="ts">
useHead({
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});
</script>

<template>
    <div class="wrapper">
        <Nav />
        <main>
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>
