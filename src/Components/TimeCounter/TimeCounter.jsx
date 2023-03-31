import React from 'react';

const TimeCounter = (props) => {
  const {readTime}=props;
  return (
    <div className='px-8 py-8 text-center font-semibold text-2xl text-blue-700 bg-slate-100 rounded-lg mr-1'>
      <h1>Spent time on read : {readTime} min</h1>
    </div>
  );
};

export default TimeCounter;