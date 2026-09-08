import {useAuthStore} from "~/store/UseAuthStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();

    const hasToken = !!authStore.accessToken;

    if (!hasToken) {
        return navigateTo({
            path: "/sign-in",
        });
    }
});
