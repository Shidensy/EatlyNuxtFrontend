export interface Author {
    author_name: string;
    author_img: string;
}

export interface ArticleResponse extends Author {
    id: number;
    date: string;
    title: string;
    img: string;
    content: string;

    next_article: number;
}
