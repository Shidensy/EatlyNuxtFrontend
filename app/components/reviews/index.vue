<template>
    <section class="reviews">
        <div class="container">
            <div class="reviews__wrapper">
                <BaseSectionTitle><span>Customer</span> Say</BaseSectionTitle>
                <ReviewsSlider />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.reviews__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}
</style>
