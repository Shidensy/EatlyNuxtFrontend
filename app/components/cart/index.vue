<template>
    <section class="cart">
        <div class="container">
            <div class="cart__wrapper">
                <BaseSectionTitle class="cart__title visually-hidden">Product Cart</BaseSectionTitle>

                <CartList />
                <CartCoupon />
                <CartCheck />
                <CartSubmit />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.cart__wrapper {
    display: flex;
    flex-direction: column;
    gap: 70px;
    max-width: 650px;
    margin: 0 auto;
}

@include tablet {
    .cart__wrapper {
        gap: 50px;
    }
}

@include mobile {
    .cart__wrapper {
        gap: 40px;
        padding: 0 15px;
    }
}
</style>
