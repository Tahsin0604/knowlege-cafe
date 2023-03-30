import React from "react";

const Blog = (props) => {
  const { blog, lastElement } = props;
  const {
    authorName,
    blogTitle,
    blogCoverImage,
    authorImage,
    readTime,
    publishDate,
  } = blog;
  const publishingYear=new Date(publishDate).getFullYear()===new Date().getFullYear()?null:new Date(publishDate).getFullYear();

  const publishingDate=new Date(publishDate).toLocaleDateString(undefined, {month: 'long', day: 'numeric'});

  const dateDiff=new Date() -new Date(publishDate);
  const blogPublished=Math.ceil(dateDiff/(1000*60*60*24));
  return (
    <div className="py-8">
      <img
        src={blogCoverImage}
        alt=""
        className="w-full rounded-lg shadow-xl mb-6"
      />
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          <img
            src={authorImage}
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h1>{authorName}</h1>
            <h1>
              <span>{publishingDate}</span> 
              {publishingYear && <span>, {publishingYear}</span>}
              
                {
                {blogPublished}?
                <span> ({blogPublished} days ago)</span>: 
                <span> (today)</span>
                }
            </h1>

          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h1>{readTime} min read</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
