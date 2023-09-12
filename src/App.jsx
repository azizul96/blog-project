import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"



function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)



  const bookmarkHandler = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
  }

  const readingTimeHandler = (id ,time ) =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)

    const remainingBookmark= bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)
  }


  return (
    <div className=" container mx-auto">
      <Header></Header>

      <div className=" flex gap-5">
        <Blogs bookmarkHandler={bookmarkHandler} readingTimeHandler={readingTimeHandler}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
