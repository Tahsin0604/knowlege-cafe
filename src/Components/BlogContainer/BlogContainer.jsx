import React, { useEffect, useState } from "react";
import {
  addTimeToDB,
  getTimeFromDB,
  addBookmarksToDB,
  getBookmarksFromDB,
} from "../../Utilities/localDb";
import TimeCounter from "../TimeCounter/TimeCounter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookmarkContainer from "../BookmarkContainer/BookmarkContainer";
import Post from "../Post/Post";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  //useEffect for fetch data
  useEffect(() => {
    fetch("FakeData.jsx")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //useEffect to get bookmarks value
  useEffect(() => {
    const bookmarksObject = getBookmarksFromDB();
    let tempBookmarks = [];
    for (const id in bookmarksObject) {
      const addedBookmarks = blogs.find((blog) => blog.id === parseInt(id));
      if (addedBookmarks) {
        tempBookmarks.push(addedBookmarks);
      }
    }
    setBookmarks(tempBookmarks);
  }, [blogs]);

  //set bookmarks value
  const handleBookmarksClick = (blog) => {
    const exists = bookmarks.find((bookmark) => bookmark.id === blog.id);
    if (exists) {
      toast("You Have Already Bookmarked This Blog");
    } else {
      const tempBookmarks = [...bookmarks, blog];
      addBookmarksToDB(blog.id, blog.blogTitle);
      setBookmarks(tempBookmarks);
    }
  };

  //useEffect to read total reading Time from local storage
  useEffect(() => {
    const readTimeLS = getTimeFromDB("time");
    setReadTime(readTimeLS);
  }, []);
  //add time to local storage
  const handleReadMoreClick = (time) => {
    const currentTime=readTime+time;
    addTimeToDB(time);
    setReadTime(currentTime);
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 px-2 lg:px-28 mt-8 relative">
      <div className="w-full md:w-4/6">
        {blogs.map((blog) => (
          <Post
            key={blog.id}
            handleBookmarksClick={handleBookmarksClick}
            handleReadMoreClick={handleReadMoreClick}
            blog={blog}
          />
        ))}
      </div>
      <div className="w-full md:w-2/6 my-8 lg:pl-5 sticky top-0 h-screen overflow-y-auto">
        <TimeCounter readTime={readTime} />
        <BookmarkContainer bookmarks={bookmarks} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogContainer;
