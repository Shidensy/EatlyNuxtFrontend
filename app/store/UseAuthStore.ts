import type {CookieRef} from "#app";
import {defineStore} from "pinia";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    accessToken: CookieRef<string | null>;
    user: User | null;
}

export const useAuthStore = defineStore("auth", {
    state: (): AuthState => ({
        accessToken: useCookie<string | null>("access_token", {maxAge: 900, sameSite: "lax"}),
        user: null,
    }),

    getters: {
        isAuthenticated: (state): boolean => !!state.accessToken,
        getCurrentUser: (state) => state.user,
    },

    actions: {
        setToken(token: string) {
            this.accessToken = token;
        },

        setUser(userData: User) {
            this.user = userData;
        },

        clearAuth() {
            this.accessToken = null;
            this.user = null;
        },

        async logout() {
            try {
                await useApi("/auth/logout", {method: "POST"});
            } catch (error) {
                console.error("Logout failed:", error);
            } finally {
                this.clearAuth();

                if (import.meta.client) {
                    alert("Successfully logout");
                }

                await navigateTo("/sign-in");
            }
        },
    },
});
