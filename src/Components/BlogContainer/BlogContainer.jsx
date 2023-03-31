import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  useEffect(() => {
    fetch("FakeData.jsx")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  const handleBookmakrsClick = (blog) => {
    console.log(blog);
  };
  const handleReadMoreClick = (time) => {
    console.log(time);
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 px-28 mt-8">
      <div className="w-full md:w-4/6">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleBookmarksClick={handleBookmakrsClick}
            handleReadMoreClick={handleReadMoreClick}
            blog={blog}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
