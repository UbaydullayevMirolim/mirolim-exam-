const Io = require("../utils/Io")
const Blogs = new Io("./db/blog.json");
const Blog = require("../models/blog");

const blog = async (req, res) => {
    try {
        const {title, text } = req.body;
        // const {image} = req.file
        


        const blogs = await Blogs.read();
        const id =  (blogs[blogs.length - 1]?.id || 0) + 1;

        const newBlog = new Blog(id,title, image, text)

        const allBlogs = blogs.length ? [...blogs, newBlog] : [newBlog];
        Blog.write(allBlogs)
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    blog
}