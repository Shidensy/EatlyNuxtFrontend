<template>
    <section class="questions">
        <div class="container">
            <div class="questions__wrapper">
                <BaseSectionTitle class="questions__title">Frequently asked<br /><span>questions</span></BaseSectionTitle>

                <QuestionsDropDown :items="questionsList" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.questions__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    width: 100%;
    text-align: center;
}

.questions__title {
    position: relative;

    &::before {
        content: "";
        position: absolute;
        right: -35px;
        top: -25px;
        width: 30px;
        height: 30px;
        background: url("~/assets/icons/decor.svg") no-repeat center / contain;
        pointer-events: none;
    }
}

@include tablet {
    .questions__wrapper {
        gap: 60px;
    }
}

@include mobile {
    .questions__wrapper {
        gap: 50px;
    }

    .questions__title::before {
        right: -20px;
        top: -10px;
        width: 20px;
        height: 20px;
    }
}
</style>
