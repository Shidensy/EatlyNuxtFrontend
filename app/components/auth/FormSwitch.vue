<script setup lang="ts">
const props = defineProps<{
    switch?: boolean;
}>();
</script>

<template>
    <p class="form__switch">
        {{ props.switch ? "Create A New Account?" : "Already Have An Account?"
        }}<NuxtLink class="form__switch-link" :to="props.switch ? 'sign-up' : 'sign-in'">{{ props.switch ? " Sign Up" : " Sign In" }}</NuxtLink>
    </p>
</template>

<style scoped lang="scss">
.form__switch {
    color: #3e3e3e;
    font-size: 18px;
    font-weight: 400;
}

.form__switch-link {
    color: #6c5fbc;
    font-weight: 700;

    transition: color 0.2s ease;

    @include hover {
        color: rgba(108, 95, 188, 0.8);
    }
}

@include tablet {
    .form__switch {
        font-size: 14px;
    }
}
</style>
