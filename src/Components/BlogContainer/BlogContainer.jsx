import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import { addTimeToDB, getTotalTimeFromDB } from "../../Utilities/localDb";
import TimeCounter from "../TimeCounter/TimeCounter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  const [readBlogs, setReadBlogs] = useState({});
  useEffect(() => {
    fetch("FakeData.jsx")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const readBlogsLS = getTotalTimeFromDB();
    setReadBlogs(readBlogsLS);
    console.log(readBlogsLS);
  }, []);
  const handleBookmarksClick = (blog) => {
    console.log(blog);
  };
  const handleReadMoreClick = (id, time) => {
    const readBlogsDB = getTotalTimeFromDB();
    let exist;
    for (const storageId in readBlogsDB) {
      exist = parseInt(storageId) === id ? true : false;
      if (exist) {
        break;
      }
    }
    if (!exist) {
      readBlogsDB[id] = time;
      addTimeToDB(id, time);
      setReadBlogs(readBlogsDB);
    }else{
      toast("already read it")
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 px-28 mt-8 relative">
      <div className="w-full md:w-4/6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleBookmarksClick={handleBookmarksClick}
            handleReadMoreClick={handleReadMoreClick}
            blog={blog}
          />
        ))}
      </div>
      <div className="w-full md:w-2/6 py-8 pl-5 sticky top-0 h-screen overflow-y-auto">
        <TimeCounter readBlogs={readBlogs} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default BlogContainer;
