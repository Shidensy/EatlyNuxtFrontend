import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
    compatibilityDate: "2026-08-03",
    devtools: {enabled: true},
    css: ["~/assets/styles/main.scss", "swiper/css", "swiper/css/pagination"],
    app: {
        head: {
            script: [
                {
                    src: "https://api-maps.yandex.ru/v3/?apikey=146f7156-7ed1-461b-8cdd-bebdeaf0a0de&lang=ru_RU",
                    type: "text/javascript",
                    defer: true,
                },
            ],
        },
    },

    vite: {
        plugins: [
            svgLoader({
                svgoConfig: {
                    plugins: [
                        {
                            name: "preset-default",
                            params: {
                                overrides: {
                                    removeViewBox: false,
                                },
                            },
                        },
                    ],
                },
            }),
        ],
        optimizeDeps: {
            exclude: ["swiper/element/bundle"],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @use "~/assets/styles/_variables.scss" as *;
            @use "~/assets/styles/_mixins.scss" as *;
          `,
                },
            },
        },
    },
    modules: ["@pinia/nuxt", "@nuxt/image"],
    nitro: {
        externals: {
            external: ["markdown-it"],
        },
    },
    pinia: {
        storesDirs: ["./stores/**"], // Auto-imports stores from this directory
    },
    runtimeConfig: {
        apiBase: "http://127.0.0.1:8000",

        public: {
            apiBase: "/api",
        },
    },
});
