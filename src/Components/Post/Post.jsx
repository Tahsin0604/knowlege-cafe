import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as selectRegular } from '@fortawesome/free-regular-svg-icons'
const Post = (props) => {

  //props destructuring..........
  const { blog,handleBookmarksClick,handleReadMoreClick } = props;
  
  //blog destructuring..........
  const {
    id,
    authorName,
    blogTitle,
    blogCoverImage,
    authorImage,
    readTime,
    publishDate,
    tags
    
  } = blog;

  //variable for publishing Year. Shown if not current year
  const publishingYear=new Date(publishDate).getFullYear()===new Date().getFullYear()?null:new Date(publishDate).getFullYear();
  //variable for publishing Date show only date and month
  const publishingDate=new Date(publishDate).toLocaleDateString(undefined, {month: 'long', day: 'numeric'});
  //calculating date difference from current date
  const dateDiff=new Date()-new Date(publishDate);
  const blogPublished=Math.ceil(dateDiff/(1000*60*60*24));


  return (
    <div className="py-8">
      <img
        src={blogCoverImage}
        alt=""
        className="w-full h-56 md:h-72 lg:h-96 rounded-lg shadow-xl mb-6"
      />
      <div className="flex justify-between items-center mx-4 mb-6 text-slate-600 font-medium flex-col md:flex-row gap-2">
        <div className="flex w-full md:w-auto justify-start md:justify-center items-center gap-4">
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
        <div className="flex w-full md:w-auto justify-end md:justify-center items-center gap-4">
          <h1>{readTime} min read</h1>
          <button onClick={()=>handleBookmarksClick(blog)}><FontAwesomeIcon icon={selectRegular} /></button>
        </div>
      </div>
      <h1 className="font-bold text-3xl mb-6 mx-4  text-slate-800">{blogTitle}</h1>
      

      {
        tags ? <h1 className="text-slate-900 font-light text-lg mb-6 mx-4">
          {tags.map((tag,index)=>
            <span key={index}>#{tag} &nbsp;</span>)}
        </h1>:''
      }

      <button className="mx-4 underline underline-offset-4 mb-8 font-medium text-blue-700" onClick={()=>handleReadMoreClick(readTime)}>Read More.....</button>
      <hr />
    </div>
  );
};

export default Post;
