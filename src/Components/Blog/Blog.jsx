import React from 'react';

const Blog = () => {
  return (
    <div className='px-2 lg:px-28 py-8'>
      <h1 className='mb-8 text-center text-4xl text-slate-700  font-semibold underline decoration-1 decoration-slate-200 underline-offset-8'>Questions Section</h1>
      <h1 className='mb-3 text-2xl text-slate-700  font-semibold'>1. Props vs state</h1>
      <p className='mb-4 text-lg text-slate-600  font-semibold'>Props is not property of a component. It is just used to passed from parent component to child component. Components can not change props.<br />
      state is the property of the component. Component can update state.</p>
      <h1 className='mb-3 text-2xl text-slate-700  font-semibold'>2. How does useState work?</h1>
      <p className='mb-4 text-lg text-slate-600  font-semibold'>useState hook returns an array of two variables: a current state and function to change the state. At declaration we have to give an initial value to current state. when we have to change the state we have to use the function.
      </p>
      <h1 className='mb-3 text-2xl text-slate-700  font-semibold'>3. Purpose of useEffect other than fetching data.</h1>
      <p className='mb-4 text-lg text-slate-600  font-semibold'>useEffect allows us to perform side effect in our component. using dependencies we can render our app when we want to change a component or update a state</p>
      <h1 className='mb-3 text-2xl text-slate-700  font-semibold'>4. How Does React work?</h1>
      <p className='mb-4 text-lg text-slate-600  font-semibold'>
      When we build a component in react babel convert it into react object.
      React use virtual DOM to render components , by virtual dom it can identify which components it have to change using The Diffing Algorithm. So react change only those components and its child which needs to be change.
      </p>
    </div>
  );
};

export default Blog;