import React, { useEffect, useState } from "react";
import { addValueToDB, getValueFromDB } from "../../Utilities/localDb";
import TimeCounter from "../TimeCounter/TimeCounter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookmarkContainer from "../BookmarkContainer/BookmarkContainer";
import Post from "../Post/Post";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readBlogs, setReadBlogs] = useState({});
  useEffect(() => {
    fetch("FakeData.jsx")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const readBlogsLS = getValueFromDB("total-time");
    setReadBlogs(readBlogsLS);
  }, []);

  useEffect(() => {
    const bookmarksObject = getValueFromDB("book-marks");
    let tempBookmarks = [];
    for (const id in bookmarksObject) {
      const addedBookmarks = blogs.find((blog) => blog.id === parseInt(id));
      if (addedBookmarks) {
        tempBookmarks.push(addedBookmarks);
      }
    }
    setBookmarks(tempBookmarks);
  }, [blogs]);

  const handleBookmarksClick = (blog) => {
    const exists=bookmarks.find(bookmark=>bookmark.id===blog.id);
    if (exists) {
      toast('You Have Already Bookmarked This Blog');
    } else {
      const tempBookmarks = [...bookmarks, blog];
      addValueToDB(blog.id, blog.blogTitle, "book-marks");
      setBookmarks(tempBookmarks);
    }
  };
  const handleReadMoreClick = (id, time) => {
    const readBlogsDB = getValueFromDB("total-time");
    let exist;
    for (const storageId in readBlogsDB) {
      exist = parseInt(storageId) === id ? true : false;
      if (exist) {
        break;
      }
    }
    if (!exist) {
      readBlogsDB[id] = time;
      addValueToDB(id, time, "total-time");
      setReadBlogs(readBlogsDB);
    } else {
      toast("already read it");
    }
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
        <TimeCounter readBlogs={readBlogs} />
        <BookmarkContainer bookmarks={bookmarks} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogContainer;
