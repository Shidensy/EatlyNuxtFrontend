<script setup lang="ts">
import EyeIcon from "~/assets/icons/eye.svg";
import EyeOffIcon from "~/assets/icons/eye-off.svg";

defineProps<{
    isVisible: boolean;
}>();

defineEmits<{
    (e: "toggle"): void;
}>();
</script>

<template>
    <button class="form__eye-btn" type="button" :aria-label="isVisible ? 'Hide password' : 'Show password'" @click="$emit('toggle')">
        <EyeIcon v-if="isVisible" class="form__eye-icon" />
        <EyeOffIcon v-else class="form__eye-icon" />
    </button>
</template>

<style scoped lang="scss">
.form__eye-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #c2c3cb;
    transition: color 0.2s ease;
}

.form__field:focus-within .form__eye-btn {
    color: #6c5fbc;
}

.form__eye-icon {
    width: 22px;
    height: 22px;
    fill: currentColor;
}

@include tablet {
    .form__eye-icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
    }
}
</style>
