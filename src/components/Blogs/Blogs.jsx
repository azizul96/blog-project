import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({bookmarkHandler,readingTimeHandler}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className=" w-2/3">
            <h1>Blogs</h1>
            <div>
                {
                   blogs.map(blog => <Blog key={blog.id} blog={blog} bookmarkHandler={bookmarkHandler} readingTimeHandler=
                    {readingTimeHandler} ></Blog>) 
                }
            </div>
        </div>
    );
};

export default Blogs;