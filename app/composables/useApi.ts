import {useAuthStore} from "~/store/UseAuthStore";

export async function useApi<T>(request: string, options: any = {}): Promise<T> {
    const authStore = useAuthStore();
    const config = useRuntimeConfig();
    const apiBase = config.apiBase;

    const headers = {
        ...options.headers,
        ...(authStore.isAuthenticated ? {Authorization: `Bearer ${authStore.accessToken}`} : {}),
    };

    const mergedOptions = {
        baseURL: apiBase,
        credentials: "include",
        ...options,
        headers,
    };

    try {
        return await $fetch<T>(request, mergedOptions);
    } catch (error: any) {
        if (error.response?.status === 401 && !request.includes("/auth/refresh")) {
            try {
                const refreshData = await $fetch<{access_token: string}>("/auth/refresh", {
                    baseURL: apiBase,
                    method: "POST",
                    credentials: "include",
                });

                authStore.setToken(refreshData.access_token);

                mergedOptions.headers = {
                    ...mergedOptions.headers,
                    Authorization: `Bearer ${refreshData.access_token}`,
                };

                return await $fetch<T>(request, mergedOptions);
            } catch (refreshError) {
                authStore.clearAuth();
                await navigateTo("/sign-in");
                throw refreshError;
            }
        }

        throw error;
    }
}
