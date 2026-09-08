<template>
    <ul class="footer__socials-row row">
        <li v-for="social in socials" :key="social.name" class="row__item">
            <a class="row__link" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.name">
                <component :is="social.icon" />
            </a>
        </li>
    </ul>
</template>

<style scoped lang="scss">
.row {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: auto;
}

.row__item a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #081420;
    transition: color 0.2s ease;

    @include hover {
        color: #6c5fbc;
    }
}

@include tablet {
    .row {
        gap: 30px;
    }
}

@include tablet-small {
    .row {
        gap: 20px;
    }
}
</style>
