export interface iResDataArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: {
    id: string,
    name: string
  }
  title: string;
  url: string;
  urlToImage: string;
}