import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as selectRegular } from '@fortawesome/free-regular-svg-icons'
const Blog = (props) => {
  const { blog,handleBookmarksClick,handleReadMoreClick } = props;
  const {
    id,
    authorName,
    blogTitle,
    blogCoverImage,
    authorImage,
    readTime,
    publishDate,
    
  } = blog;
  const publishingYear=new Date(publishDate).getFullYear()===new Date().getFullYear()?null:new Date(publishDate).getFullYear();

  const publishingDate=new Date(publishDate).toLocaleDateString(undefined, {month: 'long', day: 'numeric'});

  const dateDiff=new Date()-new Date(publishDate);
  const blogPublished=Math.ceil(dateDiff/(1000*60*60*24));


  return (
    <div className="py-8">
      <img
        src={blogCoverImage}
        alt=""
        className="w-full h-96 rounded-lg shadow-xl mb-6"
      />
      <div className="flex justify-between items-center mx-4 mb-6 text-slate-600 font-medium">
        <div className="flex justify-center items-center gap-4">
          <img
            src={authorImage}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h1>{authorName}</h1>
            <h1>
              <span>{publishingDate}</span> 
              {publishingYear && <span>, {publishingYear}</span>}
              
              {
                blogPublished?<span> ({blogPublished} days ago)</span>: <span> (today)</span>
              }
            </h1>

          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <h1>{readTime} min read</h1>
          <button onClick={()=>handleBookmarksClick(blog)}><FontAwesomeIcon icon={selectRegular} /></button>
        </div>
      </div>
      <button className="mx-4 underline underline-offset-4 mb-8 font-medium text-blue-700" onClick={()=>handleReadMoreClick(id,readTime)}>Read More.....</button>
      <hr />
    </div>
  );
};

export default Blog;
