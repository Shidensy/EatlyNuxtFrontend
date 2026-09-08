<script setup lang="ts">
import {useAuthStore} from "~/store/UseAuthStore";

const authStore = useAuthStore();
</script>

<template>
    <section class="dashboard">
        <div class="dashboard__wrapper">
            <DashboardSidebar />

            <div class="dashboard__content">
                <div class="dashboard__top">
                    <BaseSectionTitle class="dashboard__title" style="font-size: 24px; opacity: 0.8">Dashboard(not complete ofc)</BaseSectionTitle>

                    <ul class="ul">
                        <li>🔍</li>
                        <li>💡</li>
                        <li>{{ authStore?.getCurrentUser?.name }}</li>
                    </ul>
                </div>

                <DashboardDeals />
                <div style="display: grid; grid-template-columns: 1fr auto; gap: 20px; margin-top: 60px">
                    <PurchasesStatList />
                    <PurchasesList />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.dashboard {
    padding: 0;
    overflow-y: hidden;
}

.dashboard__wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 100%;
    height: 100%;
    min-height: 100vh;
}

.dashboard__content {
    padding: 25px;
    background-color: #f5f5f5;
}

.dashboard__top {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
}

.ul {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>
