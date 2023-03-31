import React from "react";

const BookmarkContainer = (props) => {
  const { bookmarks } = props;
  return (

    <>
      {bookmarks.map((bookmark,index)=>
        <div key={index} className='px-6 py-8  font-semibold text-xl text-slate-800 bg-slate-100 rounded-lg my-4 mr-1'>
          <h1>{bookmark.blogTitle}</h1>
          </div>
      )}
    </>
    
  );
};

export default BookmarkContainer;
