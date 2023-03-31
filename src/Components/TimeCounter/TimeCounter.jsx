import React from 'react';

const TimeCounter = (props) => {
  const {readBlogs}=props;
  let totalTime=0;
  for(const id in readBlogs){
    totalTime+=readBlogs[id];
  }
  return (
    <div className='px-8 py-8 text-center font-semibold text-2xl text-blue-700 bg-slate-100 rounded-lg'>
      <h1>Spent time on read : {totalTime} min</h1>
    </div>
  );
};

export default TimeCounter;