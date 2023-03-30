import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const BlogContainer = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("FakeData.jsx")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="flex flex-col md:flex-row gap-4 px-28 mt-8">
      <div className="w-full md:w-4/6">
        
        {
        blogs.map(blog => <Blog key={blog.id} blog={blog} />)
        }
      </div>
    </div>
  );
};

export default BlogContainer;
