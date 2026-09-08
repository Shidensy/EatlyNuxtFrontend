<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        isMenuOpen?: boolean;
        links?: string[];
    }>(),
    {
        isMenuOpen: false,
        links: () => ["menu", "blog", "pricing", "contact", "sign-in", "sign-up"],
    },
);

const emit = defineEmits<{
    toggle: [];
}>();

const {formattedLinks} = useFormattedLinks(() => props.links);

const handleClick = () => {
    emit("toggle");
};
</script>

<template>
    <transition name="fade">
        <div v-if="isMenuOpen" class="nav__mobile-menu">
            <ul class="nav__mobile-list">
                <li class="nav__mobile-item" v-for="item in formattedLinks" :key="item.raw">
                    <NuxtLink class="nav__mobile-link" active-class="nav__mobile-link--active" :to="`/${item.raw}`" @click="handleClick">
                        {{ item.formatted }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </transition>
</template>

<style scoped lang="scss">
.nav__mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fff;
    z-index: 10;
    padding: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav__mobile-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.nav__mobile-link {
    display: block;
    padding-left: 5px;
    color: #999;
    font-family: $font-inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    text-transform: capitalize;
    cursor: pointer;

    transition: color 0.2s linear;

    @include hover {
        color: #6c5fbc;
    }

    &--bold {
        font-weight: 700;
    }

    &--active {
        border-left: 2px solid #999;
    }
}
</style>
