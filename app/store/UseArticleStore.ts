import {defineStore} from "pinia";
import type {ArticleResponse, Author} from "~/types/article";

export const useArticleStore = defineStore("article", {
    state: () => ({
        articles: [] as ArticleResponse[],
        article: {} as ArticleResponse,
    }),
    getters: {
        author: (state): Author => ({
            author_img: state.article.author_img,
            author_name: state.article.author_name,
        }),
        topThreeArticles: (state) => state.articles.slice(0, 3),
    },
    actions: {
        async getArticles() {
            try {
                const config = useRuntimeConfig();
                this.articles = await $fetch<ArticleResponse[]>(`${config.apiBase}/articles/`);
            } catch (err: any) {
                console.log(err);
            }
        },

        async getArticle(id: string) {
            try {
                const config = useRuntimeConfig();
                this.article = await $fetch<ArticleResponse>(`${config.apiBase}/articles/${id}`);
            } catch (err: any) {
                console.log(err);
            }
        },
    },
});
