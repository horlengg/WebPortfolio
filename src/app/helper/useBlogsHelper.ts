class BlogHelper {

    static convertTitleToURLParams(title:string){
        return title.toLowerCase().split(" ").join("-");
    }
}

export default BlogHelper;