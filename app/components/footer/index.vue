<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__grid">
                <BaseDefaultLogo />
                <FooterNavList />

                <div class="footer__credentials">© {{ currentYear }} EATLY All Rights Reserved.</div>

                <FooterSocials />
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    background-color: #eaeaea;
}

.footer__grid {
    position: relative;
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    row-gap: 60px;
    padding: 30px 0;

    &::before {
        content: "";
        position: absolute;
        top: calc(50% - 1px);
        left: 0;
        width: 100%;
        height: 1px;
        background-color: rgba(129, 129, 129, 0.25);
    }
}

.footer__credentials {
    color: #999;
    font-family: $font-inter, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
}

@include tablet {
    .footer__credentials {
        font-size: 12px;
    }
}

@include tablet-small {
    .footer__grid {
        row-gap: 30px;
    }

    .footer__credentials {
        color: #70798b;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
    }
}

@include mobile {
    .footer__grid {
        grid-template-columns: 1fr;
        &::before {
            content: none;
        }

        :nth-child(1) {
            order: 1;
        }
        :nth-child(2) {
            order: 2;
            grid-column: span 2;
        }

        :nth-child(3) {
            order: 3;
            grid-column: span 2;
        }

        :nth-child(4) {
            order: 1;
        }
    }
}
</style>
