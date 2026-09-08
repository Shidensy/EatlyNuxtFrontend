<script setup lang="ts">
import {useAuthStore} from "~/store/UseAuthStore";

useAuthStore;

definePageMeta({
    layout: "dashboard",
    middleware: "auth",
});
</script>

<template>
    <Dashboard />
</template>
