<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <div class="hero__content">
                    <BaseSectionTitle>Our <span>Mission</span> is to Bring Fresh Food to Your Doorstep</BaseSectionTitle>
                    <p class="hero__text">We believe that eating healthy and delicious food shouldn’t be a luxury. Eatly helps you save time and enjoy restaurant-quality meals at home.</p>
                    <NuxtLink to="/menu">
                        <BaseDefaultBtn>Explore Menu</BaseDefaultBtn>
                    </NuxtLink>
                </div>
                <NuxtImg class="hero__img" src="/images/hero/hero.webp" alt="Delicious healthy food plates from Eatly app" width="575" height="532" />
            </div>
        </div>
    </section>
    <Features :features="stats" style="padding: 0px 0" />
    <section class="team">
        <div class="container">
            <div class="team__wrapper">
                <BaseSectionTitle>Our <span>Team</span></BaseSectionTitle>
                <div class="team__grid">
                    <div class="team__card member" v-for="member in members">
                        <NuxtImg class="member__img" :src="member.gender == 'male' ? '/images/about/male.png' : '/images/about/female.png'" :alt="member.pos" format="webp" width="120" height="120" />
                        <h4 class="member__name">{{ member.name }}</h4>
                        <p class="member__pos">{{ member.pos }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
}

.hero__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.team__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 40px;
}

.team__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.member {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.member__img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid rgb(230, 222, 222);
    background-color: #ccc;
}

.member__name {
    font-size: 24px;
    font-weight: 600;
    line-height: 0.8;
}

@include tablet {
    .hero__wrapper {
        gap: 50px;
    }

    .hero__img {
        width: 450px;
    }
}

@include tablet-small {
    .hero__wrapper {
        text-align: center;
        flex-direction: column;
        gap: 40px;
    }
}
</style>
