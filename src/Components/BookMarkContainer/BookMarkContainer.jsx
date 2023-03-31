import React from "react";

const BookmarkContainer = (props) => {
  const { bookmarks } = props;
  return (

    <div className="px-6 py-8 mt-6 bg-slate-100 rounded-lg">
    <h1 className="font-semibold text-2xl text-slate-800">Bookmarked Blogs : {bookmarks.length}</h1>
      {bookmarks.map((bookmark,index)=>
        <div key={index} className='px-6 py-8  font-semibold text-xl text-slate-800 bg-white rounded-lg my-4 '>
          <h1>{bookmark.blogTitle}</h1>
          </div>
      )}
    </div>
    
  );
};

export default BookmarkContainer;
