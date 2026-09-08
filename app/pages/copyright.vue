<template>
    <article class="copyright">
        <header class="copyright__header">
            <h1 class="copyright__main-title">Copyright & Terms of Use</h1>
            <p class="copyright__date"><strong>Effective Date:</strong> August 27, 2026 | <strong>Last Updated:</strong> August 27, 2026</p>
        </header>

        <section class="copyright__section">
            <p class="copyright__text">
                All content, features, and functionality on the Eatly web application—including text, graphics, logos, button icons, and code—are the exclusive property of Eatly and are protected by
                international copyright, trademark, and other intellectual property laws.
            </p>
        </section>

        <hr class="copyright__divider" />

        <section class="copyright__section">
            <h2 class="copyright__title">1. Limited Ownership & Intellectual Property</h2>
            <p class="copyright__text">
                The Eatly brand, names, logos, and all related product and service names, design marks, and slogans are trademarks or service marks of Eatly. You are not authorized to use any Eatly
                name or mark in any advertising, publicity, or any other commercial manner without the prior written consent of Eatly.
            </p>
        </section>

        <hr class="copyright__divider" />

        <section class="copyright__section">
            <h2 class="copyright__title">2. Use License & Restrictions</h2>
            <p class="copyright__text">
                Permission is granted to temporarily view the dashboard materials on Eatly for personal, non-commercial transitory viewing only. Under this license, you may not:
            </p>
            <ul class="copyright__list">
                <li class="copyright__list-item">Modify, copy, or scrape the dashboard interfaces or source code.</li>
                <li class="copyright__list-item">Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
                <li class="copyright__list-item">Attempt to decompile, reverse engineer, or extract data from any software contained on the Eatly platform.</li>
                <li class="copyright__list-item">Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
        </section>

        <hr class="copyright__divider" />

        <section class="copyright__section">
            <h2 class="copyright__title">3. User Contributed Content</h2>
            <p class="copyright__text">
                By posting reviews, dish feedback, or profile data on Eatly, you grant the platform a non-exclusive, royalty-free, perpetual, and fully sublicensable right to use, reproduce, modify,
                adapt, publish, and display such content throughout the world in any media.
            </p>
        </section>

        <hr class="copyright__divider" />

        <section class="copyright__section">
            <h2 class="copyright__title">4. Enforcement & Digital Millennium Copyright Act (DMCA)</h2>
            <p class="copyright__text">
                We respect the intellectual property rights of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our copyright
                agent with a written notice containing detailed proof of the alleged infringement.
            </p>
        </section>

        <footer class="copyright__footer">
            <h2 class="copyright__title">5. Copyright Inquiries</h2>
            <p class="copyright__text">
                For all questions, permissions, or copyright notices regarding Eatly materials, please contact us via email at
                <a class="copyright__mail-link" href="mailto:legal@eatly-app.com">legal@eatly-app.com</a>.
            </p>
        </footer>
    </article>
</template>

<style scoped lang="scss">
.copyright {
    max-width: 760px;
    margin: 0 auto;
    padding: 60px 24px;
    font-family: "Manrope", sans-serif;
    color: #323142;
    line-height: 160%;

    section {
        padding: 20px 0;
    }

    &__header {
        margin-bottom: 40px;
    }

    &__main-title {
        font-size: 36px;
        font-weight: 800;
        line-height: 120%;
        margin-bottom: 12px;
        color: #323142;
    }

    &__date {
        font-size: 14px;
        color: #718096;
    }

    &__section {
        margin-bottom: 25px;
    }

    &__title {
        font-size: 22px;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 16px;
        color: #323142;
    }

    &__text {
        font-size: 16px;
        font-weight: 400;
        color: #4a5568;
        margin-bottom: 16px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-left: 20px;
        margin-bottom: 16px;
    }

    &__list-item {
        font-size: 16px;
        color: #4a5568;
        list-style-type: disc;
    }

    &__divider {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 20px 0;
    }

    &__mail-link {
        color: #6c5fbc;
        font-weight: 600;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: rgba(108, 95, 188, 0.8);
            text-decoration: underline;
        }
    }

    &__footer {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid #e2e8f0;
    }
}
</style>
