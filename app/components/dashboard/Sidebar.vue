<script setup lang="ts">
import Logo from "~/assets/icons/logo.svg";
import {useAuthStore} from "~/store/UseAuthStore";

const authStore = useAuthStore();

const sidebarLinks = [
    {name: "♦ Dashboard", path: "/dashboard"},
    {name: "♦ Orders", path: "/dashboard"},
    {name: "♦ Messages", path: "/dashboard"},
    {name: "♦ My Wallets", path: "/dashboard"},
    {name: "♦ Activity", path: "/dashboard"},
];

const sidebarBottomLinks = [
    {name: "♦ Help", path: "/dashboard"},
    {name: "♦ Settings", path: "/dashboard"},
];
</script>

<template>
    <aside class="sidebar">
        <div class="sidebar__logo">
            <NuxtLink to="/">
                <Logo class="sidebar__logo-icon" />
            </NuxtLink>
        </div>

        <ul class="sidebar__list">
            <li class="sidebar__list-item" v-for="(link, index) in sidebarLinks" :key="index">
                <NuxtLink class="sidebar__list-link" to="/dashboard">{{ link.name }}</NuxtLink>
            </li>
        </ul>

        <ul class="sidebar__list sidebar__list--bottom">
            <li class="sidebar__list-item" v-for="(link, index) in sidebarBottomLinks" :key="index">
                <NuxtLink class="sidebar__list-link" to="/dashboard">{{ link.name }}</NuxtLink>
            </li>
            <li class="sidebar__list-item">
                <button class="sidebar__list-link" type="button" @click.prevent="authStore.logout">♦ Logout</button>
            </li>
        </ul>
    </aside>
</template>

<style scoped lang="scss">
.sidebar {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
    padding: 25px;
    background-color: #eaeaea;
}

.sidebar__logo {
    padding-bottom: 10px;
    border-bottom: 1px solid #999999;
}

.sidebar__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
}

.sidebar__list-link {
    display: block;
    width: 100%;
    padding: 8px 10px;
    border-radius: 12px;
    color: #999999;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    text-decoration: none;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    @include hover {
        color: #fff;
        background-color: #6c5fbc;
    }
}
</style>
