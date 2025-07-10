import { ArticleType } from "./blog.type";

class BlogService {

  static async getArticles():Promise<Array<ArticleType>>{
    try {
      const response = await fetch(`/blogs/articles.json`);
      const articles = await response.json(); 
      return articles;
    } catch (error) {
      console.error('Error loading markdown file:', error);
      return [];
    }
  }

  static async getBlog(title:string){
    try {
        if(!title) return;
        const response = await fetch(`/blogs/documentation/${title}.md`);
        const markdown = await response.text(); // Get Markdown as text
        return markdown;
      } catch (error) {
        console.error('Error loading markdown file:', error);
      }
  }
    

}

export default BlogService;