import {useAuthStore} from "~/store/UseAuthStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useAuthStore();

    const hasToken = !!authStore.accessToken;

    if (to.path === "/sign-in") {
        if (hasToken) {
            return navigateTo("/dashboard");
        }
        return;
    }

    if (hasToken && !authStore.getCurrentUser) {
        try {
            const userData = await useApi<any>("/auth/me", {method: "GET"});
            authStore.setUser(userData);
        } catch (error) {
            console.error("Failed to get profile after page refresh", error);
            authStore.clearAuth();
            return navigateTo("/sign-in");
        }
    }

    if (!hasToken) {
        return navigateTo({
            path: "/sign-in",
            query: {redirect: to.fullPath},
        });
    }
});
