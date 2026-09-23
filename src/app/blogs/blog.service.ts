import { ArticleType } from "./blog.type";

class BlogService {

  static async getArticles(): Promise<Array<ArticleType>> {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/horlengg/storage_repo/dev/articles.json'
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch articles: ${response.status}`);
      }
      const articles = await response.json();
      return articles;
    } catch (error) {
      console.error('Error loading articles.json:', error);
      return [];
    }
  }

  static async getBlog(title: string): Promise<string | undefined> {
    try {
      if (!title) return;
      const response = await fetch(
        `https://raw.githubusercontent.com/horlengg/storage_repo/dev/documentation/${encodeURIComponent(title)}.md`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch blog "${title}": ${response.status}`);
      }
      const markdown = await response.text();
      return markdown;
    } catch (error) {
      console.error('Error loading markdown file:', error);
    }
  }
    

}

export default BlogService;