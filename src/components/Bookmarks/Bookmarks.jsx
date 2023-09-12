import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {

    console.log(readingTime);
    return (
        <div className=" w-1/3">
            <h1>Bookmarks: {bookmarks.length}</h1>
            <h1>Time: {readingTime}</h1>
            <div>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;