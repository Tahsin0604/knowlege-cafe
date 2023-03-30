import React from 'react';

const Blog = (props) => {
  const {blog,lastElement}=props;
  return (
    <div className='py-8'>
      <img src={blog.blogCoverImage} alt=""  className='w-full rounded-lg shadow-xl mb-6'/>
      <hr/>
    </div>
  );
};

export default Blog;