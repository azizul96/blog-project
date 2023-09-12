

const Blog = ({blog, bookmarkHandler, readingTimeHandler}) => {
    
    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog
    
    return (
        <div className="mb-10">
            <img className=" w-full" src={cover} alt="" />
            <div className=" flex justify-between">
                <div className=" flex">
                    <img className=" w-14" src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>bookmarkHandler(blog)}><i className="fa-solid fa-bookmark"></i></button>
                </div>
            </div>
            <h1>{title}</h1>
            <p>
                {
                   hashtags.map((hash, idx) => <span key={idx}>#{hash} </span>) 
                }
            </p>
            <button onClick={()=> readingTimeHandler(id, reading_time)}>Mark As Read</button>
        </div>
    );
};

export default Blog;